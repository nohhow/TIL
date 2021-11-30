//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello</h1>");
});

app.get("/about", function(req, res){
  res.send("<h1>About Me</h1><ul><li>한남대학교 졸업</li><li>제이탑미래기술 재직</li><li>루트임팩트 베이스캠프 수료</li></ul>")
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
