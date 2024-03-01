let JSON1={}

let flag=true;
let searchdata="id"
let editIndex=-1;
let flagcompany=true;
let maincounter=[]
let mainid=[]
let mainname=[]
let addid=-1;
let addname=-1;
function onload(){
    let input = document.getElementById("pid");
    let input1 = document.getElementById("pcounter");
    let input2 = document.getElementById("partNo");
    let input3 = document.getElementById("partweight");

let invalidChars = [
  "-",
  "+",
  "e",
];

input.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});
input1.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
input2.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
  input3.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
}


function Read(){
    let counter=document.getElementById("pcounter").value;
    let id=document.getElementById("pid").value;
    let partno=document.getElementById("partNo").value;
    let name=document.getElementById("name").value;
    let size=document.querySelector('input[type="radio"]:checked').value;
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkedValues = [...checked].map(c => c.value).join(' ');
    let desc=document.getElementById("desc").value;
    let weight=document.getElementById("partweight").value;
    let companyname=document.getElementById("companyname").value;
    let address=document.getElementById("address").value;
    let date=document.getElementById("date").value;
    

    if(val(id,partno,name,size,checkedValues,desc,weight,companyname,address,date,counter)){
      
        if(editIndex===-1){
            add(id,partno,name,size,checkedValues,desc,weight,companyname,address,date,counter)
        }
        else{
            UpdateProduct(editIndex, id, partno, name, size, checkedValues, desc,weight,companyname,address,date);
            editIndex=-1
        }
    }   


}
function Delete(){
    document.getElementById("form").style.display="none"
    document.getElementById("deletable").style.display="inline-block"
    document.getElementById("Companytable").style.display="none"
    document.getElementById("back1").style.display="inline-block"



}
function deletename(){
    document.getElementById("deletebtn").style.display="none"
    document.getElementById("deleteinput").style.display="inline-block"
    document.getElementById("disname").style.display="inline-block"
    document.getElementById("disid").style.display="none"
    document.getElementById("inputparticular").style.innerHTML="inline-block"
    document.getElementById("inputparticular1").style.display="none"
    document.getElementById("deletename1").style.display="inline-block"
    document.getElementById("deleteid1").style.display="none"






}
function deleteid(){
    document.getElementById("deletebtn").style.display="none"
    document.getElementById("deleteinput").style.display="inline-block"
    document.getElementById("disname").style.display="none"
    document.getElementById("disid").style.display="inline-block"
    document.getElementById("inputparticular").type="number"
    document.getElementById("inputparticular").style.display="none"
    document.getElementById("inputparticular1").style.display="inline-block"
    document.getElementById("deleteid1").style.display="inline-block"
    document.getElementById("deletename1").style.display="none"





}
function deleteparticular() {
    let d = document.getElementById("inputparticular").value;
    let deleted = false;
    
    maincounter.forEach((item) => {
        if (JSON1[item]) {
            let initialLength = JSON1[item].length;
            JSON1[item] = JSON1[item].filter((item1) => {
                if (item1.name === d) {
                    if (confirm("Are you sure you want to delete the data?")) {
                        return false; 
                    } else {
                        return true; 
                    }
                } else {
                    return true; 
                }
            });
            if (initialLength !== JSON1[item].length) {
                deleted = true;
            }
        }
    });

    if (!deleted) {
        alert("No data found.");
    }
    
    reset()
    document.getElementById("deletable").style.display = "none";
    document.getElementById("deleteinput").style.display = "none";
    document.getElementById("deletebtn").style.display = "inline-block";
    document.getElementById("inputparticular").value = "";
}
function deleteparticular1() {
    let d = document.getElementById("inputparticular1").value;
    let deleted = false;
    
    maincounter.forEach((item) => {
        if (JSON1[item]) {
            let initialLength = JSON1[item].length;
            JSON1[item] = JSON1[item].filter((item1) => {
                if (item1.id === d) {
                    if (confirm("Are you sure you want to delete the data?")) {
                        return false; 
                    } else {
                        return true; 
                    }
                } else {
                    return true; 
                }
            });
            if (initialLength !== JSON1[item].length) {
                deleted = true;
            }
        }
    });

    if (!deleted) {
        alert("No data found.");
    }
 
    printData(JSON1);
    
    reset();
    document.getElementById("deletable").style.display = "none";
    document.getElementById("deleteinput").style.display = "none";
    document.getElementById("deletebtn").style.display = "inline-block";
    document.getElementById("inputparticular").value = "";
}

