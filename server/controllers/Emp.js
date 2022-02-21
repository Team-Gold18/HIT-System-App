const express = require("express");
const router = express.Router();
const { Employees, validate } = require("../models/emp");
const bcrypt = require("bcrypt");



// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null,"./client/public/images/uploads/")
//   },
//   filename: (req, file, callback) => {
//     callback(null,file.originalname)
//   }
// })

// const upload=multer({storage:storage})

  
//   router.post("/createEmployee",async (req, res) => {

//   try {
//     const { error } = validate(req.body);
//     if (error)
//       return res.status(400).send({ message: error.details[0].message });

//     const Employee = await Employees.findOne({ email: req.body.email });
//     if (Employee)
//       return res
//         .status(409)
//         .send({ message: "User with given email already Exist!" });

    // const salt = await bcrypt.genSalt(Number(process.env.SALT));
    // const hashPassword = await bcrypt.hash(req.body.password, salt);

//     await new Employees({ ...req.body, password: hashPassword }).save();
//     res.status(201).send({ message: "User created successfully" });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;


exports.AddUser = async function (req, res) {
  
  //validate data before we make new user
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check user already avalible
  const emailExist = await Employees.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already avaliable");

  //hash pwd
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

  //create new user
  const employee = new Employees({
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
    password: hashPassword,
    image: req.file.path,
  });
  try {
    const savedEmployee = await employee.save();
    //res.send({ user: user._id });
    res.status(200).send(savedEmployee);
  } catch (error) {
    res.status(400).send(error);
  }
};
