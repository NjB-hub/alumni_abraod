module.exports = {


  friendlyName: 'Register',


  description: 'Register user.',


  inputs: {
    username: { 
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true, 
      unique: true ,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: 'New user created',
    },
    emailAlreadyInUse: {
      statusCode: 400,
      description: 'Email address already in use',
    },
    error: {
      description: 'Something went wrong',
    },
  },

  fn: async function (inputs, exits) {

    try{
      //create a token for the email verification
      const newEmailAddress = inputs.email.toLowerCase();
      
      const token = await sails.helpers.strings.random('url-friendly');

      //create the user
      let newUser = await User.create({
        username: inputs.username,
        email: newEmailAddress,
        password: inputs.password,
        emailProofToken: token,
        emailProofTokenExpiresAt:
          Date.now() + sails.config.custom.emailProofTokenTTL,
      }).fetch();

      //create the user's profile
      let newUserProfile = await Profile.create({
        profileOwner: newUser.id
      }).fetch();
      
      const confirmLink = `${sails.config.api_baseUrl}/user/confirm?token=${token}`;

      //setup and send the mail
      const email = {
        to: newUser.email,
        context: {
          subject: "Confrim your email",
          text: "Hello " + newUser.username + ". To validate your email address click on the following link " + confirmLink,
        },
      };

      await sails.helpers.sendMail(email);

      return exits.success({
        message: `An account has been created for ${newUser.email} successfully. Check your email to verify`,
      });

    }catch(error){
      if (error.code === 'E_UNIQUE') {
        return exits.emailAlreadyInUse({
          message: 'Oops :) an error occurred',
          error: 'This email is already used!',
        });
      }

      return exits.error({
        message: 'Oops :) an error occurred',
        error: error.message,
      });
    }
  }
};
