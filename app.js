"use strict";

//=============Variables=============

let point = 0;
let lives = 3;

//=============Load/ start event=============//

window.addEventListener("load", start);

function start() {
  console.log("start virker");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document
    .querySelector("#btn_til_start2")
    .addEventListener("click", showStartscreen);

  document
    .querySelector("#time_container")
    .addEventListener("click", startGame);

  document
    .querySelector("#btn_til_start")
    .addEventListener("click", showStartscreen);
  //===============start animationer=========//
}

function startGame() {
  point = 0;
  lives = 3;

  resetLives();
  resetPoints();

  console.log("tiden er startet");
  document
    .querySelector("#time_container")
    .removeEventListener("click", startGame);

  document.querySelector("#time_sprite").classList.add("shrink");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);

  document.querySelector("#sound_gamestart").play();

  document.querySelector("#start").classList.add("hidden");

  document.querySelector("#baby_container").classList.add("Baby_animation");
  document.querySelector("#baby_container2").classList.add("Baby_animation2");
  document.querySelector("#baby_container3").classList.add("Baby_animation3");
  document.querySelector("#baby_container4").classList.add("Baby_animation4");
  document.querySelector("#baby_container5").classList.add("Baby_animation5");

  document
    .querySelector("#teenager_container")
    .classList.add("teenager_animation");
  document
    .querySelector("#teenager_container3")
    .classList.add("teenager_animation3");

  // Registrer click
  document
    .querySelector("#baby_container")
    .addEventListener("mousedown", clickBaby);
  document
    .querySelector("#baby_container2")
    .addEventListener("mousedown", clickBaby2);
  document
    .querySelector("#baby_container3")
    .addEventListener("mousedown", clickBaby3);
  document
    .querySelector("#baby_container4")
    .addEventListener("mousedown", clickBaby4);
  document
    .querySelector("#baby_container5")
    .addEventListener("mousedown", clickBaby5);

  document
    .querySelector("#teenager_container")
    .addEventListener("mousedown", clickteenager);
  document
    .querySelector("#teenager_container3")
    .addEventListener("mousedown", clickteenager3);

  // registrer animationen når slut i venstre

  document
    .querySelector("#baby_container")
    .addEventListener("animationiteration", babyEnd);
  document
    .querySelector("#baby_container2")
    .addEventListener("animationiteration", babyEnd2);
  document
    .querySelector("#baby_container3")
    .addEventListener("animationiteration", babyEnd3);
  document
    .querySelector("#baby_container4")
    .addEventListener("animationiteration", babyEnd4);
  document
    .querySelector("#baby_container5")
    .addEventListener("animationiteration", babyEnd5);

  // Spiller baggrundslyd

  document.querySelector("#sound_baggrund").play();

  document.querySelector("#game").classList.remove("hidden");
}

//=============+--funktioner=============//
function resetLives() {
  lives = 3;
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
  point = 0;
  displayNumber();
}

function showStartscreen() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function incrementPoints() {
  console.log(point);
  displayNumber();
}

function displayNumber() {
  console.log("displayNumber");
  document.querySelector("#point").textContent = point;
}

function clickBaby() {
  console.log("clickBaby");
  console.log(point);
  point = point + 10;
  incrementPoints();
  console.log(point);
  document
    .querySelector("#baby_container")
    .removeEventListener("mousedown", clickBaby);
  document.querySelector("#baby_container").classList.add("paused");
  document.querySelector("#baby_sprite").classList.add("babyclick");
  document
    .querySelector("#baby_container")
    .addEventListener("animationend", babyGone);
  document.querySelector("#sound_baby").play();
  document.querySelector("#baby_container").classList.remove("paused");
}

function clickBaby2() {
  console.log("clickBaby");
  console.log(point);
  point = point + 10;
  incrementPoints();
  console.log(point);
  document
    .querySelector("#baby_container2")
    .removeEventListener("mousedown", clickBaby2);
  document.querySelector("#baby_container2").classList.add("paused");
  document.querySelector("#baby_sprite2").classList.add("babyclick");
  document
    .querySelector("#baby_container2")
    .addEventListener("animationend", babyGone2);
  document.querySelector("#sound_baby").play();
  document.querySelector("#baby_container2").classList.remove("paused");
}

