/**
 * Local environment settings
 *
 * Use this file to specify configuration settings for use while developing
 * the app on your personal system.
 *
 * For more information, check out:
 * https://sailsjs.com/docs/concepts/configuration/the-local-js-file
 */

module.exports = {

  // Any configuration settings may be overridden below, whether it's built-in Sails
  // options or custom configuration specifically for your app (e.g. Stripe, Sendgrid, etc.)
  jwtSecret: "jwtSecret",

  frontend_base_url: "http://localhost:4200",
  //frontend_base_url: "https://enspyalumniabroad.herokuapp.com",

  api_baseUrl: 'http://localhost:1337',
  //api_baseUrl: "https://enspyalumniabroadapi.herokuapp.com",

  emailProofTokenTTL: 24 * 60 * 60 * 1000, // 24 hours
  
  passwordResetTokenTTL: 24 * 60 * 60 * 1000, // 24 hours,

};
