/**
 * Issue.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "issues",
  attributes: {
    title: {
      type: "string",
      required: true,
    },

    description: {
      type: "string",
      required: true,
    },

    issueState: {
      type: "string",
      isIn: ["uncared", "pending", "cared"],
      defaultsTo: "uncared",
    },

    ownerIssue: {
      model: "user",
    },
  },
};
