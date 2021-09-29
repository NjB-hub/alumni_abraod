const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail')
const hbs = require("nodemailer-express-handlebars");

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
    sgMail.setApiKey(sails.config.sendGridAPIkey || process.env.SENDGRID_API_KEY)
   
    const msg = {
      to: inputs.options.to, // Change to your recipient
      from: 'tanankemr@gmail.com', // Change to your verified sender
      subject: 'Verify your email address',
      text: 'To validate your email address click on the following link',
      template_id:"d-add7922ec34945d0bef5d67c1218770d",
      dynamic_template_data : inputs.options.context,
    }
    
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })

   /* transporter.use(
      "compile",

      hbs({
        viewEngine: {
          extName: ".hbs",
          partialsDir: "./views",
          layoutsDir: "./views",
          defaultLayout: "",
        },

        viewPath: "./views/",
        extName: ".hbs",
      })
    );

    try {
      let emailOptions = {
        from: "tanankemr@gmail.com",
        ...inputs.options,
      };

      await transporter.sendMail(emailOptions);
      sails.log("hi");

    } catch (error) {
      sails.log(error);

    }*/
  },
};