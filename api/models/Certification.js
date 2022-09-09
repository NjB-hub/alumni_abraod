/**
 * Certification.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "certifications",
  attributes: {

    company: {
      type: 'string', 
      required: true 
    },
    expirationDate: {
      type:'string', 
      required:true
  },
    profileCertification: {
      model: 'profile' 
      },

  },

};

