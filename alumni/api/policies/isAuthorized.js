"use strict";
var jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  var token;
  const secret = sails.config.jwtSecret || process.env.JWT_SECRET;

  //Check if authorization header is present
  if (req.headers && req.headers.authorization) {
    //authorization header is present

    var parts = req.headers.authorization.split(" ");
    if (parts.length == 2) {
      var scheme = parts[0];
      var credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
        console.log("Token du header: ", token);
      }
    } else {
      return res.json(401, { err: "Format is Authorization: Bearer [token]" });
    }
  } else {
    //authorization header is not present

    return res.json(401, { err: "No Authorization header was found" });
  }
  jwt.verify(token, secret, async function (err, decoded) {
    if (err) {
      return res.json(401, { err: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
};
