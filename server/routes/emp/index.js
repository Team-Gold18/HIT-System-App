const routes = require("express").Router();

var EmpController = require("../../controllers/empController");

routes.post("/createEmployee", EmpController.AddEmployee);
routes.get("/allEmployees",EmpController.getEmployees);

module.exports = routes;