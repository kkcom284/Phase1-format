// HTMLの特定の`<h1>`タグの中身のテキストを変える
const title = document.getElementById('title')
console.log(`<h1>タグの中身のテキストは ${title.textContent} です。`)

const list = document.querySelector('.list')
console.log(`<ul>タグの2つめの子要素のテキストは ${list.children[1].textContent} です。`)

// HTMLの特定の`<ul>`タグの中に`<li>`タグを追加する
const newItem = document.createElement('li')
newItem.textContent = 'もも'
list.appendChild(newItem)

// HTMLの特定の`<button>`タグがクリックされたときに確認アラートを表示する
const button = document.getElementById('button')
button.addEventListener('click', event => {
  confirm("削除してよろしいですか？") // 実際は削除しない
})