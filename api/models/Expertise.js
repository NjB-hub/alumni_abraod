/**
 * Expertise.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "expertises",
  attributes: {

    value: {type: 'string', 
    required: true },
    profileExpertise: {
      model: 'profile', 
      },

  },


};

