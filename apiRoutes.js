
var express = require("express");
var  authControllers = require("./controllers/authControllers");


const apiRouter = express.Router();

apiRouter.route('/users/login').post(authControllers.login);
apiRouter.route('/users/register').post(authControllers.register);
apiRouter.route('/users/forget-password').post(authControllers.forgetPassword);

module.exports = apiRouter;

