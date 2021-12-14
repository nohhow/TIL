//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var firstName = req.body.FirstName;
  var lastName = req.body.LastName;
  var email = req.body.Email;

  console.log("Full Name : " + lastName + " " + firstName + " Eamil : " + email);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
