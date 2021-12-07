const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=1d3945809db7df2e63d969d63ae200cf&units=metric";
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      console.log("temp : " + temp);
      console.log("desc : " + desc)

    });
  });
  res.send("Server is up and running");

})

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
