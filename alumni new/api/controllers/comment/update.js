
module.exports = {


  friendlyName: 'Update',


  description: 'Update comment.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Comment updated',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {
    try{
     
      var updatedComment = await Comment.update({
        id: inputs.id
      }).set({
        value: inputs.value,

      });


      return exits.success({
        message: `The comment has been updated successfully !`,
        data: updatedComment
      });

    }catch(error){
      if (!updatedComment) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem updating comment',
        });
      }


  }

  }


};
