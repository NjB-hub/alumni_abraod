/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  subscribe: function (req, res) {
    if (!req.isSocket) {
      return res.badRequest({ status: "NOT_SOCKET_REQUEST" });
    }
    User.find().exec(function (err, users) {
      if (err) {
        return res.serverError({ status: "SERVER_ERROR" });
      }
      /**
       * subscribe the Post model to connected client sockets
       */
      Post.subscribe(req, _.pluck(users, "id"));

      Post.watch(req);
      return res.ok({ status: "SUBSCRIBED" });
    });
  },
};
