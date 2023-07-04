
let v=0;
const rewiteNum=document.getElementById('rewiteNum')
rewiteNum,innerHTML =v;

cobst rewiteCntUP=function(){
    v+=1;
    if(v%3===0&&v%5===0){
    rewiteNum,innerHTML ='FizzBuzz';
    }else if(v%3===0){
        rewiteNum,innerHTML ='Fizz';
    }else if(v%5===0){
        rewiteNum,innerHTML ='Buzz';
    }else{
        rewiteNum,innerHTML =v;
    };

}
}
