//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.listen(3000, fucntion(){
  console.log("Server started on port 3000");
});
