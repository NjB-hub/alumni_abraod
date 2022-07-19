/**
 * Image.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "images",
  attributes: {

    image_name: { type: 'string'},
    path: {type:'string'},
    ownerImage: { model: 'post' },
    
  },

};

