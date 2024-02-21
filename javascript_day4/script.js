function OnClick(){
    // document.getElementById("demo").innerHTML="CLICKED"
    alert("CLICKED")
}
function demoClick(){
    document.getElementById('demo').onclick = function() {OnClick()};
}
function mouseover(){
    document.getElementById("mouseover").style.fontSize="30px"
    document.getElementById("mouseover").style.border="1px solid red"

}
function mouseout(){
    document.getElementById("mouseover").style.fontSize="10px"
    document.getElementById("mouseover").style.border="1px solid green"
}
function myFunction() {
  let x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
function OnChange(){
    var x=document.getElementById("onchange").value;
    document.getElementById("demo2").innerHTML=x;
}
function OnDoubleClick(){
    document.getElementById("doubleclick").style.backgroundColor='red';
}
function OnTextChange(){
     var x=document.querySelector(".textbox").value
     console.log(x)
}
function MouseOut(){
    document.getElementById("color").style.backgroundColor="green";

}
function EvenOdd(){
     var x1=document.getElementById("oddeven").value;
     if(x1%2==0){
        console.log("even")
     }
     else if(x1===0){
        console.log("Zero`")
     }
     else{
        console.log("odd")
     }
}
function rangeoddeven(){
    var a=prompt("enter min val");
    var b=prompt("enter max val");
    for (let i=a;i<b;i++){
        if(i%2==0){
            console.log(i+" is even")
         }
         else if(i==0){
            console.log(i+" is Zero`")
         }
         else{
            console.log(i+" is odd")
         }
    }
}
function ArmStrong(){
   

    const min = parseInt(prompt('Enter a min: '));
    const max = parseInt(prompt('Enter a max: '));
    
    for (let i = min; i <= max; i++) {
        let sum = 0;
        let temp = i;
        d=String(i).length
        while (temp > 0) {
            let remainder = temp % 10;
            sum +=Math.pow(remainder,d);
            temp = parseInt(temp / 10);
        }
        if (sum == i) {
            console.log(`${i} is an Armstrong number`);
        } else {
            console.log(`${i} is not an Armstrong number.`);
        }
    }
    

    }

function Prime(){
    const min = parseInt(prompt('Enter a min: '));
     const max = parseInt(prompt('Enter a max: '));
    for(let i=min; i<=max; i++){
    let flag=true;
    for(let j=2; j<=parseInt(i/2); j++){
        if(i%j === 0){
            flag=false;
            break;
        }
    }
    if(flag === true && i !== 1){
        console.log(i + " is a prime number");
    }
    else{
        console.log(i + " not prime");
    }
}

    
}  
function Factorial(){
    let n=5;
    let sum=1
    while(n>=1){
        sum*=n;
        n--;
    }
    console.log(sum);
}

function WithRecursionFactorial(x){
    if(x===0){
        return 1
    }
    else{
        return x*WithRecursionFactorial(x-1);
    }
}
const num=5;
if(num>0){
    let result = WithRecursionFactorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}  

function Fibonacci(){
    const min = parseInt(prompt('Enter range'));
    let a=0;
    let b=1
    if (min==1){
        console.log(0)
    }
    else if(min==2){
        console.log(0)
        console.log(1)

    }
    else{
        console.log(0)
        console.log(1)
        for(let i=0;i<min-2;i++){
            let c=a+b;
            console.log(c)
            a=b
            b=c;
    }
  
}

}
function Pallindrome(){
    let num=prompt("Enter number")
    let sum = 0;
    let temp = num;
    d=String(num).length
    while(temp>0){
        let r=temp%10;
        sum=sum+r*Math.pow(10,d-1)
        temp=parseInt(temp/10)
        d--;
        

    }
    if(sum==num){
        console.log(`${num} is pallindrome`)
    }
    else{
        console.log(`${num} is not pallindrome`)

    }
}
function cbrt(){
    let num=prompt("Enter number")
    console.log(num*num*num)
}
function duplicate(){
    const arr=[1,2,3,1,2,3]
    let emptyarr=[];
    for(let i=0;i<arr.length;i++){
        
        for(let j=i+1;j<arr.length;j++){

            if(arr[i]==arr[j]){
                emptyarr.push(arr[i])
            }
        }
    }
    console.log(emptyarr)

}
function sum(){
    let a=1301212
    let sum=0;
    while(a>0){
        sum=sum+a%10;
        a=parseInt(a/10);
    }
    console.log(sum)
}
function Swap(){
    let a=100
    let b=101;
    let temp;
    console.log(`a:${a} b:${b}`)
    temp=a;

    a=b;
    b=temp;
    console.log(`a:${a} b:${b}`)

}
function SwapWithoutThird(){
    let a=101;
    let b=100;
    console.log(`a:${a} b:${b}`)
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(`a:${a} b:${b}`)

    
}
function vowel(){
let str='Loremasnd kjsd kjasdnkjn'
let vowel=['a','e','i','o','u'];

let consonant=0;
let v=0;
 for(let i=0;i<str.length;i++){
    if(vowel.includes(str[i])){
        v++;
    }
    else if(str[i]==' '){
    continue
    }
    else{
        consonant++;
    }
 }
 console.log(v)
 console.log(consonant)

}
function checkword(){
    let str="Lorem ipsum dolor sit amet consectetur adipisicing elit. \n asdasdasdas asdasd"
    let arr=str.split(" ")
    let newline=0;
    let space=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]==="\n"){
            newline++;
            
        }
    
    }
    for(let j=0;j<str.length;j++){
        if(str[j]==" "){
            space++;
        }
    }
    console.log(arr)
    console.log(`New line:- ${newline}`)
    console.log(`word:- ${arr.length-newline}`)
    console.log(`space:- ${space}`)


}
function Diamond(n){
    var space = n - 1; 
  
    // run loop (parent loop) 
    // till number of rows 
    for (var i = 0; i < n; i++) { 
      // loop for initially space, 
      // before star printing 
      for (var j = 0; j < space; j++) document.write("  "); 

      // Print i+1 stars 
      for (var j = 0; j <= i; j++) document.write("*" + "  "); 

      document.write("<br>"); 
      space--; 
    } 

    // Repeat again in reverse order 
    space = 0; 

    // run loop (parent loop) 
    // till number of rows 
    for (var i = n; i > 0; i--)  
    { 
      
      // loop for initially space, 
      // before star printing 
      for (var j = 0; j < space; j++) document.write("  "); 

      // Print i stars 
      for (var j = 0; j < i; j++) document.write("*" + "  "); 

      document.write("<br>"); 
      space++; 
    } 
}