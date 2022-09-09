module.exports = {


  friendlyName: 'Index',


  description: 'Index comment.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var allComments = await Comment.find({});
    return allComments;

  }


};
