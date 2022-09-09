const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router =require( "./routs/routs");

const port = 3001;
mongoose.connect("mongodb://localhost:27017/redzne").then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
app.listen(port, () => {
  console.log(`server on ${port}`);
});


app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded());
app.use(router)