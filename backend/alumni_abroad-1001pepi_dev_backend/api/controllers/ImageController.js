/**
 * ImageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    uploadImage: function(req, res) {
        req.image('uploadimage').upload({
            maxBytes: 10000000,  //don't allow the total upload size to exceed ~10MB
            adapter: require('skipper-gridfs'),
            uri: 'mongodb://localhost:27017/alumni.images'
        }, function(err, images) {
            if (err) {
                return res.serverError(err);
            }
            console.log('', images);
            return res.json({
                message: images.length + ' image(s) uploaded successfully!',
                images: images
            });
        });
    }

};

