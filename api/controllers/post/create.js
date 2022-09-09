const sailsHookOrganics = require("sails-hook-organics");
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Sails = require('sails/lib/app/Sails');

module.exports = {
  friendlyName: "Create",

  description: "Create post.",

  inputs: {
    title: {
      type: "string",
      required: true,
    },
    description: { type: "string" },
    category: {
      type: "string",
      required: true,
    },
    filesNames: { type: "string" },
    owner: {
      type: "string",
      required: true,
    },
    ownerProfile: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: "New post created",
    },

    error: {
      statusCode: 400,
      description: "Something went wrong",
    },
  },

  fn: async function (inputs, exits) {
    var dbFilesNames = this.req.dbFilesNames;
  
    //get the files 
    try {
      var newPost = await Post.create({
        title: inputs.title,
        files: dbFilesNames,
        description: inputs.description,
        category: inputs.category,
        owner: inputs.owner,
        ownerProfile: inputs.ownerProfile,
      }).fetch();

      //notify all the users that there is a new post
      // Tell any socket watching the Post model class
      // that a new Post has been created!
     /*  Post.publishCreate(newPost);

      const users = await User.find({});

      users.forEach(async function (user) {
        await User.update({ id: user.id }).set({ unreadPosts: true });
      }); */

      return exits.success({
        message: `The post has been created successfully !`,
        data: newPost,
      });
    } catch (error) {
      if (!newPost) {
        return exits.error({
          message: "Oops :) an error occurred",
          error: "Problem creating post",
        });
      }

      return exits.error({
        message: "Oops :) an error occurred",
        error: "Problem creating post",
      });
    }
  },
};
