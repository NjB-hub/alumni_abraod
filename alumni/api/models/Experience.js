/**
 * Experience.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "experiences",
  attributes: {

    position: {
      type: 'string', 
      required: true },
    occupationDate: {
      type:'number', 
      required:true},
    company: {
      type: 'string', 
      required: true },
    description: {type: 'string' },

    profileExperience: {
      model: 'profile', 
      },

  },

};

