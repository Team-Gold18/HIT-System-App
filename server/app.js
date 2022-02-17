const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const bodyparser =require('body-parser')
const url = "mongodb://localhost/HitDB";
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

app.listen(9000, () => {
  console.log("server started");
});
