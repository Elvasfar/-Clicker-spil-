"use strict";

//=============Variables=============

let point = 0;
let lives = 3;

//=============Load/ start event=============//

window.addEventListener("load", start);

function start() {
  console.log("start virker");
  //===============start animationer=========//
}
document.querySelector("#baby_container").classList.add("Baby_animation");
document
  .querySelector("#teenager_container")
  .classList.add("teenager_animation");
document
  .querySelector("#teenager_container3")
  .classList.add("teenager_animation3");

// Registrer click
document.querySelector("#baby_container").addEventListener("click", clickBaby);
document
  .querySelector("#teenager_container")
  .addEventListener("click", clickteenager);
document
  .querySelector("#teenager_container3")
  .addEventListener("click", clickteenager);

//=============+--funktioner=============//
function incrementPoints() {
  console.log(incrementPoints);
  console.log(point);
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
  document.querySelector("#baby_container").classList.add("paused");
  document.querySelector("#baby_sprite").classList.add("babyclick");
  document
    .querySelector("#baby_container")
    .addEventListener("animationend", babyGone);
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
    .addEventListener("click", clickBaby);
}

function clickteenager() {
  console.log("Click teenager");
  // Forhindr gentagne clicks
  document
    .querySelector("#teenager_container")
    .removeEventListener("click", clickteenager);
  document
    .querySelector("#teenager_container3")
    .removeEventListener("click", clickteenager);

  decrementLives();

  document.querySelector("#teenager_container").classList.add("paused");
  document.querySelector("#teenager_sprite").classList.add("teenagerclick");
  document.querySelector("#teenager_container3").classList.add("paused");
  document.querySelector("#teenager_sprite3").classList.add("teenager3click");
  document
    .querySelector("#teenager_container")
    .addEventListener("animationend", teenagerGone);
  document
    .querySelector("#teenager_container3")
    .addEventListener("animationend", teenagerGone);
}
function decrementLives() {
  console.log("decrementLives");
  lives = lives - 1;
  console.log(lives);
  displaydecrementedLives();
}

function displaydecrementedLives() {
  console.log(`#heart${lives}`);
  document.querySelector(`#heart${lives + 1}`).classList.remove("active_heart");
  document.querySelector(`#heart${lives + 1}`).classList.add("broken_heart");
}

function teenagerGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#teenager_container")
    .removeEventListener("animationend", teenagerGone);
  document
    .querySelector("#teenager_container3")
    .removeEventListener("animationend", teenagerGone);

  // fjern forsvind-animation
  document.querySelector("#teenager_sprite").classList.remove("teenagerclick");
  document.querySelector("#teenager_sprite3").classList.remove("teenagerclick");

  // fjern pause
  document.querySelector("#teenager_container").classList.remove("paused");
  document.querySelector("#teenager_container3").classList.remove("paused");

  // genstart falling animation
  document
    .querySelector("#teenager_container")
    .classList.remove("teenager_animation");
  document.querySelector("#teenager_container").offsetWidth;
  document
    .querySelector("#teenager_container")
    .classList.add("teenager_animation");

  document
    .querySelector("#teenager_container3")
    .classList.remove("teenager_animation3");
  document.querySelector("#teenager_container3").offsetWidth;
  document
    .querySelector("#teenager_container3")
    .classList.add("teenager_animation3");

  // gør det muligt at klikke på teenager igen
  document
    .querySelector("#teenager_container")
    .addEventListener("click", teenagerclick);
  document
    .querySelector("#teenager_container3")
    .addEventListener("click", teenagerclick);
}
