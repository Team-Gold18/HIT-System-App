const routes = require("express").Router();

const EmpRoute = require("./emp/index");

routes.use("/employee", EmpRoute);

module.exports = routes;
