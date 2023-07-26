let timer;

const confirmTime2 = document.getElementById("confirmTime2");
const startTimer2 = document.getElementById("startTimer2");

let startTime;
let nowTime;
let diffTime;

confirmTime2.addEventListener("click", function () {
  nowTime = new Date();
  if (startTime === undefined) {
    return;
  }
  if (diffTime === 20) {
    alert("大正解^-^");
  } else if (diffTime < 20) {
    alert(`まだ${diffTime}秒、、、再スタートだ`);
  } else {
    alert(`もう${diffTime}秒だ！再挑戦せよ`);
  }
  clearInterval(timer);
});

startTimer2.addEventListener("click", function () {
  startTime = new Date();
  timer = setInterval(countUp2, 1000);
});

const countUp2 = function () {
  let checkTime = new Date();
  diffTime = Math.floor((checkTime.getTime() - startTime.getTime()) / 1000);
  if (diffTime === 40) {
    alert("終了/また挑戦しろ");
  }
};