let leftHour;
let leftMin;
let leftSec;

setTime.addEventListener('click', function() {
  sec = document.getElementById('inputTime').value;
  leftSec = sec % 60;
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒：セット完了です`;
});

startTimer.addEventListener('click', function() {
  // 省略
});

const countDown = function() {
  sec -= 1;
  leftSec = sec % 60;
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒`;
  //省略
};

stopTimer.addEventListener('click', function() {
  clearInterval(timer);
  leftSec = sec % 60;
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒でストップしました`;
});