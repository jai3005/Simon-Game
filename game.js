var game = [];
var c1 = ["red", "blue", "green", "yellow"];

var clicked = [];

$(".btn").click(function () {
  var choice = $(this).attr("id");

  clicked.push(choice);

  playsound(choice);

  animatepress(choice);

  console.log(clicked);

  check(clicked.length - 1);
});

var level = 0;
var start = false;

$(document).keypress(function () {
  if (start === false) {
    next();
    start = true;
  }
});

function check(l) {
  if (game[l] === clicked[l]) {
    if (game.length === clicked.length) {
      setTimeout(function () {
        next();
      }, 1000);
    }
  } else {
    playsound("wrong");

    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startover();
  }
}

function next() {
  clicked = [];
  level++;

  $("h1").text("Level " + level);

  var n1 = Math.floor(Math.random() * 4);

  var n2 = c1[n1];

  game.push(n2);

  $("#" + n2)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playsound(n2);
}

function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatepress(color) {
  $("#" + color).addClass("pressed");

  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 100);
}
function startover() {
  level = 0;
  game = [];
  start = false;
}
