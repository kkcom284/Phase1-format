let timer;
let sec = 10;

const nowTime = document.getElementById('nowTime');
const setTime = document.getElementById('setTime');
const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');

setTime.addEventListener('click', function() {
  sec = document.getElementById('inputTime').value;
  nowTime.textContent = `${sec}：セット完了です`;
});

startTimer.addEventListener('click', function() {
  clearInterval(timer);
  timer = setInterval('countDown()', 1000);
});

const countDown = function() {
  sec -= 1;
  nowTime.textContent = sec;
  console.log(sec);
  if (sec === 0) {
    alert('終了');
    clearInterval(timer);
  }
};

stopTimer.addEventListener('click', function() {
  clearInterval(timer);
  nowTime.textContent = `${sec} + ：ストップしました`;
});