function clickBaby3() {
  console.log("clickBaby");
  console.log(point);
  point = point + 10;
  incrementPoints();
  console.log(point);
  document
    .querySelector("#baby_container3")
    .removeEventListener("mousedown", clickBaby3);
  document.querySelector("#baby_container3").classList.add("paused");
  document.querySelector("#baby_sprite3").classList.add("babyclick");
  document
    .querySelector("#baby_container3")
    .addEventListener("animationend", babyGone3);
  document.querySelector("#sound_baby").play();
  document.querySelector("#baby_container3").classList.remove("paused");
}

function clickBaby4() {
  console.log("clickBaby");
  console.log(point);
  point = point + 10;
  incrementPoints();
  console.log(point);
  document
    .querySelector("#baby_container4")
    .removeEventListener("mousedown", clickBaby4);
  document.querySelector("#baby_container4").classList.add("paused");
  document.querySelector("#baby_sprite4").classList.add("babyclick");
  document
    .querySelector("#baby_container4")
    .addEventListener("animationend", babyGone4);
  document.querySelector("#sound_baby").play();
  document.querySelector("#baby_container4").classList.remove("paused");
}

function clickBaby5() {
  console.log("clickBaby");
  console.log(point);
  point = point + 10;
  incrementPoints();
  console.log(point);
  document
    .querySelector("#baby_container5")
    .removeEventListener("mousedown", clickBaby5);
  document.querySelector("#baby_container5").classList.add("paused");
  document.querySelector("#baby_sprite5").classList.add("babyclick");
  document
    .querySelector("#baby_container5")
    .addEventListener("animationend", babyGone5);
  document.querySelector("#sound_baby").play();
  document.querySelector("#baby_container5").classList.remove("paused");
}

function babyEnd() {
  console.log("babyEnd");
  console.log(point);
  decrementPoints();

  document
    .querySelector("#baby_container")
    .removeEventListener("animationiteration", babyEnd);

  // genstart animation
  document.querySelector("#baby_container").classList.remove("Baby_animation");
  document.querySelector("#baby_container").offsetWidth;
  document.querySelector("#baby_container").classList.add("Baby_animation");

  document
    .querySelector("#baby_container")
    .addEventListener("animationiteration", babyEnd);
}

function babyEnd2() {
  console.log("babyEnd");
  console.log(point);
  decrementPoints();

  document
    .querySelector("#baby_container2")
    .removeEventListener("animationiteration", babyEnd2);

  // genstart animation
  document
    .querySelector("#baby_container2")
    .classList.remove("Baby_animation2");
  document.querySelector("#baby_container2").offsetWidth;
  document.querySelector("#baby_container2").classList.add("Baby_animation2");

  document
    .querySelector("#baby_container2")
    .addEventListener("animationiteration", babyEnd2);
}

function babyEnd3() {
  console.log("babyEnd");
  console.log(point);
  decrementPoints();

  document
    .querySelector("#baby_container3")
    .removeEventListener("animationiteration", babyEnd3);

  // genstart animation
  document
    .querySelector("#baby_container3")
    .classList.remove("Baby_animation3");
  document.querySelector("#baby_container3").offsetWidth;
  document.querySelector("#baby_container3").classList.add("Baby_animation3");

  document
    .querySelector("#baby_container3")
    .addEventListener("animationiteration", babyEnd3);
}

function babyEnd4() {
  console.log("babyEnd");
  console.log(point);
  decrementPoints();

  document
    .querySelector("#baby_container4")
    .removeEventListener("animationiteration", babyEnd4);

  // genstart animation
  document
    .querySelector("#baby_container4")
    .classList.remove("Baby_animation4");
  document.querySelector("#baby_container4").offsetWidth;
  document.querySelector("#baby_container4").classList.add("Baby_animation4");

  document
    .querySelector("#baby_container4")
    .addEventListener("animationiteration", babyEnd4);
}

