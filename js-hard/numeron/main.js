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
  const result2 = answerNum2.includes();
  // 配列内に特定の要素がないか調べる
  //
  // console.dir({ answerNum2 });
  const answerNum3 = Array.from(String(value), Number);
  console.log(answerNum3);

  // 数値を配列に変換
  // const arr = Array.from(String(num), Number);
  // 「split」を使用して分割後に、数値に変換する方法もあります。
  // const arr = String(num).split('').map(x => Number(x));

  // 配列に対して使える
  // 文字列には使えない

  // trueとfalseと出力されるのがヒントかも？
  // EATとBITEの情報の取得（計算）
  // 数字と桁があっていればEAT,数字が合っていて桁が違っていればBITE
  // アラートととして表記する
  // アラート
  const a = rondomNum[0] === answerNum2[0];
  const b = rondomNum[1] === answerNum2[1];
  const c = rondomNum[2] === answerNum2[2];
  if (rondomNum === answerNum2) {
    alert("正解");
    console.log("正解");
  }
  if (
    rondomNum[0] === answerNum2[0] &&
    rondomNum[1] === answerNum2[1] &&
    rondomNum[2] === answerNum2[2]
  ) {
    // aler
    // console.log("eat");
  }

  for (let i = 0; i < answerNum2.length; i++) {
    if (
      rondomNum[0] === answerNum2[0] ||
      rondomNum[1] === answerNum2[i] ||
      rondomNum[2] === answerNum2[i]
    ) {
      // alert(i + "BITE");
      // console.log("BITE");
    }
  }
  let eat = 0;
  let bite = 0;

  for (let i = 0; i < answerNum2.length; i++) {
    // console.log(eat++);

    for (let j = 0; j < answerNum2.length; j++) {
      // console.log(bite++);
      if (rondomNum[i] === answerNum2[j]) {
        if (i === j) {
          eat++;
        } else {
          bite++;
        }
        // if (i !== j) {
        //   bite++;
        // }
        console.log(eat, bite);
      }

      // 中が回る回数＊外が回る回数
    }
  }
  alert(eat + "eat", bite + "bite");
  // answerNum2f
  //   rondomNum[0] === answerNum2[0] ||
  //     rondomNum[1] === answerNum2[0] ||
  //     rondomNum[2] === answerNum2[0]
  // );
  // answerNum2の1桁目を比較した
  // rondomNum[0]=== answerNum2[1]||
  // rondomNum[1]===answerNum2[1]||
  // rondomNum[2]=== answerNum2[1]
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
