
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = "1";




$(document).on('keypress',function() {
  
  nextSequence();
  
  
  
});

$("#level-title").on("click", function (){

  nextSequence();


});



function nextSequence() {
  
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);

  
  var randomChosenColour = buttonColours[randomNumber];


 
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  $('#level-title').text("level " + level ) ;
  level++;


  

  playSound(userChosenColour);
  animatePress(userChosenColour);
  
  

  

  
  


}

function playSound(names) {

    var audio = new Audio("sounds/" + names + ".mp3");
    audio.play();
  

  
}


$(".btn").click(function (){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

  
});

function animatePress(currentColour){
  
  $('.btn').on('click', function(){

    currentColour = $(this);

    currentColour.addClass("pressed");

    setTimeout(function(){
        currentColour.removeClass("pressed");
    }, 100);

});
  
}

function checkAnswer(currentLevel){
  


  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    console.log("success");

  if(userClickedPattern.length === gamePattern.length){

    setTimeout(function () {
      nextSequence();
    }, 1000);
  }  

  }
  
  else {

    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    
    $("body").addClass("game-over");

    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);

   $("h1").text("Game Over, Press Any Key or click here to Restart");

   startOver();

  

   





    
  }

}

 
function startOver(){

 
   userClickedPattern = "0";
    
   gamePattern = [];

   level = "1";

   
}
