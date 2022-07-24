module.exports = {
  friendlyName: "Download",

  description: "Download file.",

  inputs: {
    id: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: "File downloaded",
    },

    error: {
      statusCode: 400,
      description: "Something went wrong",
    },
  },

  fn: async function (inputs, exits) {
    var file = await Image.findOne(inputs);
    if (!file) {
      throw "notFound";
    }

    this.res.attachment(file.downloadName);
    var downloading = await sails.startDownload(file.path);
    return exits.success(downloading);
  },
};
