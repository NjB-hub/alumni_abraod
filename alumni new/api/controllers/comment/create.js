module.exports = {


  friendlyName: 'Create',


  description: 'Create comment.',


  inputs: {
    value: {type: 'string', required: true },

  },


  exits: {
    success: {
      statusCode: 201,
      description: 'New comment created',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    }

  },


  fn: async function (inputs,exits) {

    try{
     
      let newComment = await Comment.create({
        value: inputs.value,
        
      }).fetch();



      return exits.success({
        message: `The comment has been created successfully !`,
        data: newComment
      });

    }catch(error){
      if (!newComment) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem creating comment',
        });
      }

  
    }

  }


};
