// jQuery Class 다루기
$("h1").addClass("big-element");

// jQuery Attribute 다루기
$("a").attr("href", "https://www.naver.com");

// jQuery Event Listener 다루기
$("h1").click(function(){
  alert($("h1").css("color"));
  if($("h1").css("color") == "rgb(255, 255, 0)"){
    $("h1").css("color", "purple");
  }
  else{
    $("h1").css("color", "yellow");
  }
});


// jQuery Event Listener For querySelectorAll
// 사실상 단수 선택과 복수 선택이 같음.

$("button").click(function(){
  alert($("h1").css("color"));
  if($("h1").css("color") == "rgb(255, 255, 0)"){
    $("h1").css("color", "purple");
  }
  else{
    $("h1").css("color", "yellow");
  }
});

// jQuery 없이 작성해본다면?

// for(var i = 0; i < 5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color="purple";
//   });
// }
