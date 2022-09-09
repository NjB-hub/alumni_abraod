module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Post deleted',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {

    try{
      var post = await Post.findOne({id:inputs.id}).populate('owner').populate('ownerProfile').populate('event').populate('offer');
      if(post){
        //delete post
        var deletedPost = await Post.destroy({id: inputs.id});
  
        //delete events
        for(var i in post.event){
          let eventId = post.event[i].id;
          sails.log(eventId)
          var ObjectId = sails.getDatastore().driver.mongodb.ObjectId;
          await sails.getDatastore().manager.collection('events').deleteOne({"_id":ObjectId(eventId)});
        }
        //delete offers
        for(var i in post.offer){
          let offerId = post.offer[i].id;
          await Offer.destroy({id:offerId});
        }
      }
      
      return exits.success({
        message: `The post has been deleted successfully !`,
        data: deletedPost
      });

    }catch(error){
      sails.log.error(error);
      if (!deletedPost) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem deleting post',
        });
      }


  }


  }


};