function val(id,partno,name,size,checkedValues,desc,weight,companyname,address,date,counter){
    if(!maincounter.includes(counter)){
        maincounter.push(counter)
    }
    if(!mainid.includes(id)){  
        addid=0
        mainid.push(id)
    }else{
        addid=-1

    }
    if(!mainname.includes(name)){
        addname=0
        mainname.push(name)
    }
    else{
        addname=-1
        
    }
    console.log(maincounter)
    console.log(mainid)
    console.log(mainname)
    let existname=false;
    let existid=false;

    mainid.forEach((item,index)=>{
        if(parseInt(item) === parseInt(id) && addid===-1){
            existid=true;
        }
    })
    mainname.forEach((item,index)=>{
        if(item.toLowerCase() === name.toLowerCase() && addname===-1){
            existname=true;
        }
    })
    console.log(existname)
    console.log(existid)



    let add=false;
    let add1=false;
    let add2=false;
    let add3=false;
    let add4=false;
    let add5=false;
    let add6=false;
    let add7=false;

    
   
   
    const pattern1 = /^(?!0)\d+$/;
        if(id===""){
            document.getElementById("idval").innerHTML = "Product id cannot be empty";
            document.getElementById("pid").style.border = "2px solid red";
            add = false;
        }
        else if(!pattern1.test(id)){
            document.getElementById("idval").innerHTML = "Product id cannot start with zero";
            document.getElementById("pid").style.border = "2px solid red";
            add = false;
        }
    // else if(existid){
    //     document.getElementById("idval").innerHTML = "Product id already exist";
    //     document.getElementById("pid").style.border = "2px solid red";
    //     add = false;}
    else if (id >= 10000) {
        document.getElementById("idval").innerHTML = "Product id should be less than 10000";
        document.getElementById("pid").style.border = "2px solid red";
        add = false;
    } else {
        document.getElementById("idval").innerHTML = "";
        document.getElementById("pid").style.border = "none";
        add = true;
    }

   
  
        
        
        if(counter==="") {
            document.getElementById("counterval").innerHTML = "Product counter cannot be empty";
            document.getElementById("pcounter").style.border = "2px solid red";
            add7 = false;
        }
        else if(!pattern1.test(counter)){
            document.getElementById("counterval").innerHTML = "Product counter cannot start with zero";
            document.getElementById("pcounter").style.border = "2px solid red";
            add7 = false;
        }

  
    else if (counter >= 10000) {
        document.getElementById("counterval").innerHTML = "Product counter should be less than 10000";
        document.getElementById("pcounter").style.border = "2px solid red";
        add7 = false;
    } else {
        document.getElementById("counterval").innerHTML = "";
        document.getElementById("pcounter").style.border = "none";
        add7 = true;
    }

   
    
         if (partno==="") {
            document.getElementById("partval").innerHTML = "Product partno cannot be empty";
            document.getElementById("partNo").style.border = "2px solid red";
            add1 = false;
    
    }
    else if(!pattern1.test(counter)){
        document.getElementById("partval").innerHTML = "Product partno cannot start with zero";
            document.getElementById("partNo").style.border = "2px solid red";
            add1 = false;
    }
    
    else if (partno >= 10000) {
        document.getElementById("partval").innerHTML = "Product partno should be less than 10000";
        document.getElementById("partNo").style.border = "2px solid red";
        add1 = false;
    } else {
        document.getElementById("partval").innerHTML = "";
        document.getElementById("partNo").style.border = "none";
        add1 = true;
    }
    let pattern2=/^(?!0\d)\d+(\.\d+)?$/;

    if (!pattern2.test(String(weight))) {
        if (weight < 0) {
            document.getElementById("partweightval").innerHTML = "Product weight cannot be negative";
            document.getElementById("partweight").style.border = "2px solid red";
            add1 = false;
        } 
        if(!pattern2.test(weight) && flag===false){ 
            if(String(weight).length===0){
                document.getElementById("partweightval").innerHTML = "Weight cannot be zero";
                document.getElementById("partweight").style.border = "2px solid red";
                add1 = false;
            }else{

                document.getElementById("partweightval").innerHTML = "NO special character allowed or preceding zeroes or zero allowed";
                document.getElementById("partweight").style.border = "2px solid red";
                add1 = false;
            }
        }
    } else if (weight >= 1000) {
        document.getElementById("partweightval").innerHTML = "Product weight should be less than 999 kg";
        document.getElementById("partweight").style.border = "2px solid red";
        add1 = false;
    } else {
        document.getElementById("partweightval").innerHTML = "";
        document.getElementById("partweight").style.border = "none";
        add1 = true;
    }
    if (name.length !== 0) {
        const pattern = /^(?![\s\d])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
        if (name.length > 0) {
            if (name[0] === " ") {
                document.getElementById("nameval").innerHTML = "No spaces at start";
                document.getElementById("name").style.border = "2px solid red";
                add2 = false;
            } else if (!pattern.test(name)) {
                document.getElementById("nameval").innerHTML = "Name should contain only letters and single spaces";
                document.getElementById("name").style.border = "2px solid red";
                add2 = false;
            }
            // else if (existname) {
            //     document.getElementById("nameval").innerHTML = "Data already exist";
            //     document.getElementById("name").style.border = "2px solid red";
            //     add2 = false;
            // }
            else if (name.length > 50) {
                document.getElementById("nameval").innerHTML = "Name should be less than 50 character";
                document.getElementById("name").style.border = "2px solid red";
                add2 = false;
            } else {
                document.getElementById("nameval").innerHTML = "";
                document.getElementById("name").style.border = "none";
                add2 = true;
            }
        }
    } else if (name.length == 0) {
        document.getElementById("nameval").innerHTML = "Product quantity is empty";
        document.getElementById("name").style.border = "2px solid red";
        add2 = false;
    } else {
        document.getElementById("nameval").innerHTML = "";
        document.getElementById("name").style.border = "none";
        add2 = true;
    }
    if(checkedValues.length===0){
        document.getElementById("colorval").innerHTML="Please check atleast one"
    }
    else{
        document.getElementById("colorval").innerHTML=""

    }
    if (desc.length === 0) {
        document.getElementById("descval").innerHTML = "Product desc is empty";
        document.getElementById("desc").style.border = "2px solid red";
        add3 = false;
    } else if (desc.length >= 300) {
        document.getElementById("descval").innerHTML = "Product desc should be less than 300";
        document.getElementById("desc").style.border = "2px solid red";
        add3 = false;
    } else {
        document.getElementById("descval").innerHTML = "";
        document.getElementById("desc").style.border = "none";
        add3 = true;
    }

    if (address.length===0 && flagcompany===false) {
        document.getElementById("addressval").innerHTML = "Address is empty";
        document.getElementById("address").style.border = "2px solid red";
        add6 = false;
    } else if (address.length >= 300) {
        document.getElementById("addressval").innerHTML = "Address should be less than 300";
        document.getElementById("address").style.border = "2px solid red";
        add6 = false;
    } else {
        document.getElementById("addressval").innerHTML = "";
        document.getElementById("address").style.border = "none";
        add6 = true;
    }

    if (companyname.length !== 0) {
        const pattern = /^(?![\s])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
        if (companyname.length > 0) {
            if (companyname[0] === " ") {
                document.getElementById("companynameval").innerHTML = "No spaces at start";
                document.getElementById("companyname").style.border = "2px solid red";
                add4 = false;
            } else if (!pattern.test(companyname)) {
                document.getElementById("companynameval").innerHTML = "Company name should contain only letters and single spaces";
                document.getElementById("companyname").style.border = "2px solid red";
                add4 = false;
            }
            else if (companyname.length > 20) {
                document.getElementById("companynameval").innerHTML = "Company name should be less than 50 character";
                document.getElementById("companyname").style.border = "2px solid red";
                add4 = false;
            } else {
                document.getElementById("companynameval").innerHTML = "";
                document.getElementById("companyname").style.border = "none";
                add4 = true;
            }
        }
    } else if (companyname.length == 0 && flagcompany===false) {
        document.getElementById("companynameval").innerHTML = "Company name  is empty";
        document.getElementById("companyname").style.border = "2px solid red";
        add4 = false;
    } else {
        document.getElementById("companynameval").innerHTML = "";
        document.getElementById("companyname").style.border = "none";
        add4 = true;
    }
    let selectedDate = new Date(date);
    let currentDate = new Date();
    if(!date && flagcompany===false){
        document.getElementById("dateval").innerHTML = "date is empty";
            document.getElementById("date").style.border = "2px solid red";
            add5=false

        }else if(selectedDate > currentDate){
            document.getElementById("dateval").innerHTML = "Establish date is in future";
            document.getElementById("date").style.border = "2px solid red";
            add5=false
        }
        else{
            document.getElementById("dateval").innerHTML = "";
            document.getElementById("date").style.border = "";
            add5=true
        }

    
    if(add && add1 && add2 && add3 && add7){
        if(flag || flagcompany){
            if(add4 && add5 && add6){

                return true
            }
        }
        else{
            return true
        }
    }

}
let main=[]
function add(id,partno,name,size,checkedValues,desc,weight,companyname,address,date,counter){
    if(weight===""){
        weight=0
    }
    let details={
        "companyname":companyname,
        "address":address,
        "establishDate":date
    }
    
    let obj={
        "id":id,
        "partno":partno,
        "name":name,
        "size":size,
        "color":checkedValues.split(" "),
        "desc":desc,
        "weight":weight,
        "details":details
        
    }
    if (JSON1[counter]) {
        JSON1[counter] = [...JSON1[counter], obj];
    } else {
        JSON1[counter] = [obj];
    }
    console.log(JSON1)
    printData(JSON1)
    reset()
 


   
    
}
function edit() {
    document.getElementById("edittable").style.display="inline-block"
    document.getElementById("form").style.display="none"
    document.getElementById("editbtn3").innerText = "Update Weight";
    document.getElementById("Companytable").style.display="none"
    document.getElementById("back").style.display="inline-block"
    console.log("h1")



}
function editname(){
document.getElementById("editbtn").style.display="none"
    document.getElementById("editinput").style.display="inline-block"
    document.getElementById("editname").style.display="inline-block"
    document.getElementById("editid").style.display="none"
    document.getElementById("editparticular1").style.display="none"
    document.getElementById("editparticular").style.display="inline-block"
    document.getElementById("editbtn5").style.display="none"
    document.getElementById("editbtn6").style.display="inline-block"
    console.log("h1")


}
function editid(){
    document.getElementById("editbtn").style.display="none"
    document.getElementById("editinput").style.display="inline-block"
    document.getElementById("editname").style.display="none"
    document.getElementById("editid").style.display="inline-block"
   
    document.getElementById("editparticular1").style.display="inline-block"
    document.getElementById("editparticular").style.display="none"
    document.getElementById("editbtn6").style.display="none"
    document.getElementById("editbtn5").style.display="inline-block"
    console.log("h1")


}
function editparticular1(){
  
    let index;
    let count;
    let e=document.getElementById("editparticular").value;
    let editdata = maincounter.map((item) => {
        let length=JSON1[item].length
        for(let i=0;i<length;i++){
            if(JSON1[item][i].name===e){
                index=i
                count=item;
                break
            }
        }
    })
    console.log(index)
    if(index===-1){
        alert("item not found")
    }
    else{
        editparticular(index,count)
    }

}
function editparticular2(){
    let index;
    let count;
    let e=document.getElementById("editparticular1").value;
    let editdata = maincounter.map((item) => {
        let length=JSON1[item].length
        for(let i=0;i<length;i++){
            if(JSON1[item][i].id===e){
                index=i
                count=item;
                break
            }
        }
    })
    console.log(index)
    if(index===-1){
        alert("item not found")
    }
    else{
        editparticular(index,count)
    }

}
function editparticular(index,count){
    console.log(index,count)
    let obj = JSON1[count][index];
    console.log(obj)
    document.getElementById("pcounter").value = count;

    document.getElementById("pid").value = obj.id;
    document.getElementById("partNo").value = obj.partno;
    document.getElementById("name").value = obj.name;
    document.getElementById("desc").value = obj.desc;
    if(obj.details[0]===""){

        document.getElementById("companyname").value="";
        document.getElementById("address").value="";
        document.getElementById("date").value="";
    }
    else{
        document.getElementById("companyname").value=obj.details.companyname;
        document.getElementById("address").value=obj.details.address;
        document.getElementById("date").value=obj.details.date;
    }
    if(obj.weight===0){

    document.getElementById("partweight").value=""
    }
    else{
    document.getElementById("partweight").value=obj.weight

    }
    document.getElementById("submit").innerText = "Update";
    

    document.getElementById("reset").style.display = "none";
    document.getElementById("edit").innerHTML = "Change the fields you want to update";

    document.querySelector('input[type="radio"][value="' + obj.size.toLowerCase() + '"]').checked = true;
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    obj.color.forEach(color => {
        document.querySelector('input[type="checkbox"][value="' + color + '"]').checked = true;
    });

    if (editIndex === index) {
        editIndex = -1;
    } else {
        editIndex = index;
    }
    document.getElementById("form").style.display="inline-block"
    document.getElementById("edittable").style.display="none"
    document.getElementById("editbtn").style.display="inline-block"
    document.getElementById("editinput").style.display="none"

    
    document.getElementById("editbtn1").style.display="none"
    document.getElementById("editbtn2").style.display="none"
    document.getElementById("editbtn3").innerText = "Add Weight";



}
function UpdateProduct(index, id, partno, name, size, color,desc,weight,companyname,address,date) {
    let counter=document.getElementById("pcounter").value;
    console.log(counter)
    console.log(index)
    JSON1[counter][index].id= id;
    JSON1[counter][index].partno = partno;
    JSON1[counter][index].name = name;
    JSON1[counter][index].desc = desc;
    JSON1[counter][index].weight = weight;
    JSON1[counter][index].details.companyname = companyname;
    JSON1[counter][index].details.address = address;
    JSON1[counter][index].details.establishDate = new Date(date);
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkedValues = [...checked].map(c => c.value).join(' ');
    JSON1[counter][index].size=document.querySelector('input[type="radio"]:checked').value;
    JSON1[counter][index].color=checkedValues
    

    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("submit").innerText = "Add";
    
    printData(JSON1);
    reset();
    document.getElementById("editbtn1").style.display="inline-block"
    document.getElementById("editbtn2").style.display="inline-block"
    document.getElementById("edit").innerHTML=""
}
function reset(){
    let id = document.getElementById("pid").value = "";
    let partno = document.getElementById("partNo").value = "";
    let name = document.getElementById("name").value = "";
    let desc = document.getElementById("desc").value = "";
    document.getElementById("partweight").value = "";
    document.getElementById("pcounter").value = "";


    document.getElementById("idval").innerHTML = "";
    document.getElementById("partval").innerHTML = "";
    document.getElementById("nameval").innerHTML = "";
    document.getElementById("descval").innerHTML = "";
    document.getElementById("pid").style.border="none";
    document.getElementById("partNo").style.border="none";
    document.getElementById("name").style.border="none";
    document.getElementById("desc").style.border="none";
    editIndex=-1
    document.getElementById("form").style.display="inline-block"
    document.getElementById("weightinput").style.display="none"
    document.getElementById("deletable").style.display="none"
    document.getElementById("disname").style.display="none"
    document.getElementById("disid").style.display="none"
    document.getElementById("editbtn3").innerText="Add Weight"
    document.getElementById("Companytable").style.display="none"
    document.getElementById("editbtn4").innerText="Add details"
    flag=true;
    flagcompany=true;
    document.getElementById("companyname").value="";
        document.getElementById("address").value="";
        document.getElementById("date").value=""

    





    // Reset radio button
    document.querySelector('input[type="radio"][value="small"]').checked = true;

    // Reset checkboxes
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    document.querySelector('input[type="checkbox"][value="white"]').checked = true;

}
function printData(JSON1){
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    Object.keys(JSON1).forEach((key, index) => {
        JSON1[key].forEach((item, i) => {
            let tr = "<tr>";
            tr += "<td>" + key + "</td>";

            tr += "<td>" + item.id + "</td>";
            tr += "<td>" + item.partno + "</td>";
            tr += "<td>" + item.name + "</td>";
            tr += "<td>" + item.size + "</td>";
            tr += "<td>" + item.color + "</td>";
            tr += "<td>" + item.desc + "</td>";
            if (item.weight === 0 || item.weight === "") {
                tr += "<td>" + "-" + "</td>";
            } else {
                tr += "<td>" + item.weight + "</td>";
            }
            if(item.details.companyname==="" || item.details.address==="" || item.details.establishDate===""){
                tr += "<td>" + "-" + "</td>";
            }
            else{
                tr += "<td>" + "Name:"+item.details.companyname+"<br>"+"Address:"+item.details.address+"<br>"+"Date:"+item.details.establishDate + "</td>";
            }
            tr += "</tr>";
            tbody.innerHTML += tr;
        });
    });
    }
    


