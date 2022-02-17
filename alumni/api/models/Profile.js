/**
 * Profile.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "profiles",

  attributes: {
    name: {type: 'string'},
    surname: {type: 'string'},
    gender: {type: 'string'},
    dateOfBirth: {type: 'string'},
    phone: {type: 'string'},
    address: {type: 'string'},
    avatar: {
      collection: 'avatar',
      via: 'ownerAvatar' 
    },
    position: {type: 'string'},
    description: {type: 'string'},
    profileOwner: { 
      model: 'user', 
      unique: true,
    },
    posts: {
      collection: 'post',
      via: 'ownerProfile'
    }
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

