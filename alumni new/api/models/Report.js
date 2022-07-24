/**
 * Report.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "reports",
  attributes: {
    description: {
      type: "string",
      required: false,
    },

    badComment: {
      model: "comment",
    },

    badPost: {
      model: "post",
    },

    badAccount: {
      model: "profile",
    },
  },
};
