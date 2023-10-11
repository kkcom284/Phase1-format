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

// 1~15までの数字をランダムに生成５つ
let b = [];
// while (true) {
for (let i = 0; i < 5; i++) {
  while (true) {
    sheet1 = Math.floor(Math.random() * (1 + 15 - 1)) + 1;

    b.includes(sheet1);
    if (!b.includes(sheet1)) {
      b.push(sheet1);
      break;
    }
  }
}

td6.textContent = b[0];
td11.textContent = b[1];
td16.textContent = b[2];
td21.textContent = b[3];
td26.textContent = b[4];
console.log(b);
console.log(b.includes(sheet1));
console.log(typeof b);

let i2 = [];
for (let q = 0; q < 5; q++) {
  while (true) {
    sheet2 = Math.floor(Math.random() * (1 + 30 - 16)) + 16;

    i2.includes(sheet2);
    if (!i2.includes(sheet2)) {
      i2.push(sheet2);
      break;
    }
  }
}
td7.textContent = i2[0];
td12.textContent = i2[1];
td17.textContent = i2[2];
td22.textContent = i2[3];
td27.textContent = i2[4];
console.log(i2);
let n = [];
for (let w = 0; w < 4; w++) {
  while (true) {
    sheet3 = Math.floor(Math.random() * (1 + 45 - 31)) + 31;

    n.includes(sheet3);
    if (!n.includes(sheet3)) {
      n.push(sheet3);
      break;
    }
  }
}
td8.textContent = n[0];
td13.textContent = n[1];
td23.textContent = n[2];
td28.textContent = n[3];

let g = [];
for (let e = 0; e < 5; e++) {
  while (true) {
    sheet4 = Math.floor(Math.random() * (1 + 60 - 46)) + 46;

    g.includes(sheet4);
    if (!g.includes(sheet4)) {
      g.push(sheet4);
      break;
    }
  }
}
td9.textContent = g[0];
td14.textContent = g[1];
td19.textContent = g[2];
td24.textContent = g[3];
td29.textContent = g[4];

let o = [];
for (let r = 0; r < 5; r++) {
  while (true) {
    sheet5 = Math.floor(Math.random() * (1 + 75 - 61)) + 61;

    o.includes(sheet5);
    if (!o.includes(sheet5)) {
      o.push(sheet5);
      break;
    }
  }
}
td10.textContent = o[0];
td15.textContent = o[1];
td20.textContent = o[2];
td25.textContent = o[3];
td30.textContent = o[4];

// 配列を作っていれる
td2.textContent = "I";
// td7.textContent = Math.floor(Math.random() * (30 - 15) + 15 + 1);
// td12.textContent = Math.floor(Math.random() * (30 - 15) + 15 + 1);
// td17.textContent = Math.floor(Math.random() * (30 - 15) + 15 + 1);
// td22.textContent = Math.floor(Math.random() * (30 - 15) + 15 + 1);
// td27.textContent = Math.floor(Math.random() * (30 - 15) + 15 + 1);

td3.textContent = "N";
// td8.textContent = Math.floor(Math.random() * (45 - 30) + 30 + 1);
// td13.textContent = Math.floor(Math.random() * (45 - 30) + 30 + 1);
td18.textContent = "free";
// td23.textContent = Math.floor(Math.random() * (45 - 30) + 30 + 1);
// td28.textContent = Math.floor(Math.random() * (45 - 30) + 30 + 1);

td4.textContent = "G";
// td9.textContent = Math.floor(Math.random() * (60 - 45) + 45 + 1);
// td14.textContent = Math.floor(Math.random() * (60 - 45) + 45 + 1);
// td19.textContent = Math.floor(Math.random() * (60 - 45) + 45 + 1);
// td24.textContent = Math.floor(Math.random() * (60 - 45) + 45 + 1);
// td29.textContent = Math.floor(Math.random() * (60 - 45) + 45 + 1);

td5.textContent = "O";
// td10.textContent = Math.floor(Math.random() * (75 - 60) + 60 + 1);
// td15.textContent = Math.floor(Math.random() * (75 - 60) + 60 + 1);
// td20.textContent = Math.floor(Math.random() * (75 - 60) + 60 + 1);
// td25.textContent = Math.floor(Math.random() * (75 - 60) + 60 + 1);
// td30.textContent = Math.floor(Math.random() * (75 - 60) + 60 + 1);
// //  trにtdを入れる
mtable.appendChild(tbody);

tbody.appendChild(tr1);
// tr1.appendChild(th);
tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);
tr1.appendChild(td4);
tr1.appendChild(td5);

tbody.appendChild(tr2);
tbody.appendChild(tr3);
tbody.appendChild(tr4);
tbody.appendChild(tr5);
tbody.appendChild(tr6);

tr2.appendChild(td6);
tr3.appendChild(td11);
tr4.appendChild(td16);
tr5.appendChild(td21);
tr6.appendChild(td26);

tr2.appendChild(td7);
tr3.appendChild(td12);
tr4.appendChild(td17);
tr5.appendChild(td22);
tr6.appendChild(td27);

tr2.appendChild(td8);
tr3.appendChild(td13);
tr4.appendChild(td18);
tr5.appendChild(td23);
tr6.appendChild(td28);

tr2.appendChild(td9);
tr3.appendChild(td14);
tr4.appendChild(td19);
tr5.appendChild(td24);
tr6.appendChild(td29);

tr2.appendChild(td10);
tr3.appendChild(td15);
tr4.appendChild(td20);
tr5.appendChild(td25);
tr6.appendChild(td30);

// console.log(view);

// ｔｒにＤＯＭ操作でテーブルタグに追加する
