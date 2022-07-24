/**
 * Event.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "events",

  attributes: {
    dateEvent: {
      type: "string",
      required: true,
    },
    start: { type: "string" },
    end: { type: "string" },
    place: {
      type: "string",
      required: true,
    },
    post_id: {
      model: "post",
      unique: true,
    },
    participants: {
      collection: "user",
      via: "userEvents",
    },

    inCalendar: {
      collection: "calendar",
      via: "savedEvent",
    },
  },
};
