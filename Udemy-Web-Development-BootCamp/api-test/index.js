//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello</h1>");
});
