                                        // #Polyfill
//polyfill for forEach
// const arr=[1,2,3,4,5]

// Array.prototype.forEach=function(){
//     console.log(this)
//     for(let i=1;i<=this.length;i++){ 
//         console.log(i*2)
// }}
// arr.forEach((el)=>{
//     console.log(el)
// })
                                    // #Destruchring
// const res1=arr.map(el=>el*2)
// console.log(res1)
// console.log(arr.map)

// const a=[1,2,3,4,5,6];
// const [,,x,w,d,]=a
// const obj={p:a,q:2}
// // const {p,q}=obj
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
// const arr = [1,2,3,4,5] 
// console.log([...arr].splice(1))
// console.log(arr.slice(1))
// console.log(arr)

// #slice
// const arr=[1,2,3,4,5]
// console.log(arr);
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
// let arr = [ 1, 2, 15,8 ];
// arr.sort();
// console.log(arr)
// function comparenum(a,b){
//     b>a
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



                                            // hoisting

// console.log(a)
// var a=9;
// console.log(a)
// console.log(a)
// let a=9;  
// greet();               
// function greet(){
//     console.log("hello");
// }
// greet();               
// const greet=()=>{
//     console.log("hello");
// }

                                        // Event loops

// setTimeout(function timer() {
//   console.log('You clicked the button!');
// }, 2000); 

// console.log("Hi!");

// setTimeout(function timeout() {
//   console.log("Click the button!");
// }, 5000);

// console.log("Welcome to loop.");

// function history(){
//     das
// }
// fucntion greet(){
//     history()
// }
// greet()

                                        // Closure

// const x=()=>{
//     let x=1;
//     console.log(x);
//     const y=()=>{
//     // x=2;
//     console.log(x);
//             const z=()=>{
//                 // x=3
//                 console.log(x)
//             }
//             z()
//     }
//     x=100;
//     y()
// }
// x()

//                                      #cookies

// console.log(document.cookies)
// document.cookies="name=prit213123123"
// document.cookies="name1=1231212"
// let a=prompt("enter key")
// let b=prompt("entervalue")
// document.cookies=`${encodeURIComponent(a)}=${encodeURIComponent(b)}`
// console.log(document.cookies)

                                        // #localstrorage
// let key=prompt("enter key");
// let value=prompt("enter value")
// localStorage.setItem(`${key}`,`${value}`)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.key("prit"))
// if(key==0){
//     localStorage.clear()
// }

                                    // #Call Bind apply

// const obj={
//     name:"prit",
//     age:20,
    
// }
// function getname(state,country){
// console.log(this.name+" "+state+" "+country)
// }
// const obj2={
//     name:"ut",
//     age:20,
    
// }
// getname.call(obj,"uganda","africa")
// getname.apply(obj2,["guj","india"])
// let a=getname.bind(obj,"uganda","africa")
// a();
                                        // #shallow copy

// let obj={
//     "name":"prit"
// }
// let user=obj;
// user.name="ut";
// console.log(obj)

// let obj={
//     "name":"prit"
// }
// let user=Object.assign({},obj);8/ console.log(obj)

// let obj={
//     "name":"prit"
// }
// let user={...obj};
// user.name="ut";
// console.log(obj)

// let obj={
//     "name":"prit",
//     "add":{
//         city:"ahm"
//     }
// }
// let user=Object.assign({},obj);
// user.add.city="UP";
// console.log(obj)

// let obj={
//     "name":"prit",
//     "add":{
//         city:"ahm"
//     }
// }
// let user=JSON.parse(JSON.stringify(obj));
// user.add.city="UP";
// console.log(obj)
// console.log(user)


