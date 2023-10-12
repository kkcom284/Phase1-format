// ＜ルール＞
// 2枚のカードをクリック
// 数字が一致したら画面から削除/しなかったら裏戻る
// 削除/裏返しの実行は 2枚目をクリックしてから0.5秒後
// ＜フロー＞
// panelをindex.htmlより取得
// // スタイルシート参照
// ｈｔｍｌのpanel内で作成
// ８つのカードを生成.card
// 条件が合わければ.backにする
//条件が合えば.finishにする
// 8つのカードの中から2つ同じ物をランダムに１～４の数字を生成する
//ダステンフェルドのアルゴリズムか分割代入を使う？
// 1枚のカードをクリックしたら数字を表示
// イベントリスターを使う＝カードをクリックしたら動作する
// 一度生成したものは1ゲーム終了するまで初期化しない
// ２つの数字が合っているかor合っていないかチェック
// 合っていれば画面から削除合っていなければ前段階に戻る＝同じ数字を選択
// 2つのカードをクリックして500ミリ秒で動作する＝ setinterbel
//全てカードが削除したらアラート”終了です”
const panel = document.getElementById("panel");
let backCard = document.querySelector(".back");
let finishCard = document.querySelector(".finish");
for (i = 0; i < 8; i++) {
  let div = document.createElement("div");
}
