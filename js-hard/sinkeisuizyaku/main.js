// ＜ルール＞
// 2枚のカードをクリック
// 数字が一致したら画面から削除/しなかったら裏戻る
// 削除/裏返しの実行は 2枚目をクリックしてから0.5秒後

// カードの並びはページ読み込み時に完了する
// 一度生成した並びはゲーム終了するまで初期化しない

// ＜フロー＞処理順に書く
// 最初は大雑把に
//大雑把に書いた文の間に具体的な物を書く

//①　div=id panelをindex.htmlより取得
// panel内でゲーム作成
// 枠となるdivを８つ生成

// ②
// jsにてcardを生成
// ８つのカードを生成
// jsで生成したdiv内で生成と表示
// 8つのカードの中から2つ同じ物をランダムに１～４の数字を生成する
//ダステンフェルドのアルゴリズムか分割代入を使う？＝分割代入を使用
// 1枚目のカードをクリックしたら数字を表示＝cardbackからスタート
// ２枚目のカードをクリックしたら数字を表示＝cardbackからスタート

// イベントリスターを使う＝カードをクリックしたら動作する

// ③
// jsにてclass属性backを生成
// backをdivに追加
// jsで生成したdiv内で生成と表示
// 2つカードが同じか否かをチェックする
// ２つのカードが同じ数字でなければ.backにする

// ④
// jsにてfinisを生成する
// jsで生成したdiv内で生成と表示
//2つのカードが揃えば.fnishにする
// イベントリスターを使う＝カードをクリックしたら動作する
// ２つの数字が合っているかor合っていないかチェック
// 2つのカードをクリックして500ミリ秒で動作する＝ setinterbel
// 合っていれば画面から削除合っていなければ前段階に戻る＝同じ数字を選択

//⑤　全てのカードが削除したらアラート”終了です”

// ① 12行目
const panel = document.getElementById("panel");

let fragment = document.createDocumentFragment();

// 複数のノード
let cardElments = document.getElementsByClassName("card");
let cardBack = document.getElementsByClassName("back");
let cardFinish = document.getElementsByClassName("finish");

let orderNum = [1, 1, 2, 2, 3, 3, 4, 4];
fisherYatesShuffle(orderNum);
function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
console.log(orderNum);
// 目標　8つの１～４の数字を持ったcardというclassを持つdivを作る
//できたこと
// divの作成
// １～４の数字を作る
// divにcardというclassを付ける
// 作ったdivタグを写す
//１～４の数字をdivのinnerHTMLに入れる

// できていないこと
// １～４の数字を２つずつ作る

// やりたいこと
// [1,1,2,2,3,3,4,4];を作る
// ランダムに取り出す　方法は調べる
// divに入れる

// randomNumが８になるまで

for (let i = 0; i < 8; i++) {
  const div = document.createElement("div");

  fragment.append(div);
  div.classList.add("card", "back");
  div.addEventListener("click", () => {
    div.classList.remove("back");
    div.innerHTML = orderNum[i];
  });
  panel.after(div);
}

// div1 = document.createElement("div");
// div2 = document.createElement("div");
// div3 = document.createElement("div");
// div4 = document.createElement("div");
// div5 = document.createElement("div");
// div6 = document.createElement("div");
// div7 = document.createElement("div");
// div8 = document.createElement("div");

// div1.classList.add("card", "back");
// div2.classList.add("card", "back");
// div3.classList.add("card", "back");
// div4.classList.add("card", "back");
// div5.classList.add("card", "back");
// div6.classList.add("card", "back");
// div7.classList.add("card", "back");
// div8.classList.add("card", "back");

// // const flip = (eve) => {
// //   let div1 = eve.target;
// //   div1.classList.toggle("back");
// // };

// // calss作成
// fragment.append(div1);
// fragment.append(div2);
// fragment.append(div3);
// fragment.append(div4);
// fragment.append(div5);
// fragment.append(div6);
// fragment.append(div7);
// fragment.append(div8);

// panel.after(div1);
// panel.after(div2);
// panel.after(div3);
// panel.after(div4);
// panel.after(div5);
// panel.after(div6);
// panel.after(div7);
// panel.after(div8);

// div1.addEventListener("click", () => {
//   div1.classList.remove("back");
//   div1.innerHTML = orderNum[0];
// });
// div2.addEventListener("click", () => {
//   div2.classList.remove("back");
//   div2.innerHTML = randomNum[1];
// });
// div3.addEventListener("click", () => {
//   div3.classList.remove("back");
//   div3.innerHTML = randomNum[2];
// });
// div4.addEventListener("click", () => {
//   div4.classList.remove("back");
//   div4.innerHTML = randomNum[3];
// });
// div5.addEventListener("click", () => {
//   div5.classList.remove("back");
//   div5.innerHTML = randomNum[4];
// });
// div6.addEventListener("click", () => {
//   div6.classList.remove("back");
//   div6.innerHTML = randomNum[5];
// });
// div7.addEventListener("click", () => {
//   div7.classList.remove("back");
//   div7.innerHTML = randomNum[6];
// });
// div8.addEventListener("click", () => {
//   div8.classList.remove("back");
//   div8.innerHTML = randomNum[7];
// });
// div2.innerHTML = randomNum[1];
// div3.innerHTML = randomNum[2];
// div4.innerHTML = randomNum[3];
// div5.innerHTML = randomNum[4];
// div6.innerHTML = randomNum[5];
// div7.innerHTML = randomNum[6];
// div8.innerHTML = randomNum[7];

// ②１６行目

// ③　２2行目

// ④＋⑤　２９行目＋３７行目
