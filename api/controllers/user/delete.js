module.exports = {
  friendlyName: "Delete",

  description: "Delete user.",

  inputs: {
    id: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: "Post deleted",
    },

    error: {
      statusCode: 400,
      description: "Something went wrong",
    },
  },

  fn: async function (inputs, exits) {
    try {
      var deletedUser = await User.destroy({
        id: inputs.id,
      });

      return exits.success({
        message: `The user has been deleted successfully !`,
        data: deletedUser,
      });
    } catch (error) {
      if (!deletedUser) {
        return exits.error({
          message: "Oops :) an error occurred",
          error: "Problem deleting user",
        });
      }
    }
  },
};
