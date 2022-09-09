/**
 * Offer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "offers",

  attributes: {
    company: { 
      type: 'string', 
      required: true
    },
    postId: { 
      model: 'post', 
    },
  },
  
};

