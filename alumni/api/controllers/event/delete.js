module.exports = {


  friendlyName: 'Delete',


  description: 'Delete event.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Event deleted',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {

    try{
     
      var deletedEvent = await Event.destroy({
        id: inputs.id
      });


      return exits.success({
        message: `The event has been deleted successfully !`,
        data: deletedEvent
      });

    }catch(error){
      if (!deletedEvent) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem deleting event',
        });
      }
    }
  }

};
