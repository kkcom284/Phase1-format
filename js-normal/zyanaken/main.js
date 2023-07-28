const cpHand = document.getElementById('cpHand');
cpHand.textContent = '相手の手';
const log = document.getElementById('log');
log.textContent = '結果：';

const gameStart = document.getElementById('gameStart');

gameStart.addEventListener('click', function() {
  const myNum = document.getElementById('myHand').value;
  const cpNum = Math.floor(Math.random() * 3);

  if (cpNum === 0) {
    cpHand.textContent = '相手の手：グー';
  } else if (cpNum == 1) {
    cpHand.textContent = '相手の手：チョキ';
  } else if (cpNum == 2) {
    cpHand.textContent = '相手の手：パー';
  }

  switch (myNum) {
    case '0': {
      if (cpNum === 0) {
        log.textContent = '結果：引き分け';
      } else if (cpNum === 1) {
        log.textContent = '結果：勝ち';
      } else if (cpNum === 2) {
        log.textContent = '結果：負け';
      }
      break;
    }
    case '1': {
      if (cpNum === 0) {
        log.textContent = '結果：負け';
      } else if (cpNum === 1) {
        log.textContent = '結果：引き分け';
      } else if (cpNum === 2) {
        log.textContent = '結果：勝ち';
      }
      break;
    }
    case '2': {
      if (cpNum === 0) {
        log.textContent = '結果：勝ち';
      } else if (cpNum === 1) {
        log.textContent = '結果：負け';
      } else if (cpNum === 2) {
        log.textContent = '結果：引き分け';
      }
      break;
    }
  }
});