/**
 * Event.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "events",
  attributes: {

    dateEvent: { 
      type: 'string', 
      required: true },
    place: {
      type: 'string',
      required: true
    },
    post_id: { 
      model: 'post', 
      },
    participants: {
      collection: 'user',
      via: 'userEvents' 
    },

  },

};

