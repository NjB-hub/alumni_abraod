module.exports = {
  friendlyName: "Login",

  description: "Login user.",

  inputs: {
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: "Login successful",
    },
    notAUser: {
      statusCode: 404,
      description: "User not found",
    },
    passwordMismatch: {
      statusCode: 401,
      description: "Password do not match",
    },
    emailNotConfirmed: {
      statusCode: 401,
      description: "email not confirmed",
    },
    operationalError: {
      statusCode: 400,
      description: "The request was formed properly",
    },
  },

  fn: async function (inputs, exits) {
    try {
      const user = await User.findOne({ email: inputs.email }).populate(
        "userProfile"
      );

      if (!user) {
        return exits.notAUser({
          error: `Wrong credentials.`,
        });
      }

      if (user.emailStatus === "unconfirmed") {
        return exits.emailNotConfirmed({
          message: "Oops :) an error occurred",
          error: "confirm your email address before logging in!",
        });
      }

      await sails.helpers.passwords
        .checkPassword(inputs.password, user.password)
        .intercept("incorrect", (error) => {
          exits.passwordMismatch({ error: "Wrong credentials." });
        });

      const token = await sails.helpers.generateNewJwtToken(user.username);

      this.req.me = user;

      return exits.success({
        message: `${user.username} has been logged in`,
        data: user,
        token: token,
      });
    } catch (error) {
      sails.log.error(error);

      if (error.isOperational) {
        return exits.operationalError({
          message: `Error logging in user ${inputs.username}`,
          error: error.raw,
        });
      }

      return exits.error({
        message: `Error logging in user ${inputs.username}`,
        error: error.message,
      });
    }

    // All done.
    return;
  },
};
