let cntPerson =0;
const cntUp=function(){
    cntPerson +=1;
    console.log(cntPerson)
};

const reply =function(){
    const action =Array(1*cntPerson+ 1).join('どうぞどうぞ');
    alert(action);
    cntPerson=0;
};