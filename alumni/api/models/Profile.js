/**
 * Profile.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "profiles",
  attributes: {

    name: {
      type: 'string', 
      required: true},
    surname: {
      type: 'string', 
      required: true},
    gender: {
      type: 'string', 
      required: true},
    phone: {
      type: 'string', 
      required: true},
    location: {
      type: 'string', 
      required: true},
    avatar: {
        collection: 'avatar',
        via: 'ownerAvatar' 
      },
    profession: {
      type: 'string', 
      required: true},
    description: {type: 'string'},

    profileOwner: { 
      model: 'user', 
      unique: true,
      },

  },

  certifications: {
    collection: 'certification',
    via: 'profileCertification' 
  },

  experiences: {
    collection: 'experience',
    via: 'profileExperience' 
  },

  formations: {
    collection: 'formation',
    via: 'profileFormation' 
  },

  expertises: {
    collection: 'expertise',
    via: 'profileExpertise' 
  },

};

