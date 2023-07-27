let textarea;

input.addEventListener('keyup', function() {
  //省略
  textarea = input.value;
});

reset.addEventListener('click', function() {
  //省略
  textarea=""
});

const iniDelBtn = document.getElementById('iniDel');

iniDelBtn.addEventListener('click', function() {
  textarea = textarea.slice(1);
  input.value = textarea;
  countNum.textContent = `あと ${goalNum - input.value.length} 文字`;
});