function search(){
    let search=document.getElementById("search").value.trim().toLowerCase()
    if(search.length>0){
        let filterdata;
        let data=maincounter.map((item1)=>{

            return filterdata=JSON1[item1].filter((item)=>{
                return  item.name.toLowerCase().includes(search.toLowerCase()) || item.id.includes(search); 
            })
        })
        console.log(data)
        if(data.length>0){       
                printData(data);   
        }
       

       
    }
    else{
        printData(JSON1)
    }
}
// function sort() {
//     let sort = document.getElementById("sortvalue").value;
//     let sortdata=maincounter.map((item1)=>{

//         return JSON1[item1]
//     })
//     switch (sort) {
//         case "partIdSortup":
//             sortdata.sort((a, b) => b.id - a.id);
//             console.log(sortdata)
//             break;
//         case "partIdSortdown":
//             sortdata.foreach((data) =>data.sort((a,b)=> a.id - b.id));
//             break;
//         case "partNoSortup":
//             sortdata.foreach((data) =>data.sort((a,b)=> b.id - a.id));
//             break;
//         case "partNoSortdown":
//             sortdata.foreach((data) =>data.sort((a,b)=> a.partno - b.partno));
//             break;
//         case "partNameSort":
//             sortdata.sort((a, b) => a.name.localeCompare(b.name));
//             break;
//         case "Date":
//             sortdata.sort((a, b) => new Date(a.details[2]) - new Date(b.details[2]));
//             break;
//         case "Namelength":
//             sortdata.sort((a, b) => {
//                 if (a.details[0].length < b.details[0].length || a.details[0] === "NA") {
//                     return -1;
//                 }
//                 if (a.details[0].length > b.details[0].length || b.details[0] === "NA") {
//                     return 1;
//                 }
//                 return 0;
//             });
//             break;
//     }
    // Move rows with details[0] as "NA" to the end
    // JSON1.sort((a, b) => (a.details[0] === "NA") - (b.details[0] === "NA"));
