var Grid = require('gridfs-stream');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const fs = require('fs')

module.exports = function (sails) { 
    return {
      routes: {
        before: {
          'POST /post/create': function (req, res, next) {
            const db = sails.getDatastore().manager;
            const driver = sails.getDatastore().driver.mongodb;
            const bucket = new driver.GridFSBucket(db);

            //save files
            var nbFiles = parseInt(req.body.nbFiles);
            var filesNamesList = req.body.filesNames.trim().split(" ");

            var nbUploadedFiles = 0
            var dbFilesNames = "";
            for(var i in filesNamesList){
                let fileName = filesNamesList[i];
                req.file(fileName).upload(function(err, uploadedFile){
                    if(uploadedFile.length > 0){
                        type = uploadedFile[0].type.split("/")[0];
                        pathSplit = uploadedFile[0].fd.split("/");
                        let uploadStream = bucket.openUploadStream(pathSplit[pathSplit.length-1]);
                        uploadStream.on('finish', function(file){
                            dbFilesNames += file.filename + "/" + type + " ";
                            nbUploadedFiles++;
                        })
                        fs.createReadStream(uploadedFile[0].fd)
                        .pipe(uploadStream);
                    }
                })
            }
    
            var uploadCompleted = setInterval(() => {
                if(nbUploadedFiles == nbFiles){
                    req.dbFilesNames = dbFilesNames;
                    clearInterval(uploadCompleted);
                    return next();
                }
            }, 500);
          }
        },
        after: {
        }
      }
    };
  };