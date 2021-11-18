var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


  $('#'+randomChosenColour).animate({opacity:"0.5"}, 100);
  $('#'+randomChosenColour).animate({opacity:"1"}, 100);
  const audio = new Audio("sounds/"+randomChosenColour+".mp3");
  audio.play();
}

$('.btn').click(function(){
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
});
