const homeBoard = document.getElementById('home-board');
const guestBoard = document.getElementById('guest-board');
const timerHours = document.getElementById('timer-hours');
const timerMinutes = document.getElementById('timer-minutes');
const period = document.getElementById('period-board');

let homeCounter = 0;
let guestCounter = 0;
let minutes = 0;
let periodCounter = 1;
let startedTime = new Date().getTime();

function addHomeValue(value) {
  homeCounter += value;
  homeBoard.textContent = borderPad(homeCounter);
}

function addGuestValue(value) {
  guestCounter += value;
  guestBoard.textContent = borderPad(guestCounter);
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

  timerHours.textContent = pad(minutes);
  timerMinutes.textContent = pad(diffInSeconds);
}

setInterval(() => timerTick(), 1000);

function borderPad(number) {
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
