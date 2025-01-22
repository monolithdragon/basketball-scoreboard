const homeBoard = document.getElementById('home-board');
const guestBoard = document.getElementById('guest-board');
const timerSeconds = document.getElementById('timer-seconds');
const timerMinutes = document.getElementById('timer-minutes');
const period = document.getElementById('period-board');
const foultsHome = document.getElementById('foults-home');
const foultsGuest = document.getElementById('foults-guest');
const shotClock = document.getElementById('shot-clock');

let homeCounter = 0;
let guestCounter = 0;
let minutes = 0;
let periodCounter = 1;
let startedTime = new Date().getTime();
let shotStartedTime = 30;
let homeFoultsCounter = 0;
let guestFoultsCounter = 0;

function addHomeValue(value) {
  homeCounter += value;
  homeBoard.textContent = boardPad(homeCounter);
}

function addGuestValue(value) {
  guestCounter += value;
  guestBoard.textContent = boardPad(guestCounter);
}

function timerTick() {
  var diffInSeconds = Math.floor((new Date().getTime() - startedTime) / 1000);

  if (diffInSeconds > 59) {
    startedTime = new Date().getTime();
    diffInSeconds = 0;
    minutes++;
    if (minutes > 59) {
      minutes = 0;
    }
  }

  timerMinutes.textContent = pad(minutes);
  timerSeconds.textContent = pad(diffInSeconds);
}

function shotTick() {
  shotStartedTime--;

  if (shotStartedTime < 0) {
    shotStartedTime = 30;
  }

  shotClock.textContent = pad(shotStartedTime);
}

setInterval(() => timerTick(), 1000);
setInterval(() => shotTick(), 1000);

function boardPad(number) {
  if (number < 100 && number < 10) {
    return '00' + number;
  } else if (number < 100 && number >= 10) {
    return '0' + number;
  }

  return number;
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}

function addPeriodValue() {
  periodCounter++;

  if (periodCounter > 4) {
    periodCounter = 1;
  }

  period.textContent = periodCounter;
}

function addHomeFoults() {
  homeFoultsCounter++;
  foultsHome.textContent = pad(homeFoultsCounter);
}

function addGuestFoults() {
  guestFoultsCounter++;
  foultsGuest.textContent = pad(guestFoultsCounter);
}
