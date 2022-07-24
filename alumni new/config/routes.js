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
  "POST /user/register": "user/register",
  "GET /user/confirm": "user/confirm",
  "GET /user/:id": { action: "user/get" },
  "POST /user/login": "user/login",
  "POST /user/forgot-password": "user/forgot-password",
  "POST /user/reset-password": "user/reset-password",
  "DELETE /user/delete/:id": { action: "user/delete" },

  "GET /post/index": { action: "post/index" },
  "POST /post/create": { action: "post/create" },
  "PATCH /post/update/:id": { action: "post/update" },
  "DELETE /post/delete/:id": { action: "post/delete" },

  "POST /comment/create": { action: "comment/create" },
  "POST /comment/index": { action: "comment/index" },
  "PATCH /comment/update/:id": { action: "comment/update" },
  "DELETE /comment/delete/:id": { action: "comment/delete" },

  "POST /offer/create": { action: "offer/create" },
  "POST /offer/index": { action: "offer/index" },
  "DELETE /offer/delete/:id": { action: "offer/delete" },
  "PATCH /offer/update/:id": { action: "offer/update" },

  "POST /event/create": { action: "event/create" },
  "POST /event/index": { action: "event/index" },
  "PATCH /event/update/:id": { action: "event/update" },
  "DELETE /event/delete/:id": { action: "event/delete" },

  "POST /file/upload": "ImageController.uploadImage",
  "GET /image/download/:id": { action: "image/download" }, // telechargement
  "GET /file/download/:id": "ImageController.downloadFile", // affichage et telechargement
  "POST /user/avatar": "avatarController.uploadAvatar",
  "GET /user/avatar/:id": "avatarController.avatar",

  // "GET /user/subscribe": "UserController.subscribe",
//"@sailshq/lodash": "^3.10.4",
  "/upload-file": {
    view: "uploadfile", // view 'uploadfile' in views directory will loaded automatically
  },
};
