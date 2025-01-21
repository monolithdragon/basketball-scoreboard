const homeBoard = document.getElementById('home-board');
const guestBoard = document.getElementById('guest-board');
let homeCounter = 0;
let guestCounter = 0;

function addHomeValue(value) {
  homeCounter += value;
  homeBoard.textContent = homeCounter;
}

function addGuestValue(value) {
  guestCounter += value;
  guestBoard.textContent = guestCounter;
}
