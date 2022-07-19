module.exports = {


  friendlyName: 'Index',


  description: 'Index event.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var allEvents = await Event.find({});
   return allEvents;

  }


};
