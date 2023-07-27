const input = document.getElementById('sampleForm');
const countNum = document.getElementById('textCounter');
const reset = document.getElementById('resetBtn');
const goalNum = 400;
countNum.textContent = `あと ${goalNum - input.value.length} 文字`;

input.addEventListener('keyup', function() {
  countNum.textContent = `あと ${goalNum - input.value.length} 文字`;
});

reset.addEventListener('click', function() {
  countNum.textContent = `あと ${goalNum} 文字`;
});