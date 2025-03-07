var express = require("express");
var controllersUsers = require("../controllers/usersControllers_temp");

const apiRouterUser = express.Router();

apiRouterUser.route("/getAll").get(controllersUsers.getAllUsers);
apiRouterUser.route("/update/:id").put(controllersUsers.updateUsers);
apiRouterUser.route("/:id").get(controllersUsers.infoUsers);
apiRouterUser.route("/delete/:id").delete(controllersUsers.deleteUsers);

module.exports = apiRouterUser