var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var isStarted = false;
var level = 0;

$('.btn').click(function(){
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

$(document).on('keypress',function(e) {
  if(!isStarted){
    $('#level-title').text('Level '+level);
    nextSequence();
    isStarted = true;
  }
});


function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


  $('#'+randomChosenColour).animate({opacity:"0.5"}, 100);
  $('#'+randomChosenColour).animate({opacity:"1"}, 100);
  playSound(randomChosenColour);

  level += 1;
  $('#level-title').text('Level '+level);
}

function playSound(name){
  const audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour){
  $('#'+currentColour).addClass('pressed');
  setTimeout(function() {
    $('#'+currentColour).removeClass('pressed');
  }, 100);
}
