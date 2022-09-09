const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Sails = require('sails/lib/app/Sails');

module.exports = async function (req, res, proceed) {   
    //create storage engine
    const db = sails.getDatastore().manager;
    const storage = new GridFsStorage({
        db:db,
    })
  
    upload = multer({storage});
  
    upload.single('image0');
    sails.log("reachedk");
};