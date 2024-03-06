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
let existname=false;
let existid=false;
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
JSON1=JSON.parse(localStorage.getItem("myJSON1"))
printData(JSON1)
console.log(JSON1)
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
    console.log(mainid)
    console.log(mainname)
    console.log(existname)
    console.log(existid)
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
    let itemName = document.getElementById("inputparticular").value.trim();
    let JSON2 = JSON.parse(localStorage.getItem("myJSON1"));
    let deleted = false;

    let confirmDelete = confirm(`Are you sure you want to delete ${itemName}?`);
    if (!confirmDelete) {
        return;
    }

    for (let key in JSON2) {
        JSON2[key] = JSON2[key].filter(item => item.name !== itemName);
        if (JSON2[key].length < JSON.parse(localStorage.getItem("myJSON1"))[key].length) {
            deleted = true;
        }
    }

    if (!deleted) {
        alert("No data found.");
    } else {
        localStorage.setItem("myJSON1", JSON.stringify(JSON2));
        printData(JSON2);
    }

    reset();
    document.getElementById("deletable").style.display = "none";
    document.getElementById("deleteinput").style.display = "none";
    document.getElementById("deletebtn").style.display = "inline-block";
    document.getElementById("inputparticular").value = "";
}

function deleteparticular1() {
    let itemid = document.getElementById("inputparticular1").value.trim();
    let JSON2 = JSON.parse(localStorage.getItem("myJSON1"));

    let deleted = false;
    let confirmDelete = confirm(`Are you sure you want to delete ${itemid}?`);
    if (!confirmDelete) {
        return;
    }
    for (let key in JSON2) {
        JSON2[key] = JSON2[key].filter(item => item.id !== itemid);
        if (JSON2[key].length < JSON.parse(localStorage.getItem("myJSON1"))[key].length) {
            deleted = true;
        }
    }

    if (!deleted) {
        alert("No data found.");
    } else {
        localStorage.setItem("myJSON1", JSON.stringify(JSON2));
        printData(JSON2);
    }
    
    reset();
    document.getElementById("deletable").style.display = "none";
    document.getElementById("deleteinput").style.display = "none";
    document.getElementById("deletebtn").style.display = "inline-block";
    document.getElementById("inputparticular").value = "";
}
function idvalidation(id){
    const pattern1 = /^(?!0)\d+$/;
    console.log("h15")
    const idExists = editIndex === -1 && mainid.some((item, index) => index !== editIndex && item === id);

    if(id===""){
        document.getElementById("idval").innerHTML = "Product id cannot be empty";
        document.getElementById("pid").style.border = "2px solid red";
        return false;
    }
    else if(!pattern1.test(id)){
        document.getElementById("idval").innerHTML = "Product id cannot start with zero";
        document.getElementById("pid").style.border = "2px solid red";
        return false;
    }
else if(idExists){
    document.getElementById("idval").innerHTML = "Product id already exist";
    document.getElementById("pid").style.border = "2px solid red";
    return false;}
else if (id >= 10000) {
    document.getElementById("idval").innerHTML = "Product id should be less than 10000";
    document.getElementById("pid").style.border = "2px solid red";
    return false;
} else {
    document.getElementById("idval").innerHTML = "";
    document.getElementById("pid").style.border = "none";
    return true;
}
return add
   }

function countervalidation(counter){

    const pattern1 = /^(?!0)\d+$/;
    if(counter==="") {
        document.getElementById("counterval").innerHTML = "Product counter cannot be empty";
        document.getElementById("pcounter").style.border = "2px solid red";
        return false;
    }
    else if(!pattern1.test(counter)){
        document.getElementById("counterval").innerHTML = "Product counter cannot start with zero";
        document.getElementById("pcounter").style.border = "2px solid red";
        return false;
    }


else if (counter >= 10000) {
    document.getElementById("counterval").innerHTML = "Product counter should be less than 10000";
    document.getElementById("pcounter").style.border = "2px solid red";
    return false;
} else {
    document.getElementById("counterval").innerHTML = "";
    document.getElementById("pcounter").style.border = "none";
    return true;
}

}

function partnovalidation(partno){
    let add1=false;
    const pattern1 = /^(?!0)\d+$/;

    if (partno==="") {
        document.getElementById("partval").innerHTML = "Product partno cannot be empty";
        document.getElementById("partNo").style.border = "2px solid red";
        return false;

}
else if(!pattern1.test(partno)){
    document.getElementById("partval").innerHTML = "Product partno cannot start with zero";
        document.getElementById("partNo").style.border = "2px solid red";
        return false;
}

else if (partno >= 10000) {
    document.getElementById("partval").innerHTML = "Product partno should be less than 10000";
    document.getElementById("partNo").style.border = "2px solid red";
    return false;
} else {
    document.getElementById("partval").innerHTML = "";
    document.getElementById("partNo").style.border = "none";
    return true;
}
}

