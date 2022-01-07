//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  //0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thuk, 5 Fri, 6 Sat

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
    console.log("Error : current day is equal to: " + currentDay);
  }

  res.render("list", {
    KindOfDay: day
  });

});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
