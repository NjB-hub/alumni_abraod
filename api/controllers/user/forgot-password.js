module.exports = {


  friendlyName: 'Forgot password',

  description: '',

  inputs: {
    email: {
      description:
        "The email address of the user who wants to recover their password.",
      example: "albus@dumbledore.com",
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: "200",
      description:"Email matched a user and a recovery email might have been sent",
    },
    userNotFound:{
      statusCode: "404",
      description: "No account matching with this email"
    },
    error: {
      statusCode:500,
      description: 'Something went wrong',
    },
  },


  fn: async function (inputs, exits) {
    var user = await User.findOne({ email: inputs.email });

    if (!user) {
     return exits.userNotFound({
       message:'Oops :) an error occurred',
       error: "No user found with this email!"
     })
    }

    const token = await sails.helpers.strings.random("url-friendly");

    await User.update({ id: user.id }).set({
      passwordResetToken: token,
      passwordResetTokenExpiresAt: Date.now() + sails.config.custom.passwordResetTokenTTL,
    });

    const recoveryLink = `${sails.config.custom.app_baseURL}/auth/resetpassword?token=${token}`;

    try{
      //setup and send the mail
      const email = {
        to: user.email,
        context: {
          subject: 'Reset password',
          html: `<div><p>Cllick on the following link to reset your password (valid for 24 hours).</p>  <p> <a href="${recoveryLink}"><h2> Reset password </h2></a> </p></div>`,
        },
      };
      await sails.helpers.sendMail(email);
    }catch(error){
      return exits.error({
        message: 'Oops :) an error occurred',
        error: "Something went wrong!",
      });
    }

    return exits.success({
      message: `A reset password email has been sent to ${user.email}.`,
    });
  }
};