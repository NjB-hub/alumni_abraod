/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "posts",

  attributes: {
    title: {
      type: "string",
      required: true,
    },
    files:{type: "string"},
    description: { type: "string" },
    category: {
      type: "string",
      required: true,
    },
    event: {
      collection: "event",
      via: "postId",
    },
    offer: {
      collection: "offer",
      via: "postId",
    },
    owner: { model: "user" },
    ownerProfile: { model: "profile" },
    postComments: {
      collection: "comment",
      via: "owP",
    },
    postReport: {
      collection: "report",
      via: "badPost",
    },
  },
};