function babyEnd5() {
  console.log("babyEnd");
  console.log(point);
  decrementPoints();

  document
    .querySelector("#baby_container5")
    .removeEventListener("animationiteration", babyEnd5);

  // genstart animation
  document
    .querySelector("#baby_container5")
    .classList.remove("Baby_animation5");
  document.querySelector("#baby_container5").offsetWidth;
  document.querySelector("#baby_container5").classList.add("Baby_animation5");

  document
    .querySelector("#baby_container5")
    .addEventListener("animationiteration", babyEnd5);
}

function decrementPoints() {
  if (point >= 10) {
    point = point - 10;
  }

  console.log(point);
  displayNumber();
}

function babyGone() {
  document
    .querySelector("#baby_container")
    .removeEventListener("animationend", babyGone);

  // fjern forsvind-animation
  document.querySelector("#baby_sprite").classList.remove("babyclick");

  // fjern pause
  document.querySelector("#baby_container").classList.remove("paused");

  // genstart animation
  document.querySelector("#baby_container").classList.remove("Baby_animation");
  document.querySelector("#baby_container").offsetWidth;
  document.querySelector("#baby_container").classList.add("Baby_animation");

  // gør det muligt at klikke på baby igen
  document
    .querySelector("#baby_container")
    .addEventListener("mousedown", clickBaby);
}

function babyGone2() {
  document
    .querySelector("#baby_container2")
    .removeEventListener("animationend", babyGone2);

  // fjern forsvind-animation
  document.querySelector("#baby_sprite2").classList.remove("babyclick");

  // fjern pause
  document.querySelector("#baby_container2").classList.remove("paused");

  // genstart animation
  document
    .querySelector("#baby_container2")
    .classList.remove("Baby_animation2");
  document.querySelector("#baby_container2").offsetWidth;
  document.querySelector("#baby_container2").classList.add("Baby_animation2");

  // gør det muligt at klikke på baby igen
  document
    .querySelector("#baby_container2")
    .addEventListener("mousedown", clickBaby2);
}

function babyGone3() {
  document
    .querySelector("#baby_container3")
    .removeEventListener("animationend", babyGone3);

  // fjern forsvind-animation
  document.querySelector("#baby_sprite3").classList.remove("babyclick");

  // fjern pause
  document.querySelector("#baby_container3").classList.remove("paused");

  // genstart animation
  document
    .querySelector("#baby_container3")
    .classList.remove("Baby_animation3");
  document.querySelector("#baby_container3").offsetWidth;
  document.querySelector("#baby_container3").classList.add("Baby_animation3");

  // gør det muligt at klikke på baby igen
  document
    .querySelector("#baby_container3")
    .addEventListener("mousedown", clickBaby3);
}

function babyGone4() {
  document
    .querySelector("#baby_container4")
    .removeEventListener("animationend", babyGone4);

  // fjern forsvind-animation
  document.querySelector("#baby_sprite4").classList.remove("babyclick");

  // fjern pause
  document.querySelector("#baby_container4").classList.remove("paused");

  // genstart animation
  document
    .querySelector("#baby_container4")
    .classList.remove("Baby_animation4");
  document.querySelector("#baby_container4").offsetWidth;
  document.querySelector("#baby_container4").classList.add("Baby_animation4");

  // gør det muligt at klikke på baby igen
  document
    .querySelector("#baby_container4")
    .addEventListener("mousedown", clickBaby4);
}

function babyGone5() {
  document
    .querySelector("#baby_container5")
    .removeEventListener("animationend", babyGone5);

  // fjern forsvind-animation
  document.querySelector("#baby_sprite5").classList.remove("babyclick");

  // fjern pause
  document.querySelector("#baby_container5").classList.remove("paused");

  // genstart animation
  document
    .querySelector("#baby_container5")
    .classList.remove("Baby_animation5");
  document.querySelector("#baby_container5").offsetWidth;
  document.querySelector("#baby_container5").classList.add("Baby_animation5");

  // gør det muligt at klikke på baby igen
  document
    .querySelector("#baby_container5")
    .addEventListener("mousedown", clickBaby5);
}

