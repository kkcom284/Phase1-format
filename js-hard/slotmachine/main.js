let timeId1 = null;
let timeId2 = null;
let timeId3 = null;

const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");

const nowTime = document.getElementById("nowTime");
const nowTime2 = document.getElementById("nowTime2");
const nowTime3 = document.getElementById("nowTime3");

let count = 0;
let count2 = 0;
let count3 = 0;

const startButton = document.getElementById("startTimer");
startButton.addEventListener("click", function () {
  setTime1.disabled = false;
  setTime2.disabled = false;
  setTime3.disabled = false;
  console.log("strat");

  timeId1 = setInterval(() => {
    console.log(count);
    nowTime.innerHTML = count;

    count++;

    // countを０から１づつ足して９になったら０にする

    //左辺を右辺に代入する
    if (count === 10) {
      count = 0;
    }
  }, 1000);

  timeId2 = setInterval(() => {
    console.log(count2);
    nowTime2.innerHTML = count2;
    count2++;

    if (count2 === 10) {
      count2 = 0;
    }
  }, 1000);

  timeId3 = setInterval(() => {
    console.log(count3);
    nowTime3.innerHTML = count3;
    count3++;

    if (count3 === 10) {
      count3 = 0;
    }
  }, 1000);
});

setTime1.addEventListener("click", function () {
  clearInterval(timeId1);
  setTime1.disabled = true;
  //setTime1,setTime,setTime3 がそれぞれ押された時
  if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
    if (count === count2 && count2 === count3) {
      alert("正解");
    } else {
      alert("不正解");
    }
  }
  console.log("stop");
});

setTime2.addEventListener("click", function () {
  clearInterval(timeId2);
  setTime2.disabled = true;
  if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
    if (count === count2 && count2 === count3) {
      alert("正解");
    } else {
      alert("不正解");
    }
  }
  console.log("stop2");
});

setTime3.addEventListener("click", function () {
  clearInterval(timeId3);
  setTime3.disabled = true;
  if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
    if (count === count2 && count2 === count3) {
      alert("正解");
    } else {
      alert("不正解");
    }
  }
  console.log("stop3");
});
