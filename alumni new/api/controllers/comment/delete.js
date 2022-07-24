module.exports = {


  friendlyName: 'Delete',


  description: 'Delete comment.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Comment deleted',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {

    try{
     
      var deletedComment = await Comment.destroy({
        id: inputs.id
      });


      return exits.success({
        message: `The comment has been deleted successfully !`,
        data: deletedComment
      });

    }catch(error){
      if (!deletedComment) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem deleting comment',
        });
      }


  }


  }


};
