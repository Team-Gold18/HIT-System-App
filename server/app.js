require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const bodyparser = require("body-parser");
const cors = require("cors");

const connection = require("./db");
const app = express();
//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());


app.use("/", routes);
app.route("/").get((req, res) => {
  res.send("HIT API");
});

connection();

app.listen(9000, () => {
  console.log("server started");
});
