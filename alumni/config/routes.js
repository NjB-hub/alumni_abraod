/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'POST /user/register': 'user/register',
    'GET /user/confirm': 'user/confirm',

    'GET /post/index': { action: 'post/index' },
    'POST /post/create': { action: 'post/create' },
    'PATCH /post/update/:id': { action: 'post/update' },
    'DELETE /post/delete/:id': { action: 'post/delete' },
    
    'POST /comment/create': { action: 'comment/create' },
    'POST /comment/index': { action: 'comment/index' },
    'PATCH /comment/update/:id': { action: 'comment/update' },
    'DELETE /comment/delete/:id': { action: 'comment/delete' },

    'POST /offer/create': { action: 'offer/create' },
    'POST /offer/index': { action: 'offer/index' },
    'DELETE /offer/delete/:id': { action: 'offer/delete' },
    'PATCH /offer/update/:id': { action: 'offer/update' },

    'POST /event/create': { action: 'event/create' },
    'POST /event/index': { action: 'event/index' },
    'PATCH /event/update/:id': { action: 'event/update' },
    'DELETE /event/delete/:id': { action: 'event/delete' },   
  
    'POST /post/image': 'ImageController.UploadImage',
    'POST /user/avatar': 'avatarController.uploadAvatar',
    'GET /user/avatar/:id' : 'avatarController.avatar',
    
};
