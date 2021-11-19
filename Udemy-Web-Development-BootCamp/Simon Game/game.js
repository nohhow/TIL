var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var isStarted = false;
var level = 0;

// User Click
$('.btn').click(function(){
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
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
  userClickedPattern = [];
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

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");
    if(gamePattern.length === userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  }else{
    console.log("wrong");
    playSound('wrong');
    $('body').addClass('game-over');
    setTimeout(function(){
      $('body').removeClass('game-over');
    }, 200);
    $('#level-title').text('Game Over, Press Any Key to Restart');
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  isStarted = false;
}
