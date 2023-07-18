const startBtn = document.getElementById('diceBtn');
const body = document.querySelector('body');
const dice = document.createElement('img');
dice.style.width = '100px';
dice.style.height = '100px';

let diceNum = './img/saikoro1.png';
dice.setAttribute('src', diceNum);
body.appendChild(dice);


startBtn.addEventListener('click', function() {
  let timer = setInterval('randomlyChangeTheImage()', 100);

  setTimeout(() => {
    clearInterval(timer);
  }, 3000);
});

const randomlyChangeTheImage = function() {
  diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
  dice.setAttribute('src', diceNum);
};
  
const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
const result = document.getElementById('result');
const setPlayer1dice = document.getElementById('setPlayer1dice');
const setPlayer2dice = document.getElementById('setPlayer2dice');
setPlayer1dice.setAttribute('src', `./img/saikoro1.png`);
setPlayer2dice.setAttribute('src', `./img/saikoro1.png`);

let player1Timer, player2Timer;
let player1Stop;
let player2Stop;

const func1 = () => {
  player1Btn.disabled = true;
  result.textContent = '???';
  player1Timer = setInterval(() => {
    player1Num = Math.floor(Math.random() * 6 + 1);
    setPlayer1dice.setAttribute('src', `./img/saikoro${player1Num}.png`);
  }, 100);
  setTimeout(() => {
    clearInterval(player1Timer);
    player1Stop = false;
    if (player1Stop === false && player2Stop === false) {
      console.log(player1Num, player2Num);
      if (player1Num > player2Num) {
        result.textContent = 'player1の勝ち';
      } else if (player1Num === player2Num) {
        result.textContent = '引き分け';
      } else {
        result.textContent = 'player2の勝ち';
      }
      player1Btn.disabled = false;
      player2Btn.disabled = false;

      player1Stop = null;
      player2Stop = null;
    }
  }, 3000);
};

const func2 = () => {
  player2Btn.disabled = true;
  result.textContent = '???';
  player2Stop = true;
  player2Timer = setInterval(() => {
    player2Num = Math.floor(Math.random() * 6 + 1);
    setPlayer2dice.setAttribute('src', `./img/saikoro${player2Num}.png`);
  }, 100);
  setTimeout(() => {
    clearInterval(player2Timer);
    player2Stop = false;
    if (player1Stop === false && player2Stop === false) {
      if (player1Num > player2Num) {
        result.textContent = 'player1の勝ち';
      } else if (player1Num === player2Num) {
        result.textContent = '引き分け';
      } else {
        result.textContent = 'player2の勝ち';
      }
      player1Btn.disabled = false;
      player2Btn.disabled = false;
      player1Stop = null;
      player2Stop = null;
    }
  }, 3000);
};

player1Btn.addEventListener('click', func1);
player2Btn.addEventListener('click', func2);