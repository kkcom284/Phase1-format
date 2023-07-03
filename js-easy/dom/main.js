要素の情報を取得する、操作する
上記のようにHTMLから見つけてきた要素に対しては、以下のような情報を取得したり、操作を行うことができます。以下、要素を代入した変数をelemとします。

elem.textContent: タグで囲まれた中身のテキストを取得します。また、elem.textContent = "..."とすることで中身のテキストを書き換えることができます。
elem.innerHTML: タグで囲まれた中身のHTMLを取得します。また、elem.innerHTML = "..."とすることで中身のHTMLを書き換えることができます。
elem.children: 子要素の配列（のようなもの）を取得します。
elem.firstElementChild: 子要素のうち、最初に書かれている要素を取得します。
elem.lastElementChild: 子要素のうち、最後に書かれている要素を取得します。
elem.parentElement: 親要素を取得します。
elem.getAttribute(属性): <タグ 属性="値">の属性の部分を引数に渡して、値の部分を取得します。
elem.setAttribute(属性, 値): 属性と値を引数に渡すと、それがHTMLに<タグ 属性="値">のように反映されます。
利用例:

const elem = document.querySelector('.list')

console.log(elem.textContent) //=> アイテム1 アイテム2 アイテム3
console.log(elem.innerHTML) //=> <li>アイテム1</li><li>アイテム2</li><li>アイテム3</li>
for (let i = 0; i < elem.children.length; i++) { // for文での繰り返し
  console.log(elem.children[i]) // <li>アイテム1</li>, <li>アイテム2</li>, <li>アイテム3</li> が順番に表示
}
console.log(elem.firstElementChild) //=> <li>アイテム1</li>
console.log(elem.lastElementChild) //=> <li>アイテム3</li>
console.log(elem.parentElement) //=> <body>...</body>

const elem2 = document.querySelector('img')

console.log(elem2.getAttribute('src')) //=> https://placehold.it/200x200
elem2.setAttribute('src', 'https://placehold.it/400x200') // 表示される画像が変わる
要素のリファレンス

上記のような要素の情報や操作は、少しややこしいのですが、いくつかのリファレンスに分かれて記載されています。

Node - Web API | MDN
Element - Web API | MDN
HTMLElement - Web API | MDN
:::