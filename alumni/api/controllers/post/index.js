module.exports = {


  friendlyName: 'Index',


  description: 'Index post.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

   var allPosts = await Post.find({});
   return allPosts;

  }


};
