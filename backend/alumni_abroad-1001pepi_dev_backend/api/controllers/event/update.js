module.exports = {


  friendlyName: 'Update',


  description: 'Update event.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Event updated',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {

    try{
     
      var updatedEvent = await Event.update({
        id: inputs.id
      }).set({
        dateEvent: inputs.dateEvent,
        place: inputs.place,

      });


      return exits.success({
        message: `The event has been updated successfully !`,
        data: updatedEvent
      });

    }catch(error){
      if (!updatedEvent) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem updating event',
        });
      }


  }

  }


};
