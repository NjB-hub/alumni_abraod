/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    downloadFile: function (req, res) {
        const db = sails.getDatastore().manager;
        const driver = sails.getDatastore().driver.mongodb;
        const bucket = new driver.GridFSBucket(db);
        bucket.find({ filename:req.query.filename }).toArray((err, files) => {
            if (files.length>0) {
                const readstream = bucket.openDownloadStreamByName(req.query.filename);
                readstream.pipe(res);
            } else {
                return res.serverError(err);
            }
        }) 
    }
};

