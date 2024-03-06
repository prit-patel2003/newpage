let a:String="prit"
let b=10
let num:Number=100;
let str;
function getstr(){
    return "prit"
}
str=getstr()


function name(val:String):String{
    val.toUpperCase()
    return val
}
// name(4)
let getname=name("prit")

let d=(name:String,age:number=12)=>{
    console.log(name,age)
}
d("prit")

// function handlerror(errmsg:String): never{
//     throw new Error(errmsg);
    
// }
// handlerror("prit")
console.log(num)
console.log(a)
console.log(b)
export {}