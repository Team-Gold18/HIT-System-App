const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
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
  image: {
    type: String,
    
  },
});


empSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const Employees = mongoose.model("Employee", empSchema);

const validate = (data) => {
  const schema = Joi.object({
    fname: Joi.string().required().label("First Name"),
    lname: Joi.string().required().label("Last Name"),
    address: Joi.string().required().label("Address"),
    email: Joi.string().email().required().label("Email"),
    contactNumber: Joi.string().required().label("Contact Number"),
    nic: Joi.string().required().label("NIC"),
    gitUsername: Joi.string().required().label("GIT User Name"),
    university: Joi.string().required().label("University"),
    batch: Joi.string().required().label("Batch"),
    bank: Joi.string().required().label("Bank "),
    bankAccount: Joi.string().required().label("Bank Account"),
    bankBranch: Joi.string().required().label("Bank Branch"),
    password: passwordComplexity().required().label("Password"),
    //img: Joi.any().required().label("image"),
    image: Joi.string()
  });
  return schema.validate(data);
};

module.exports = { Employees, validate };
