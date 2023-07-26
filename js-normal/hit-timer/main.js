let timer; /*繰り返し構文＝let timer を繰り返す */
let sec = 0; /*letは0である*/

const confirmTime = document.getElementById('confirmTime'); 
const startTimer = document.getElementById('startTimer');

confirmTime.addEventListener('click', function() {
  if (sec === 20) {
    alert('大正解^-^');
  } else if (sec < 20) {
    alert(`まだ${sec}秒、、、再スタートだ`);
  } else {
    alert(`もう${sec}秒だ！再挑戦せよ`);
  }
  clearInterval(timer);
  sec = 0;
});

startTimer.addEventListener('click', function() {
  clearInterval(timer);
  timer = setInterval('countUp()', 1000);
});

const countUp = function() {
  sec += 1;
  if (sec === 40) {
    clearInterval(timer);
    alert('終了/また挑戦しろ');
    sec = 0;
  }
};