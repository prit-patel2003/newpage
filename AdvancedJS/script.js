//polyfill for forEach
// const arr=[1,2,3,4,5]
// Array.prototype.forEach=null
// Array.prototype.forEach=function(callback){
//     console.log(this)
//     for(let i=1;i<=this.length;i++){ 
//         console.log(i*2)
// }}
// arr.forEach((el)=>{
//     console.log(el)
// })

//polyfill for MAP

const arr=[1,2,3,4,5]
Array.prototype.map=function(callback){
    let obj=this
    let res=[]
    for(let i=0;i<obj.length;i++){
        res.push(callback(obj[i]))
    }
    return res;
    
}
const res1=arr.map(el=>el*2)
console.log(res1)
// console.log(arr.map)
