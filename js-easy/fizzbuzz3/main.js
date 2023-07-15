let i = 0;

const showNum = document.getElementById('showNum');
showNum.innerHTML = i;

const fizzBtn = function() {
  i += 1;
  if (i % 3 === 0) {
    showNum.innerHTML = 'fizz';
  } else {
    alert('ぶっぶーですわ');
    location.reload();
  }
};

const buzzBtn = function() {
  i += 1;
  if (i % 5 === 0) {
    showNum.innerHTML = 'buzz';
  } else {
    alert('ぶっぶーですわ');
    location.reload();
  }
};

const fizzbuzzBtn = function() {
  i += 1;
  if ((i % 3 === 0) & (i % 5 === 0)) {
    showNum.innerHTML = 'fizzbuzz';
  } else {
    alert('ぶっぶーですわ');
    location.reload();
  }
};

const numBtn = function() {
  i += 1;
  if (i % 3 === 0 || i % 5 === 0) {
    alert('ぶっぶーですわ');
    location.reload();
  }
  showNum.innerHTML = i;
};