module.exports = {


  friendlyName: 'Get',


  description: 'Get user.',


  inputs: {
    id:{
      type:'string'
    }
  },


  exits: {
    success:{
      satusCode: 200,
      description: "user found!",
    },
    notAUser: {
      statusCode: 404,
      description: "user  not found!"
    }
  },


  fn: async function (inputs, exits) {
    const user = await User.findOne({id: inputs.id}).populate('userProfile');

    if(user){

      if(this.req.query["onlyUnreadPosts"] === "true"){
        return exits.success({
          unreadPosts: user.unreadPosts
        })
      }

      return exits.success(
        {data: user}
      )

    }else{
      return exits.notAUser({
        message: "'Oops :) an error occurred'",
        error: "user not found!"
      })
    }
  }


};