function weightvalidation(weight){
    let pattern2=/^(?!0\d)\d+(\.\d+)?$/;

    if (!pattern2.test(String(weight))) {
        if (weight < 0) {
            document.getElementById("partweightval").innerHTML = "Product weight cannot be negative";
            document.getElementById("partweight").style.border = "2px solid red";
            return false;
        } 
        if(!pattern2.test(weight) && flag===false){ 
            if(String(weight).length===0){
                document.getElementById("partweightval").innerHTML = "Weight cannot be zero";
                document.getElementById("partweight").style.border = "2px solid red";
                return false;
            }else{

                document.getElementById("partweightval").innerHTML = "NO special character allowed or preceding zeroes or zero allowed";
                document.getElementById("partweight").style.border = "2px solid red";
                return false;
            }
        }
    } else if (weight >= 1000) {
        document.getElementById("partweightval").innerHTML = "Product weight should be less than 999 kg";
        document.getElementById("partweight").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("partweightval").innerHTML = "";
        document.getElementById("partweight").style.border = "none";
        return true;
    }
}

function namevalidation(name){
    const nameexist = editIndex === -1 && mainname.some((item, index) => index !== editIndex && item === name);

    if (name.length !== 0) {
        const pattern = /^(?![\s\d])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
        if (name.length > 0) {
            if (name[0] === " ") {
                document.getElementById("nameval").innerHTML = "No spaces at start";
                document.getElementById("name").style.border = "2px solid red";
                return false;
            } else if (!pattern.test(name)) {
                document.getElementById("nameval").innerHTML = "Name should contain only letters and single spaces";
                document.getElementById("name").style.border = "2px solid red";
                return false;
            }
            else if (nameexist  ) {
                document.getElementById("nameval").innerHTML = "Data already exist";
                document.getElementById("name").style.border = "2px solid red";
                return false;
            }
            else if (name.length > 50) {
                document.getElementById("nameval").innerHTML = "Name should be less than 50 character";
                document.getElementById("name").style.border = "2px solid red";
                return false;
            } else {
                document.getElementById("nameval").innerHTML = "";
                document.getElementById("name").style.border = "none";
                return true;
            }
        }
    } else if (name.length == 0) {
        document.getElementById("nameval").innerHTML = "Product quantity is empty";
        document.getElementById("name").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("nameval").innerHTML = "";
        document.getElementById("name").style.border = "none";
        return true;
    }
}

function checkvalidation(checkedValues){
    if(checkedValues.length===0){
        document.getElementById("colorval").innerHTML="Please check atleast one"
        return false
    }
    else{
        document.getElementById("colorval").innerHTML=""
        return true;


    }
}
function descvalidation(desc){
   

    if (desc.length === 0) {
        document.getElementById("descval").innerHTML = "Product desc is empty";
        document.getElementById("desc").style.border = "2px solid red";
        return false;
    } else if (desc.length >= 300) {
        document.getElementById("descval").innerHTML = "Product desc should be less than 300";
        document.getElementById("desc").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("descval").innerHTML = "";
        document.getElementById("desc").style.border = "none";
        return true;
    }
}

function addressvalidation(address){

    if (address.length===0 && flagcompany===false) {
        document.getElementById("addressval").innerHTML = "Address is empty";
        document.getElementById("address").style.border = "2px solid red";
        return false;
    } else if (address.length >= 300) {
        document.getElementById("addressval").innerHTML = "Address should be less than 300";
        document.getElementById("address").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("addressval").innerHTML = "";
        document.getElementById("address").style.border = "none";
        return true;
    }
}

function companyvalidation(companyname){
    if (companyname.length !== 0) {
        const pattern = /^(?![\s])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
        if (companyname.length > 0) {
            if (companyname[0] === " ") {
                document.getElementById("companynameval").innerHTML = "No spaces at start";
                document.getElementById("companyname").style.border = "2px solid red";
                return false;
            } else if (!pattern.test(companyname)) {
                document.getElementById("companynameval").innerHTML = "Company name should contain only letters and single spaces";
                document.getElementById("companyname").style.border = "2px solid red";
                return false;
            }
            else if (companyname.length > 20) {
                document.getElementById("companynameval").innerHTML = "Company name should be less than 50 character";
                document.getElementById("companyname").style.border = "2px solid red";
                return false;
            } else {
                document.getElementById("companynameval").innerHTML = "";
                document.getElementById("companyname").style.border = "none";
                return true;
            }
        }
    } else if (companyname.length == 0 && flagcompany===false) {
        document.getElementById("companynameval").innerHTML = "Company name  is empty";
        document.getElementById("companyname").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("companynameval").innerHTML = "";
        document.getElementById("companyname").style.border = "none";
        return true;
    }
}

