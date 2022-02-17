const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const bodyparser =require('body-parser')
const url = "mongodb://localhost/HitDB";
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const cors = require("cors");

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());
app.use(cors())
app.use(bodyparser.json());
app.use("/", routes);
app.route("/").get((req, res) => {
  res.send("HIT API");
});
// app.use(
//   require("express-session")({
//     secret: "HIT API",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.get(
//   "http://localhost:9000/employee/allEmployees",
//   isLoggedIn,
//   function (req, res) {
//     res.render("EmployeeList");
//   }
// );

app.listen(9000, () => {
  console.log("server started");
});
