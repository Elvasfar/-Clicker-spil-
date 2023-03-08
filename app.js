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
    .querySelector("#btn_til_start")
    .addEventListener("click", showStartscreen);

  document
    .querySelector("#time_container")
    .addEventListener("click", startGame);
}

function startGame() {
  //=============Definer variable og deres startværdier========================//
  point = 0;
  lives = 3;

  //=============Kalder resetLives og resetPoints funktioner, så liv kan nulstilles ved restart uden at reloade siden========================//
  resetLives();
  resetPoints();

  console.log("tiden er startet");
  //=============Fjerner eventlistener, der førte os hertil========================//
  document
    .querySelector("#time_container")
    .removeEventListener("click", startGame);

  //=============Tilføjer animation på eventlistener timeboard========================//
  document.querySelector("#time_sprite").classList.add("shrink");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);

  //=============Starter gamestartlyd========================//
  document.querySelector("#sound_gamestart").play();

  //=============Fjerner startskærm========================//
  document.querySelector("#start").classList.add("hidden");

  //=============Starter alle animationer========================//
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

  // =============Registrer click========================//
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

  //============== registrer animationen når slut i venstre============//

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

  //=============Starter baggrundslyd========================//
  document.querySelector("#sound_baggrund").volume = 0.7;
  document.querySelector("#sound_baggrund").play();

  //==========Fjerner hidden fra gameskærm, så den vises============//
  document.querySelector("#game").classList.remove("hidden");
}

