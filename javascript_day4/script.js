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
// function ArmStrong(){
//     var c=prompt("enter min val");
//     var d=promt("enter max val");
//     let sum=0;
//     for(let)
// }