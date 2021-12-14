//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const client = require('@mailchimp/mailchimp_marketing');


const app = express();

client.setConfig({apiKey:"0b6232c5445d21cdcd8a180334a03967-uas20", server:"us20",});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  const firstName = req.body.FirstName;
  const lastName = req.body.LastName;
  const email = req.body.Email;

  console.log(firstName, lastName, email);

  const subscribingUser = {firstName: firstName, lastName: lastName, email: email};

  const run = async () => {
    try{
    const response = await client.lists.addListMember("b0737ca45c", {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName
      }
    });
      console.log(response);
      res.sendFile(__dirname + "/success.html");
    } catch (err) {
      console.log(err.status);
      res.sendFile(__dirname + "/failure.html");
    }
  };

  run();
});

app.post("/failure", function(req, res){
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});

// api Key
// 0b6232c5445d21cdcd8a180334a03967-us20

//list id
// b0737ca45c
