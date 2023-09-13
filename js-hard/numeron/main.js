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
  // 0.99999*900+100=999
  // 100~999のランダムな数の作成
  if (rondomNum[0] !== rondomNum[1] && rondomNum[1] !== rondomNum[2]) {
    console.log(rondomNum);
    break;
  }
}

numCheck.addEventListener("click", () => {
  // プレイヤーの打った情報の取得
  // プレイヤーの打った数字のチェック
  // プレイヤーとCPとの数字の比較
  // EATとBITEの情報の取得（計算）
  // アラート
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
