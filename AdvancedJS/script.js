                                        // #Polyfill
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

// const arr=[1,2,3,4,5]
// Array.prototype.map=function(callback){
//     let obj=this
//     let res=[]
//     for(let i=0;i<obj.length;i++){
//         res.push(callback(obj[i]))
//     }
//     return res;
    
// }
                                    // #Destruchring
// const res1=arr.map(el=>el*2)
// console.log(res1)
// console.log(arr.map)

// const a=[1,2,3,4,5,6];
// const [x,,z,,d,]=a
// const obj={p:1,q:2}
// const {p,q}=obj
// console.log(x,y,z)
// console.log(x,z,d)
// console.log(p,q)

// const obj = { a: 1, b: { c: 2 } };
// const {
//   a,
//   b: { c: d },
// } = obj;
// console.log(a,d)

                                        // #Prototype

// function num(num){
//     return num
// }
// num.power=2
// console.log(num(5))
// console.log(num.power)

// function CreateUser(product,price){
//     this.product=product;
//     this.price=price;
// }
// CreateUser.prototype.increment=function(){
//      return this.price+1;
    
// }
// const a=new CreateUser("Laptop",100)
// console.log(a.increment())

// const obj={
//     name:"prit",
//     age:20

// }
// const arr=[1,2]
// Object.prototype.increment=function(){
//     console.log("hii")
// }
// arr.increment()

                                        // #Array Method
// #splice
// const arr=[1,2,3,4,5]
// console.log(arr.splice(1,4,4,5))
// console.log(arr)

// #slice
// const arr=[1,2,3,4,5]
// console.log(arr.slice(1,3))
// console.log(arr.slice(-2,4))

// #concat
// const arr=[1,2]
// const obj={
//     0:"prit",
//     1:"hii"
// }
// console.log(arr.concat([3,4],[5,6]))
// console.log(arr.concat([3,4],5,6))
// console.log(arr.concat(obj))

// #sort
// let arr = [ 1, 2, 15 ];
// arr.sort();
// console.log(arr)
// function comparenum(a,b){
//     if(a>b) return 1
//     if(a==b) return 0
//     if(a<b) return -1
// }
// let arr=[1,15,2]
// arr.sort(comparenum)
// console.log(arr)

// #reverse
// let arr=[1,15,2]
// console.log(arr.reverse())

// #split
// let str="audi, volvo, bmw"
// console.log(str.split(", ",1))

// #join
// let str=['Bilbo', 'Gandalf', 'Nazgul']
// console.log(str.join(", ")) 

// let height="height"                                   // #Objects
// let obj={
//     "name":"prit",
//     "age":20,
//     [height+"s"]:"172cm"
// }
// obj.__proto__=5
// obj.gender="male"
// console.log(obj.name)
// console.log(obj.age,obj.gender)
// delete obj.age
// console.log(obj.age)
// console.log(obj.heights)
// console.log(obj.__proto__)

                                    //   CallBack