function datevalidation(date){

    let selectedDate = new Date(date);
    let currentDate = new Date();
    if(!date && flagcompany===false){
        document.getElementById("dateval").innerHTML = "date is empty";
            document.getElementById("date").style.border = "2px solid red";
            return false

        }else if(selectedDate > currentDate){
            document.getElementById("dateval").innerHTML = "Establish date is in future";
            document.getElementById("date").style.border = "2px solid red";
            return false
        }
        else{
            document.getElementById("dateval").innerHTML = "";
            document.getElementById("date").style.border = "";
            return true
        }

}
function val(id,partno,name,size,checkedValues,desc,weight,companyname,address,date,counter){
   
   
    if(idvalidation(id) && partnovalidation(partno) && namevalidation(name) && descvalidation(desc) && countervalidation(counter) && checkvalidation(checkedValues)){
        
        if(flagcompany){
            if(companyvalidation(companyname) && datevalidation(date) && addressvalidation(address)){

                return true
            }
        }
        else if(flag){
            if(weightvalidation(weight)){
                return true

            }
        }
        else if(flag && flagcompany){
            if(companyvalidation(companyname) && datevalidation(date) && addressvalidation(address) && weightvalidation(weight)){

                return true
            }
        }
        else{
            return true
        }
    }

}

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
    let existingData = JSON.parse(localStorage.getItem('myJSON1')) || {}; // Retrieve existing data or initialize as empty object
    if (existingData[counter]) {
        existingData[counter] = [...existingData[counter], obj];
    } else {
        existingData[counter] = [obj];
    }
    localStorage.setItem('myJSON1', JSON.stringify(existingData));
    console.log(existingData);
    printData(existingData);
    reset()
 


   
    
}
function edit() {
    document.getElementById("edittable").style.display="inline-block"
    document.getElementById("pcounter").disabled=true;
    document.getElementById("pcounter").style.backgroundColor="grey";
    document.getElementById("pcounter").style.cursor="no-drop";
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
    let index = -1;
    let count;
    let e = document.getElementById("editparticular").value;
    let JSON2 = JSON.parse(localStorage.getItem("myJSON1"));
    
    for (let key in JSON2) {
        for (let i = 0; i < JSON2[key].length; i++) {
            if (JSON2[key][i].name === e) {
                index = i;
                count = key;
                break;
            }
        }
        if (index !== -1) {
            break;
        }
    }
    
    if (index === -1) {
        alert("Item not found");
    } else {
        // Call your editparticular function here with index and count
        editparticular(index, count);
    }
}

