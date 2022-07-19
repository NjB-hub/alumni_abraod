module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Post deleted',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {

    try{
     
      var deletedPost = await Post.destroy({
        id: inputs.id
      });


      return exits.success({
        message: `The post has been deleted successfully !`,
        data: deletedPost
      });

    }catch(error){
      if (!deletedPost) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem deleting post',
        });
      }


  }


  }


};
