
let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

// start game
$(document).keydown(() => {
    if (!started) {
        nextSequence();
        $("h1").html("Level " + level);
        started = true;
    }
})

$(".btn").click((event) => {
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {
    userClickedPattern = [];
    randomColorChosen = buttonColors[Math.floor((Math.random() * 4))];
    gamePattern.push(randomColorChosen);
    $("#" + randomColorChosen).fadeOut(100);
    $("#" + randomColorChosen).fadeIn(100);
    playSound(randomColorChosen);
    level++;
    $("h1").html("Level " + level);
}

function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    // check whether button pressed is correct
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // if button is correct, check whether it is the last button to be pressed in the level
        if (userClickedPattern.length === gamePattern.length) {
          setTimeout(() => {
            nextSequence();
          }, 1000);
        }
    } else {
        let audio = new Audio("sounds/wrong.mp3");
        audio.play()
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key To Restart");
        startOver();
    }
}

function startOver() {
    gamePattern = [];
    started = false;
    level = 0;
}