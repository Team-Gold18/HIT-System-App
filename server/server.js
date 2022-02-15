
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const URI = process.env.MONGO_URL;

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);


const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
