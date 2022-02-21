const routes = require("express").Router();
const storage = require("../../controllers/storage");
const EmpController = require("../../controllers/empController");
const auth = require("../../controllers/auth");
const Emp = require("../../controllers/Emp");

// routes.post("/createEmployee", Emp);
routes.post("/createEmployee", storage, Emp.AddUser);
routes.post("/login",auth);
routes.get("/allEmployees", EmpController.getEmployees);
routes.get("/getEmployee/:id",EmpController.searchEmployee)
routes.patch("/updateEmployee/:id", EmpController.updateEmployee);
routes.delete("/deleteEmployee/:id", EmpController.deleteEmployee);


module.exports = routes;