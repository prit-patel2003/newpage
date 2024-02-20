// let i=0;
// while(i<=10){
//    if(i%2==0 && i!=0){
//     console.log(i)
//    }
//     i++
// }

// #2

// for(let i=1;i<=10;i++){
//     for (let j=1;j<=10;j++){
//         console.log(`${i}*${j}=`+i*j)
//     }
//     console.log(" ")
// }

//#3
// function KmToMi(i){
//     return i*0.621371
// }
// let km=prompt("enter km")
// console.log(KmToMi(km))

// #4
// const arr=[-1,2,3,4,-5]
// let sum=0
// arr.map((el)=>{
//     sum=sum+el
// })
// console.log(sum)

// #5
// function rev(arr){
//     return arr.reverse()
// }
// arr=[1,2,3,4,5]
// console.log(rev(arr))

// #6
// const arr=[5,1,3,6,10]
// for(let i=0;i<=arr.length;i++){
//     for(let j=i+1;j<=arr.length;j++) {
//         if(arr[i]>arr[j]){
//             temp=arr[i];
//             arr[i]=arr[i+1];
//             arr[i+1]=temp;
//     }
// }
// }
// console.log(arr)

// #7
// function FilterNum(el){
//     let ls=[]
//     for(let i=0;i<el.length;i++){
//         if(el[i]>=0){
//             ls.push(el[i])
//         }
//     }
//     return ls
// }
// const arr=[-1,0,23,-10,23,123,1]
// console.log(FilterNum(arr))

// #8
// function RemoveStr(arr){
//     let str=""
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!=" "){
//             str=str+arr[i]
//         }
//     }
//     return str
// }
// const str=" hello world    "
// console.log(RemoveStr(str.split("")))

// #9
// function returnBool(i){
//     if (i%10==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let i=21
// console.log(returnBool(i))

// #10
// function vowelCounter(str){
    //     let count=0
    //     let arr=['a','e','i','o','u']
    //     for(let i=0;i<str.length;i++) {
 //         for(let j = 0 ;j <arr.length;j++ ) {
//         if(str[i]==arr[j]){
//             count=count+1
//         }
//     }
// }
// return count
// }
// let str="appleoui"
// console.log(vowelCounter(str.split("")))