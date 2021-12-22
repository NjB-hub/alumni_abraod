/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "posts",
  attributes: {

    photo:
    {
      collection: 'image',
      via: 'ownerImage'
    },

    description: { type: 'string' }, 
   category: { 
    type: 'string',
    required: true },

   ownerP: {
    model: 'user', 
    },
    
   postComments: {
     collection: 'comment',
     via: 'owP'
   }

  },

};

