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
        type: 'OAuth2',
        user: 'tanankemr@gmail.com',
        clientId: '120444427591-0m2a025hv1543s2ot0vovfv0ej0j76ig.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: '1//04ApVwfjcwgI9CgYIARAAGAQSNwF-L9Ir35EjN7KMI66E_hFJzJyUTBN72vZ28L6kJpSAAA0SoiQ10mumziEiYK4ptHfBLzZfbb8',
        accessToken: 'ya29.A0ARrdaM_MG23sce2GzWfO1GMbrsJn9Ca3LrLN8AV2JJjF_ojvkptnDyHj4XkV9tjnC6pESlAxITXy-XHnHTWr8U3mOl9BJ1eQ-t2gm8VwOvl07ZSsA4Sb4jyXZKUg7YuJmkvSlaBHx0Tr8HaPEvfPpve0vYst'
      }
    })
   
    const msg = {
      to: inputs.options.to, // Change to your recipient
      from: 'tanankemr@gmail.com', // Change to your verified sender
      subject: inputs.options.context.subject,
      text: inputs.options.context.text,
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