const filesHelper = require("../api/helpers/files-helper");

/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  //"*": ["isAuthorized"], // Everything resctricted here
  "user/register": true, // We dont need authorization here, allowing public access
  "user/login": true, // We dont need authorization here, allowing public access
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/
  // '*': true,
};
