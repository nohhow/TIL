var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$('.btn').click(function(){
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
});

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


  $('#'+randomChosenColour).animate({opacity:"0.5"}, 100);
  $('#'+randomChosenColour).animate({opacity:"1"}, 100);
  playSound(randomChosenColour);
}

function playSound(name){
  const audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
