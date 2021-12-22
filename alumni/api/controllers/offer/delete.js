module.exports = {


  friendlyName: 'Delete',


  description: 'Delete offer.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Offer deleted',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {

    try{
     
      var deletedOffer = await Offer.destroy({
        id: inputs.id
      });


      return exits.success({
        message: `The offer has been deleted successfully !`,
        data: deletedOffer
      });

    }catch(error){
      if (!deletedOffer) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem deleting offer',
        });
      }


  }


  }


};
