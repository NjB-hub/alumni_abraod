module.exports = {


  friendlyName: 'Index',


  description: 'Index offer.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var allOffers = await Offer.find({});
    return allOffers;

  }


};
