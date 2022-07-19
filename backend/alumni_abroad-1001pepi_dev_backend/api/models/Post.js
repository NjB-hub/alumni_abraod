/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "posts",

  attributes: {
    title :{
      type: 'string',
      required: true
    },
    photo:{
      collection: 'image',
      via: 'ownerImage'
    },
    description: { type: 'string' }, 
    category: { 
      type: 'string',
      required: true   
    },
    event:{
      collection: 'event',
      via: 'post_id'
    },
    offer:{
      collection: 'offer',
      via: 'post_id'
    },
    ownerP: {model: 'user'},
    ownerProfile: {model: 'profile'},
   postComments: {
     collection: 'comment',
     via: 'owP'
   }

  }, 

};

