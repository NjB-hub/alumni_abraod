module.exports = {

  friendlyName: 'Create',

  description: 'Create event.',

  inputs: {
    dateEvent: { 
      type: 'string', 
      required: true 
    },
    start: {type: 'string'},
    end: {type: 'string'},
    place: {
      type: 'string',
      required: true
    },
    post_id: {
      type: 'string',
      required: true
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: 'New event created',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },

  fn: async function (inputs, exits) {

    try{
     
      let newEvent = await Event.create({
        dateEvent: inputs.dateEvent,
        start: inputs.start,
        end: inputs.end,
        place: inputs.place,
        post_id: inputs.post_id
      }).fetch();

      return exits.success({
        message: `The event has been created successfully !`,
        data: newEvent
      });

    }catch(error){
      if (!newEvent) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem creating event',
        });
      }

  
    }

    


  }


};