//     printData(sortdata);
// }

function addweight(){
    
    if(flag){

        document.getElementById("weightinput").style.display="inline-block"
        document.getElementById("editbtn3").innerText="Remove Weight"
        flag=false;
    }
    else{
        flag=true;
        document.getElementById("editbtn3").innerText="Add Weight"
        document.getElementById("weightinput").style.display="none"
        document.getElementById("partweightval").innerHTML = "";
        document.getElementById("partweight").style.border = "";

    }

    

    

}
function addcompany(){
    if(flagcompany){

        document.getElementById("Companytable").style.display="inline-block"
        document.getElementById("editbtn4").innerText="Remove details"

        flagcompany=false
    }
    else{
        flagcompany=true
        document.getElementById("Companytable").style.display="none"
        document.getElementById("editbtn4").innerText="Add details"
        document.getElementById("addressval").innerHTML = "";
        document.getElementById("address").style.border = "none";

    }
    

}
function back(){
document.getElementById("form").style.display="inline-block"
document.getElementById("deletable").style.display="none"
document.getElementById("edittable").style.display="none"
document.getElementById("deletebtn").style.display="inline-block"
document.getElementById("deleteinput").style.display="none"
document.getElementById("editbtn").style.display="inline-block"
document.getElementById("editinput").style.display="none"

}