function clickteenager() {
  console.log("Click teenager");
  // Forhindr gentagne clicks
  document
    .querySelector("#teenager_container")
    .removeEventListener("mousedown", clickteenager);

  decrementLives();

  document.querySelector("#teenager_container").classList.add("paused");
  document.querySelector("#teenager_sprite").classList.add("teenagerclick");
  document
    .querySelector("#teenager_container")
    .addEventListener("animationend", teenagerGone);
  document.querySelector("#sound_teenager").play();
}
function clickteenager3() {
  console.log("Click teenager3");
  // Forhindr gentagne clicks
  document
    .querySelector("#teenager_container3")
    .removeEventListener("mousedown", clickteenager3);

  decrementLives();

  document.querySelector("#teenager_container3").classList.add("paused");
  document.querySelector("#teenager_sprite3").classList.add("teenager3click");
  document
    .querySelector("#teenager_container3")
    .addEventListener("animationend", teenagerGone3);
  document.querySelector("#sound_teenager").play();
}

function decrementLives() {
  console.log("decrementLives");
  lives = lives - 1;
  console.log(lives);
  if (lives <= 0) {
    gameOver();
  }
  displaydecrementedLives();
}

function displaydecrementedLives() {
  console.log(`#heart${lives + 1}`);
  document.querySelector(`#heart${lives + 1}`).classList.remove("active_heart");
  document.querySelector(`#heart${lives + 1}`).classList.add("broken_heart");
}

function teenagerGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#teenager_container")
    .removeEventListener("animationend", teenagerGone);

  // fjern forsvind-animation
  document.querySelector("#teenager_sprite").classList.remove("teenagerclick");

  // fjern pause
  document.querySelector("#teenager_container").classList.remove("paused");

  // genstart falling animation

  // gør det muligt at klikke på teenager igen
  document
    .querySelector("#teenager_container")
    .addEventListener("mousedown", clickteenager);
}

function teenagerGone3() {
  // fjern event der bringer os herind
  document
    .querySelector("#teenager_container3")
    .removeEventListener("animationend", teenagerGone3);

  // fjern forsvind-animation
  document
    .querySelector("#teenager_sprite3")
    .classList.remove("teenager3click");

  // fjern pause
  document.querySelector("#teenager_container3").classList.remove("paused");

  // genstart falling animation

  // gør det muligt at klikke på teenager igen
  document
    .querySelector("#teenager_container3")
    .addEventListener("mousedown", clickteenager3);
}
function gameOver() {
  console.log(game_over);
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#sound_gameover").play();
  stopGame();
  document.querySelector("#game_over_point").textContent = point;
}

function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  stopGame();
  document.querySelector("#game").classList.add("hidden");

  document.querySelector("#sound_levelComplete").play();
  // vis antal points / mønter
  document.querySelector("#level_complete_point").textContent = point;
}

function timeIsUp() {
  console.log("tiden er gået");
  if (lives >= 1) {
    levelComplete();
  }
}

function stopGame() {
  document.querySelector("#sound_baggrund").pause();

  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", stopGame);
  document.querySelector("#time_sprite").classList.remove("shrink");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", stopGame);

  // stop animationer
  document.querySelector("#baby_container").classList.remove("baby_animation");
  document
    .querySelector("#baby_container2")
    .classList.remove("baby_animation2");
  document
    .querySelector("#baby_container3")
    .classList.remove("baby_animation3");
  document
    .querySelector("#baby_container4")
    .classList.remove("baby_animation4");
  document
    .querySelector("#baby_container5")
    .classList.remove("baby_animation5");

  document
    .querySelector("#teenager_container")
    .classList.remove("teenager_animation");
  document
    .querySelector("#teenager_container3")
    .classList.remove("teenager_animation3");

  // Fjern click
  document
    .querySelector("#baby_container")
    .removeEventListener("mousedown", clickBaby);
  document
    .querySelector("#baby_container2")
    .removeEventListener("mousedown", clickBaby2);
  document
    .querySelector("#baby_container3")
    .removeEventListener("mousedown", clickBaby3);
  document
    .querySelector("#baby_container4")
    .removeEventListener("mousedown", clickBaby4);
  document
    .querySelector("#baby_container5")
    .removeEventListener("mousedown", clickBaby5);

  document
    .querySelector("#teenager_container")
    .removeEventListener("mousedown", clickteenager);
  document
    .querySelector("#teenager_container3")
    .removeEventListener("mousedown", clickteenager3);
}
