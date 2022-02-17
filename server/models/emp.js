const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var empSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  gitUsername: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  bank: {
    type: String,
    required: true,
  },

  bankAccount: {
    type: String,
    required: true,
  },

  bankBranch: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Emp", empSchema);
