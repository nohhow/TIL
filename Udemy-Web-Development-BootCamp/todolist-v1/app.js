//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    KindOfDay: day
  });

});

app.post("/", function(req, res){
  var toDo = req.body.todo;
  res.send("<h1>저장됐어욤"+toDo+"</h1>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
