
module.exports = {


  friendlyName: 'Update',


  description: 'Update offer.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Offer updated',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },
  },


  fn: async function (inputs, exits) {

    try{
     
      var updatedOffer = await Offer.update({
        id: inputs.id
      }).set({
        company: inputs.company,

      });


      return exits.success({
        message: `The offer has been updated successfully !`,
        data: updatedOffer
      });

    }catch(error){
      if (!updatedOffer) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem updating offer',
        });
      }


  }

  }


};
