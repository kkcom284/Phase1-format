子要素を追加・削除する
HTMLには書かれていない要素をJavaScript側で作成し、HTMLに追加することができます。また、要素を削除することも可能です。

document.createElement(タグ名): タグ名で指定したタグの要素を作成します。作成した時点では、HTMLにはまだ追加されていない点に注意してください。
elem.appendChild(子要素): elemに子要素で指定した要素を子要素として追加します。
elem.removeChild(子要素): elemの子要素から子要素で指定した要素を削除します。
const list = document.querySelector('.list') // ※既に書いている場合は省略
const newItem = document.createElement('li') // <li>要素を作成（まだHTMLには追加されない）
newItem.textContent = '新しいアイテム'

list.appendChild(newItem) // リストの最後に「新しいアイテム」が増える

list.removeChild(list.firstElementChild) // リストの最初の「アイテム1」が消える
