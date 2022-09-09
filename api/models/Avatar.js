/**
 * Avatar.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "avatars",
  attributes: {

    avatar_name: { type: 'string'},
    path: {type:'string'},
    ownerAvatar: { model: 'profile', unique: true },
  },

};

