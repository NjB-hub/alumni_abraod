
module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    photo:
    {
        type: 'string',
    },

   description: { type: 'string' }, 
   category: { 
    type: 'string',
    required: true },

  },


  exits: {
    success: {
      statusCode: 201,
      description: 'New post created',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {

    try{
     
      var newPost = await Post.create({
        photo: inputs.photo,
        description: inputs.description,
        category: inputs.category,
        
      }).fetch();



      return exits.success({
        message: `The post has been created successfully !`,
        data: newPost
      });

    }catch(error){
      if (!newPost) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem creating post',
        });
      }

  
    }

    


  }


};