//=============funktion til at få 3 liv ved restart game=============//
function resetLives() {
  lives = 3;
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

//=============funktion til at nulstille point ved restart game=============//
function resetPoints() {
  point = 0;
  displayNumber();
}

//=============Funktion viser startskærm og skjuler game over og level complete=============//
function showStartscreen() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

//=============funktion til at få point (kalder ny funktion: displayNumber)=============//
function incrementPoints() {
  console.log(point);
  point = point + 10;
  displayNumber();
}

//=============funktion til at vise og opdate variablen point=============//
function displayNumber() {
  console.log("displayNumber");
  document.querySelector("#point").textContent = point;
}

//=============funktioner kaldt af "click"eventlistener på de forskellige animationer=============//
function clickBaby() {
  console.log("clickBaby");
  console.log(point);
  incrementPoints();
  console.log(point);
  //=============Fjerner eventlistener, pauser animationen og tilføjer animation på spriten=============//
  document
    .querySelector("#baby_container")
    .removeEventListener("mousedown", clickBaby);
  document.querySelector("#baby_container").classList.add("paused");
  document.querySelector("#baby_sprite").classList.add("babyclick");

  //=============kalder funktionen babyGone ved animationend(babyen er væk), spiller lyd ved klik og unpauser=============//
  document
    .querySelector("#baby_container")
    .addEventListener("animationend", babyGone);
  document.querySelector("#sound_baby").play();
  document.querySelector("#baby_container").classList.remove("paused");
}

//=============gentagelse af 1. clickbaby funktion=============//
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

//=============gentagelse af 1. clickbaby funktion=============//
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

//=============gentagelse af 1. clickbaby funktion=============//
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

//=============gentagelse af 1. clickbaby funktion=============//
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

//=============funktion når babyanimationen når enden af skærmen. Kalder decrementPoints og fjerner eventlistener, der førte os hertil=============//
function babyEnd() {
  console.log("babyEnd");
  console.log(point);
  decrementPoints();

  document
    .querySelector("#baby_container")
    .removeEventListener("animationiteration", babyEnd);

  // ====================genstart animation===========================//
  document.querySelector("#baby_container").classList.remove("Baby_animation");
  document.querySelector("#baby_container").offsetWidth;
  document.querySelector("#baby_container").classList.add("Baby_animation");

  //=============Tilføjer eventlistener igen=============//
  document
    .querySelector("#baby_container")
    .addEventListener("animationiteration", babyEnd);
}

//=============gentagelse af 1. babyEnd funktion=============//
function babyEnd2() {
  console.log("babyEnd");
  console.log(point);
  decrementPoints();

  document
    .querySelector("#baby_container2")
    .removeEventListener("animationiteration", babyEnd2);

  document
    .querySelector("#baby_container2")
    .classList.remove("Baby_animation2");
  document.querySelector("#baby_container2").offsetWidth;
  document.querySelector("#baby_container2").classList.add("Baby_animation2");

  document
    .querySelector("#baby_container2")
    .addEventListener("animationiteration", babyEnd2);
}

//=============gentagelse af 1. babyEnd funktion=============//
function babyEnd3() {
  console.log("babyEnd");
  console.log(point);
  decrementPoints();

  document
    .querySelector("#baby_container3")
    .removeEventListener("animationiteration", babyEnd3);

  document
    .querySelector("#baby_container3")
    .classList.remove("Baby_animation3");
  document.querySelector("#baby_container3").offsetWidth;
  document.querySelector("#baby_container3").classList.add("Baby_animation3");

  document
    .querySelector("#baby_container3")
    .addEventListener("animationiteration", babyEnd3);
}

//=============gentagelse af 1. babyEnd funktion=============//
function babyEnd4() {
  console.log("babyEnd");
  console.log(point);
  decrementPoints();

  document
    .querySelector("#baby_container4")
    .removeEventListener("animationiteration", babyEnd4);

  document
    .querySelector("#baby_container4")
    .classList.remove("Baby_animation4");
  document.querySelector("#baby_container4").offsetWidth;
  document.querySelector("#baby_container4").classList.add("Baby_animation4");

  document
    .querySelector("#baby_container4")
    .addEventListener("animationiteration", babyEnd4);
}

//=============gentagelse af 1. babyEnd funktion=============//
function babyEnd5() {
  console.log("babyEnd");
  console.log(point);
  decrementPoints();

  document
    .querySelector("#baby_container5")
    .removeEventListener("animationiteration", babyEnd5);

  document
    .querySelector("#baby_container5")
    .classList.remove("Baby_animation5");
  document.querySelector("#baby_container5").offsetWidth;
  document.querySelector("#baby_container5").classList.add("Baby_animation5");

  document
    .querySelector("#baby_container5")
    .addEventListener("animationiteration", babyEnd5);
}

//=============funktion til at fratrække point, hvis man har 10 eller flere point og kalder funktion til at opdatere pointene=============//
function decrementPoints() {
  if (point >= 10) {
    point = point - 10;
  }

  console.log(point);
  displayNumber();
}

//=============funktion kaldt ved click på animation=============//
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

//============= gentagelse af funktion kaldt ved click på animation=============//
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

//============= gentagelse af funktion kaldt ved click på animation=============//
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

//============= gentagelse af funktion kaldt ved click på animation=============//
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

//============= gentagelse af funktion kaldt ved click på animation=============//
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

//============= funktion kaldt af "click" på teenager=============//
function clickteenager() {
  console.log("Click teenager");
  // Forhindr gentagne clicks
  document
    .querySelector("#teenager_container")
    .removeEventListener("mousedown", clickteenager);

  //============= Kalder decrementLives til at fratrække liv=============//
  decrementLives();

  //============= pauser objektet og tilføjer animation til spriten og kalder teenagerGone ved animationens afslutning=============//
  document.querySelector("#teenager_container").classList.add("paused");
  document.querySelector("#teenager_sprite").classList.add("teenagerclick");
  document
    .querySelector("#teenager_container")
    .addEventListener("animationend", teenagerGone);

  //============= afspiller lyd ved "click"=============//
  document.querySelector("#sound_teenager").play();
}

//============= funktion kaldt af "click" på teenager3 (samme kommentarer som ved teenager)=============//
function clickteenager3() {
  console.log("Click teenager3");
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

//============= funktion til at fratrække liv, kalde gameover hvis liv = 0 og funktionen displayDecrementedLives =============//
function decrementLives() {
  console.log("decrementLives");
  lives = lives - 1;
  console.log(lives);
  if (lives <= 0) {
    gameOver();
  }
  displaydecrementedLives();
}

//============= funktion til at fratrække liv ved at fjerne og tilføje classes og gøre det i den rigtige rækkefølge=============//
function displaydecrementedLives() {
  console.log(`#heart${lives + 1}`);
  document.querySelector(`#heart${lives + 1}`).classList.remove("active_heart");
  document.querySelector(`#heart${lives + 1}`).classList.add("broken_heart");
}

//============= funktion kaldt ved clickteenager-funktion=============//
function teenagerGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#teenager_container")
    .removeEventListener("animationend", teenagerGone);

  // fjerner animation
  document.querySelector("#teenager_sprite").classList.remove("teenagerclick");

  // fjern pause
  document.querySelector("#teenager_container").classList.remove("paused");

  // gør det muligt at klikke på teenager igen
  document
    .querySelector("#teenager_container")
    .addEventListener("mousedown", clickteenager);
}

//============= funktion kaldt ved clickteenager3-funktion=============//
function teenagerGone3() {
  // fjern event der bringer os herind
  document
    .querySelector("#teenager_container3")
    .removeEventListener("animationend", teenagerGone3);

  // fjerner animation
  document
    .querySelector("#teenager_sprite3")
    .classList.remove("teenager3click");

  // fjern pause
  document.querySelector("#teenager_container3").classList.remove("paused");

  // gør det muligt at klikke på teenager igen
  document
    .querySelector("#teenager_container3")
    .addEventListener("mousedown", clickteenager3);
}

//============= gameOverfunktion viser gameoverskærm og point ved spilstop =============//
function gameOver() {
  console.log(game_over);
  document.querySelector("#game_over").classList.remove("hidden");

  //==========spiller gamover lyd============//
  document.querySelector("#sound_gameover").play();

  //========Kalder stopGame funktion=======//
  stopGame();
  document.querySelector("#game_over_point").textContent = point;
}

//============= levelCompletefunktion viser levelCompleteskærm, fjerner gameskærm og viser point ved spilstop =============//
function levelComplete() {
  console.log("Level Complete");

  // viser levelcompleteskærm
  document.querySelector("#level_complete").classList.remove("hidden");

  //========Kalder stopGame funktion=======//
  stopGame();

  // skjuler gameskærm
  document.querySelector("#game").classList.add("hidden");

  // spiller levelcomplete-lyd
  document.querySelector("#sound_levelComplete").play();
  // vis antal points
  document.querySelector("#level_complete_point").textContent = point;
}

//============= timeIsUpfunktion=============//
function timeIsUp() {
  console.log("tiden er gået");

  // Hvis man har liv tilbage kalder den levelComplete
  if (lives >= 1) {
    levelComplete();
  }
}

//============= stopGamefunktion=============//
function stopGame() {
  // fjerner baggrundslyd
  document.querySelector("#sound_baggrund").pause();
  // Fjerner event der fik os herind
  document
    .querySelector("#time_sprite")
    .removeEventListener("animationend", stopGame);

  // Fjerner animation på timeboard
  document.querySelector("#time_sprite").classList.remove("shrink");

  // Tilføjer eventlistener igen
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
