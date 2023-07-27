input.addEventListener('keyup', function() {
  //省略
  textarea = input.value;
});

reset.addEventListener('click', function() {
  //省略
  textarea=""
});

const endDelBtn = document.getElementById('endDel');

endDelBtn.addEventListener('click', function() {
  textarea = textarea.slice(0, -1);
  input.value = textarea;
  countNum.textContent = `あと ${goalNum - input.value.length} 文字`;
});
