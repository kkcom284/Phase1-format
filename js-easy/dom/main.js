//要素を見つける
//documentには、HTMLの要素を見つける方法がいくつか用意されています。

//document.getElementById(ID): HTML側にid="xxx"のように書いておき、そのIDを指定して要素を取得します。
//document.getElementsByTagName(タグ名): HTML内のタグElementのノードを取得します。
//document.getElementsByClassName(class): HTML側にclass="xxx"のように書いておき、そのclass名を指定して要素を取得します。
//document.querySelector(セレクタ): CSSと同じ「セレクタ」の書き方で要素を探し、始めに見つかった要素を取得します。
//document.querySelectorAll(セレクタ): querySelectorとほぼ同じですが、こちらはセレクタに合致する要素をすべて取得します。

//利用例:

// <p id="intro">...</p>要素を取得
const intro = document.getElementById('intro')
console.log(intro.textContent) //=> これは紹介文です。

// <ul class="list">...</ul>要素を取得
const list = document.querySelector('.list')
console.log(list.children.length) //=> 3

// <ul class="list">...</ul>の中にある<li>要素を取得
const items = document.querySelectorAll('.list li')
// itemsは配列（のようなもの）なので、forEachで繰り返しができる
items.forEach((item) => {
  console.log(item.textContent) // アイテム1, アイテム2, アイテム3 が順番に表示される
})