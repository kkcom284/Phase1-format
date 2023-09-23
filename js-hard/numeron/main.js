const answerNum = document.getElementById("answerNum");
const numCheck = document.getElementById("numCheck");
const remainTurn = document.getElementById("remainTurn");

// let number = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
// ];

// const empty = [1, 2, 3];
let rondomNum;
// const random = 123;
while (true) {
  rondomNum = String(Math.floor(Math.random() * 900 + 100));
  // String文字列の生成
  // 0.99999*900+100=999
  // 100~999のランダムな数の作成
  if (
    rondomNum[0] !== rondomNum[1] &&
    rondomNum[1] !== rondomNum[2] &&
    rondomNum[0] !== rondomNum[2]
  ) {
    console.log(rondomNum);
    break;
  }
}

numCheck.addEventListener("click", () => {
  let numCheck;
  // プレイヤーの打った情報の取得
  const value = answerNum.value;
  console.log(answerNum.value);
  // プレイヤーの打った数字のチェック
  const answerNum2 = String(value);
  var result = String.Math;
  if (
    answerNum2[0] !== answerNum2[1] &&
    answerNum2[1] !== answerNum2[2] &&
    answerNum2[0] !== answerNum2[2]
  ) {
  }
  // プレイヤーとCPとの数字の比較
  // Array.prototype.includes()を使う

  // trueとfalseと出力されるのがヒントかも？
  // EATとBITEの情報の取得（計算）

  // アラート
  alert("");
});
// const firstNum = number[0][rondomNum];
// ランダムにアクセス

// console.log(number[2][1]);

// let userData = [
//   ["Yamada", 28, "Tokyo"],
//   ["Suzuki", 35, "Fukuoka"],
//   ["Honda", 24, "Sendai"],
// ];
// console.log(userData[1][0]);
// console.log(userData[2][2]);
