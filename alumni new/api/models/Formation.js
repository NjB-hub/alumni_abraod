/**
 * Formation.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "formations",
  attributes: {

    type: {
      type: 'string', 
      required: true },
    school: {
      type: 'string', 
      required: true },
    duration: {type:'number'},
    diploma: {
      type: 'string', 
      required:true },
    profileFormation: {
      model: 'profile', 
      },


  },

};

