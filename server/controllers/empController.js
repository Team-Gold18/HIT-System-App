const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const Emp = require("../models/emp");

exports.AddEmployee = async function (req, res) {
  const employee = new Emp({
    fname: req.body.fname,
    lname: req.body.lname,
    address: req.body.address,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    nic: req.body.nic,
    gitUsername: req.body.gitUsername,
    university: req.body.university,
    batch: req.body.batch,
    bank: req.body.bank,
    bankAccount: req.body.bankAccount,
    bankBranch: req.body.bankBranch,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  employee.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Employee saved sucessfully",
    });
  });
};


exports.getEmployees = async function (req, res) {
   Emp.find().exec((err,emp) => {
     if (err) {
       return res.status(400).json({
         err: err,
       });
     }
     return res.status(200).json({
       success: true,
       Employees: emp,
     });
   });
  
}