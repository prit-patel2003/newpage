type num={
    x:number;
    y:number;
}
function addnumber(number1:num){
    console.log(number1.x+number1.y)
}
addnumber({x:100,y:100})

export {}