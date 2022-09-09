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
      statusCode:500,
      description: 'Something went wrong',
    },
  },

  fn: async function (inputs, exits) {

    try{
      //create a token for the email verification
      const lowerCasedEmailaddr = inputs.email.toLowerCase();
      const token = await sails.helpers.strings.random('url-friendly');

      //create the user
      let newUser = await User.create({
        username: inputs.username,
        email: lowerCasedEmailaddr,
        password: inputs.password,
        emailProofToken: token,
        emailProofTokenExpiresAt:
          Date.now() + sails.config.custom.emailProofTokenTTL,
      }).fetch();

      //create the user's profile
      let newUserProfile = await Profile.create({
        profileOwner: newUser.id
      }).fetch();
      
      const confirmLink = `${sails.config.custom.app_baseURL}/?token=${token}`;

      //setup and send the mail
      const email = {
        to: lowerCasedEmailaddr,
        context: {
          subject: "Confrim your email",
          html: `<div><p> Hello ${inputs.username}! Thank you for joining the ENSPY alumni community.</p> <p> To validate your email address click on the following link (valid for 24 hours): </p> <p> <a href="${confirmLink}"><h2> Confirm my email address </h2></a> </p></div>`
        },
      };

      await sails.helpers.sendMail(email);

      return exits.success({
        message: `An account has been created for  successfully. Check your email to verify`,
      });

    }catch(error){
      if (error.code === 'E_UNIQUE') {
        return exits.emailAlreadyInUse({
          message: 'Oops :) an error occurred',
          error: 'There is already an account with this email.',
        });
      }

      return exits.error({
        message: 'Oops :) an error occurred',
        error: error.message,
      });
    }
  }
};
