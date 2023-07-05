
let v=0;
const rewriteNum=document.getElementById('rewriteNum')
rewriteNum.innerHTML =v;

const rewriteCntUP=function(){
    v+=1;
    if(v%3===0&&v%5===0){
    rewriteNum.innerHTML ='FizzBuzz';
    }else if(v%3===0){
        rewriteNum.innerHTML ='Fizz';
    }else if(v%5===0){
        rewriteNum.innerHTML ='Buzz';
    }else{
        rewriteNum.innerHTML =v;
    };

}

