module.exports = {


  friendlyName: 'Update',


  description: 'Update post.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Post updated',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {
    try{
     
      var updatedPost = await Post.update({
        id: inputs.id
      }).set({
        photo: inputs.photo,
        description: inputs.description,
        category: inputs.category,

      });


      return exits.success({
        message: `The post has been updated successfully !`,
        data: updatedPost
      });

    }catch(error){
      if (!updatedPost) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem updating post',
        });
      }


  }

  }


};
