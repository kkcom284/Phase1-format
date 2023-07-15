let v = 0;
const showNum = document.getElementById('showNum');
showNum.innerHTML = v;

const fizzBtn = function() {
  v += 1;
  if (v % 3 === 0 ){
    showNum.innerHTML = 'fizz';
  } else {
    alert('ぶっぶーですわ') ;
    location.reload();
    }ぶっぶーですわ
  };

  const buzzBtn = function(){
    v+= 1;
    if(v% 5===0){
      showNum .innerHTML='buzz'
    } else{
      alert('ぶっぶーですわ');
      location.reload();
    }
  };

  const fizzbuzzBtn = function() {
  v += 1;
  if ((v % 3 === 0) & (v % 5 === 0)) { 
    showNum.innerHTML = 'fizzbuzz';
  } else {
    alert('ぶっぶーですわ');
    location.reload();
  }
};

const numBtn = function() {
  v += 1;
  if (v % 3 === 0 || v % 5 === 0) {
    alert('ぶっぶーですわ');
    location.reload();
  }
  showNum.innerHTML = v;
};
   