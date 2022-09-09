const nodemailer = require("nodemailer");

module.exports = {
  friendlyName: "Send mail",

  description: "",

  inputs: {

    options: {
      type: "ref",
      required: true,
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function (inputs) {

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { 
        user: 'tanankemr@gmail.com',
        pass: 'mczlxtbqaebswoca',
      }
    })
   
    const msg = {
      to: inputs.options.to, // Change to your recipient
      from: 'tanankemr@gmail.com', // Change to your verified sender
      subject: inputs.options.context.subject,
      html: inputs.options.context.html,
    }

    transporter.sendMail(msg, function(error, info){
      if (error) {
        console.log(error);

      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  },
};