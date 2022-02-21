const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const {Employees, validate } = require("../models/emp");
const bcrypt = require("bcrypt");

// get all employees

exports.getEmployees = async function (req, res) {
  Employees.find().exec((err, emp) => {
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
};
// update Employee
exports.updateEmployee = async function (req, res) {
  Emp.findByIdAndUpdate(
    req.params.id,
    {
      // $set: req.body,
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
    },
    (err, emp) => {
      if (err) {
        return res.status(400).json({
          err: err,
        });
      }
      return res.status(200).json({
        success: "updated Sucessfully",
        Employee: emp,
      });
    }
  );
};

// delete Employee

exports.deleteEmployee = async function (req, res) {
  Emp.findByIdAndRemove(req.params.id).exec((err, deleteEmp) => {
    if (err) {
      return res.status(400).json({
        message: "Deleted unsucessful",
        err,
      });
    }
    return res.status(200).json({
      message: "Deleted Sucessfully",
      deleteEmp,
    });
  });
};

// search

exports.searchEmployee = async function (req, res) {
  let empId = req.params.id;
  Emp.findById(empId, (err, emp) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err,
      });
    }
    return res.status(200).json({
      success: true,
      emp,
    });
  });
};


