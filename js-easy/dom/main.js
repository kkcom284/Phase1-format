イベント
要素には、「クリックされた」「入力された」「スクロールした」などのタイミングで「イベント」というものが発生します。イベントが発生したときになにか処理をしたい場合、その処理をあらかじめ登録しておくことができます。

elem.addEventListener(イベント名, イベントリスナ): イベント名のイベントが発生したときに実行したい処理を、関数としてイベントリスナに渡す。
const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.querySelector('.list') // ※既に書いている場合は省略

addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
  const newItem = document.createElement('li')
  newItem.textContent = '新しいアイテム'
  list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…
  list.removeChild(list.lastElementChild)
})