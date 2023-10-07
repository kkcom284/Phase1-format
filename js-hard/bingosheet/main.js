// 一般的な5×5で数字が並んでいるビンゴシートを作って下さい。
// 毎回ランダムで生成(重複ナシ)
// B の列には 1 ~ 15, I の列は 16 ~ 30,
// N の列には 31 ~ 45, G の列は 46 ~ 60, O の列には 61 ~ 75
// 真ん中は free にする
// htmlのセットボタンは使わない

// ＤＯＭ操作でhtmlからtable iDを取得する
const table = document.getElementById(view);
// 数値の取得のタイミングはリロードする時

// 重複なくランダムに１桁～２桁の数字を生成
// while(tlue){
//   String(Math.floor(Math.random() * 900 + 100));
// if(){
// break;
// }
// }
// 各列に該当する数字の範囲を固定する

// 一番上の横一列B I N G O は固定する及び真ん中はfreeに固定する

//ｔｒタグ・ tdタグをJSで生成
const mtable = document.createElement("table");
document.body.appendChild(mtable);
const tbody = document.createElement("tbody");

const tr1 = document.createElement("tr");
// const th = document.createElement("th");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");
const td4 = document.createElement("td");
const td5 = document.createElement("td");

const tr2 = document.createElement("tr");
const td6 = document.createElement("td");
const td7 = document.createElement("td");
const td8 = document.createElement("td");
const td9 = document.createElement("td");
const td10 = document.createElement("td");

const tr3 = document.createElement("tr");
const td11 = document.createElement("td");
const td12 = document.createElement("td");
const td13 = document.createElement("td");
const td14 = document.createElement("td");
const td15 = document.createElement("td");

const tr4 = document.createElement("tr");
const td16 = document.createElement("td");
const td17 = document.createElement("td");
const td18 = document.createElement("td");
const td19 = document.createElement("td");
const td20 = document.createElement("td");

const tr5 = document.createElement("tr");
const td21 = document.createElement("td");
const td22 = document.createElement("td");
const td23 = document.createElement("td");
const td24 = document.createElement("td");
const td25 = document.createElement("td");

const tr6 = document.createElement("tr");
const td26 = document.createElement("td");
const td27 = document.createElement("td");
const td28 = document.createElement("td");
const td29 = document.createElement("td");
const td30 = document.createElement("td");

// th.textContent = "b";

td1.textContent = "B";
td6.textContent = Math.floor(Math.random() * 15 + 1);
td11.textContent = Math.floor(Math.random() * 15 + 1);
td16.textContent = Math.floor(Math.random() * 15 + 1);
td21.textContent = Math.floor(Math.random() * 15 + 1);
td26.textContent = Math.floor(Math.random() * 15 + 1);
if (
  td6 !== td11 &&
  td11 !== td16 &&
  td16 !== td21 &&
  td21 !== td26 &&
  td26 !== td6
)
  td2.textContent = "I";
td7.textContent = String(Math.floor(Math.random() * (30 - 15) + 15 + 1));
td12.textContent = String(Math.floor(Math.random() * (30 - 15) + 15 + 1));
td17.textContent = String(Math.floor(Math.random() * (30 - 15) + 15 + 1));
td22.textContent = String(Math.floor(Math.random() * (30 - 15) + 15 + 1));
td27.textContent = String(Math.floor(Math.random() * (30 - 15) + 15 + 1));

td3.textContent = "N";
td8.textContent = String(Math.floor(Math.random() * (45 - 30) + 30 + 1));
td13.textContent = String(Math.floor(Math.random() * (45 - 30) + 30 + 1));
td18.textContent = String(Math.floor(Math.random() * (45 - 30) + 30 + 1));
td23.textContent = String(Math.floor(Math.random() * (45 - 30) + 30 + 1));
td28.textContent = String(Math.floor(Math.random() * (45 - 30) + 30 + 1));

td4.textContent = "G";
td9.textContent = String(Math.floor(Math.random() * (60 - 45) + 45 + 1));
td14.textContent = String(Math.floor(Math.random() * (60 - 45) + 45 + 1));
td19.textContent = String(Math.floor(Math.random() * (60 - 45) + 45 + 1));
td24.textContent = String(Math.floor(Math.random() * (60 - 45) + 45 + 1));
td29.textContent = String(Math.floor(Math.random() * (60 - 45) + 45 + 1));

td5.textContent = "O";
td10.textContent = String(Math.floor(Math.random() * (75 - 60) + 60 + 1));
td15.textContent = String(Math.floor(Math.random() * (75 - 60) + 60 + 1));
td20.textContent = String(Math.floor(Math.random() * (75 - 60) + 60 + 1));
td25.textContent = String(Math.floor(Math.random() * (75 - 60) + 60 + 1));
td30.textContent = String(Math.floor(Math.random() * (75 - 60) + 60 + 1));
//  trにtdを入れる
mtable.appendChild(tbody);

tbody.appendChild(tr1);
// tr1.appendChild(th);
tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);
tr1.appendChild(td4);
tr1.appendChild(td5);

tbody.appendChild(tr2);
tr2.appendChild(td6);
tr2.appendChild(td7);
tr2.appendChild(td8);
tr2.appendChild(td9);
tr2.appendChild(td10);

tbody.appendChild(tr3);
tr3.appendChild(td11);
tr3.appendChild(td12);
tr3.appendChild(td13);
tr3.appendChild(td14);
tr3.appendChild(td15);

tbody.appendChild(tr4);
tr4.appendChild(td16);
tr4.appendChild(td17);
tr4.appendChild(td18);
tr4.appendChild(td19);
tr4.appendChild(td20);

tbody.appendChild(tr5);
tr5.appendChild(td21);
tr5.appendChild(td22);
tr5.appendChild(td23);
tr5.appendChild(td24);
tr5.appendChild(td25);

tbody.appendChild(tr6);
tr6.appendChild(td26);
tr6.appendChild(td27);
tr6.appendChild(td28);
tr6.appendChild(td29);
tr6.appendChild(td30);

console.log(view);

// ｔｒにＤＯＭ操作でテーブルタグに追加する
