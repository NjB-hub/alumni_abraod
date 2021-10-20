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
      description:
        "Email matched a user and a recovery email might have been sent",
  },
  },


  fn: async function (inputs, exits) {
    var user = await User.findOne({ email: inputs.email });
   if (!user) {
     return;
   }

   const token = await sails.helpers.strings.random("url-friendly");

   await User.update({ id: user.id }).set({
    passwordResetToken: token,
    passwordResetTokenExpiresAt:
      Date.now() + sails.config.custom.passwordResetTokenTTL,
});

const recoveryLink = `${sails.config.custom.baseUrl}/user/reset-password?token=${token}`;
try{


  //setup and send the mail
  const email = {
    to: user.email,
    subject: 'Reset password',
    template: 'reset password',
    template_id: 'd-11413a71599d4910944036a53bd10ce2',
    context: {
      name: user.username,
      recoverLink: recoveryLink,
    },
  };

  try{
    await sails.helpers.sendMail(email);
  }catch(error){
    sails.log(error);
  }

}catch(error){
  if (error.code === 'E_UNIQUE') {

    return exits.emailAlreadyInUse({
      message: 'Oops :) an error occurred',
      error: 'This email address already exits',
      email: inputs.email,
      error: error,
    });
  }

  return exits.error({
    message: 'Oops :) an error occurred',
    error: error.message,
  });
}

return exits.success({
  message: `A reset password email has been sent to ${user.email}.`,
});
    // All done.
    return;

  }


};
