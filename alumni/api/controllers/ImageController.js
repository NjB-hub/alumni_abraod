/**
 * ImageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var uuid = require("node-uuid"),
  path = require("path"),
  blobAdapter = require("skipper-disk");
var async = require("async");

module.exports = {
  uploadImage: function (req, res) {
    var receiver = blobAdapter().receive({
        saveAs: function (file) {
          var filename = file.filename,
            newName = uuid.v4() + path.extname(filename);
          return newName;
        },
      }),
      results = [];

    req.file("uploadImage").upload(receiver, function (err, files) {
      if (err) return res.serverError(err);
      async.forEach(
        files,
        function (file, next) {
          Image.create({
            name: file.filename,
            size: file.size,
            type: file.type,
            path: file.fd,
          }).exec(function (err, savedFile) {
            if (err) {
              next(err);
            } else {
              results.push({
                id: savedFile.id,
                name: savedFile.name,
                size: savedFile.size,
                type: savedFile.type,
                path: savedFile.path,
              });
              next();
            }
          });
        },
        function (err) {
          if (err) {
            sails.log.error("caught error", err);
            return res.serverError({ error: err });
          } else {
            return res.json({ files: results });
          }
        }
      );
    });
  },

  downloadFile: function (req, res) {
    Image.findOne(req.params.id).exec(function (err, image) {
      if (err) {
        return res.serverError(err);
      }
      if (!image) {
        return res.notFound();
      }
      try {
        sails.startDownload(image.path).exec(function (err, downloading) {
          if (err) {
            return res.serverError(err);
          }
          try {
            res.type(image.type);
            return downloading.pipe(res);
          } catch (err) {
            return res.serverError(err);
          }
        });
      } catch (err) {
        return res.serverError(err);
      }
    });
  },

  _config: {},
};
