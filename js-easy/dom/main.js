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