function editparticular2(){
    console.log("h1")
    let index = -1;
    let count;
    let e = document.getElementById("editparticular1").value;
    let JSON2 = JSON.parse(localStorage.getItem("myJSON1"));
    
    for (let key in JSON2) {
        for (let i = 0; i < JSON2[key].length; i++) {
            if (JSON2[key][i].id === e) {
                index = i;
                count = key;
                break;
            }
        }
        if (index !== -1) {
            break;
        }
    }
    
    if (index === -1) {
        alert("Item not found");
    } else {
        // Call your editparticular function here with index and count
        editparticular(index, count);
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
    document.getElementById("form").style.display="flex"
    document.getElementById("edittable").style.display="none"
    document.getElementById("editbtn").style.display="inline-block"
    document.getElementById("editinput").style.display="none"

    
    document.getElementById("editbtn1").style.display="none"
    document.getElementById("editbtn2").style.display="none"
    document.getElementById("editbtn3").innerText = "Add Weight";



}
function UpdateProduct(index, id, partno, name, size, color,desc,weight,companyname,address,date) {
    let JSON2 = JSON.parse(localStorage.getItem("myJSON1"));
    let counter=document.getElementById("pcounter").value;
    console.log(counter)
    console.log(index)
    JSON2[counter][index].id= id;
    JSON2[counter][index].partno = partno;
    JSON2[counter][index].name = name;
    JSON2[counter][index].desc = desc;
    JSON2[counter][index].weight = weight;
    JSON2[counter][index].details.companyname = companyname;
    JSON2[counter][index].details.address = address;
    JSON2[counter][index].details.establishDate = new Date(date);
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkedValues = [...checked].map(c => c.value).join(' ');
    JSON2[counter][index].size=document.querySelector('input[type="radio"]:checked').value;
    JSON2[counter][index].color=checkedValues
    

    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("submit").innerText = "Add";
    localStorage.setItem("myJSON1",JSON.stringify(JSON2))
    printData(JSON2);
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

    existid=false;
    existname=false;
    document.getElementById("idval").innerHTML = "";
    document.getElementById("partval").innerHTML = "";
    document.getElementById("nameval").innerHTML = "";
    document.getElementById("descval").innerHTML = "";
    document.getElementById("edit").innerHTML = "";

    document.getElementById("pid").style.border="none";
    document.getElementById("partNo").style.border="none";
    document.getElementById("name").style.border="none";
    document.getElementById("desc").style.border="none";
    editIndex=-1
    document.getElementById("form").style.display="flex"
    document.getElementById("weightinput").style.display="none"
    document.getElementById("deletable").style.display="none"
    document.getElementById("disname").style.display="none"
    document.getElementById("disid").style.display="none"
    document.getElementById("editbtn3").innerText="Add Weight"
    document.getElementById("Companytable").style.display="none"
    document.getElementById("editbtn4").innerText="Add details"
    document.getElementById("pcounter").disabled=false;
    document.getElementById("pcounter").style.backgroundColor="rgb(34, 33, 33)";
    document.getElementById("pcounter").style.cursor="auto";
    flag=true;
    flagcompany=true;
    document.getElementById("companyname").value="";
        document.getElementById("address").value="";
        document.getElementById("date").value=""
    document.querySelector('input[type="radio"][value="small"]').checked = true;
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
function sort() {
    let sort = document.getElementById("sortvalue").value;
    let sortdata = Object.values(JSON1).reduce((acc, val) => acc.concat(val), []);
    console.log(sortdata);

    switch (sort) {
        case "partIdSortup":
            sortdata.sort((a, b) => b.id - a.id);
            console.log("partIdSortup")
            break;
        case "partIdSortdown":
            sortdata.sort((a, b) => a.id - b.id);
            console.log("partIdSortdown")
            break;
        case "partNoSortup":
            sortdata.sort((a, b) => b.partno - a.partno);
            break;
        case "partNoSortdown":
            sortdata.sort((a, b) => a.partno - b.partno);
            break;
        case "partNameSort":
            sortdata.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "Date":
            sortdata.sort((a, b) => new Date(a.details.date) - new Date(b.details.date));
            break;
        case "Namelength":
            sortdata.sort((a, b) => {
                if (a.details.companyname.length < b.details.companyname.length || a.details.companyname === "NA") {
                    return -1;
                }
                if (a.details.companyname.length > b.details.companyname.length || b.details.companyname === "NA") {
                    return 1;
                }
                return 0;
            });
            break;
    }
    printsorted(sortdata);
}
function printsorted(data){
    document.getElementById("resetdata").style.display="inline-block"
    console.log(data)
    console.log("hii")
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let tr = "<tr>";
        tr += "<td>" + (i+1)+ "</td>";
        tr += "<td>" + data[i].id + "</td>";
        tr += "<td>" + data[i].partno + "</td>";
        tr += "<td>" + data[i].name + "</td>";
        tr += "<td>" + data[i].size + "</td>";
        tr += "<td>" + data[i].color + "</td>";
        tr += "<td>" + data[i].desc + "</td>";
        if(data[i].weight===0 || data[i].weight===""){

            tr += "<td>" + "-" + "</td>";
        }
        else{
            tr += "<td>" + data[i].weight + "</td>";

        }
        if(data[i].details.companyname==="NA" || data[i].details.companyname===""){
            tr += "<td>" + "-" + "</td>";
        }
        else{
            tr += "<td>" + "Name:"+data[i].details.companyname+"<br><br>"+"Address:"+data[i].details.address+"<br><br>"+"Date:"+data[i].details.establishDate+ "</td>";
            
        }

        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}
function resetdata(){
    document.getElementById("resetdata").style.display="none"

    printData(JSON1)
}
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
document.getElementById("form").style.display="flex"
document.getElementById("deletable").style.display="none"
document.getElementById("edittable").style.display="none"
document.getElementById("deletebtn").style.display="inline-block"
document.getElementById("deleteinput").style.display="none"
document.getElementById("editbtn").style.display="inline-block"
document.getElementById("editinput").style.display="none"

}
