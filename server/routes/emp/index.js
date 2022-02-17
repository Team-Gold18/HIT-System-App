const routes = require("express").Router();

var EmpController = require("../../controllers/empController");

routes.post("/createEmployee", EmpController.AddEmployee);
routes.get("/allEmployees", EmpController.getEmployees);
routes.get("/getEmployee/:id",EmpController.searchEmployee)
routes.patch("/updateEmployee/:id", EmpController.updateEmployee);
routes.delete("/deleteEmployee/:id", EmpController.deleteEmployee);


module.exports = routes;