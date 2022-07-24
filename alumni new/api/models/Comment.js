/**
 * Comment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "comments",
  attributes: {
    value: { type: "string", required: true },

    ownerC: {
      model: "user",
    },

    owP: {
      model: "post",
    },

    commentParent: {
      collection: "comment",
      via: "commentReply",
    },

    commentReply: {
      collection: "comment",
      via: "commentParent",
    },

    commentReport: {
      collection: "report",
      via: "badComment",
    },
  },
};
