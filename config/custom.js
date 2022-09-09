/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // sendgridSecret: 'SG.fake.3e0Bn0qSQVnwb1E4qNPz9JZP5vLZYqjh7sn8S93oSHU',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
  emailProofTokenTTL: 24 * 60 * 60 * 1000, // 24 hours
  //api_baseUrl: 'http://localhost:1337',
  //app_baseURL: 'http://localhost:4200',
  api_baseUrl: "https://enspyalumniabroadapi.herokuapp.com/",
  app_baseURL: 'https://enspyalumniabroad.herokuapp.com',
  passwordResetTokenTTL: 24 * 60 * 60 * 1000, // 24 hours,

};
