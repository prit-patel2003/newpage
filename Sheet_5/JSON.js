let JSON1=[]
let flag=true;
let searchdata="id"
let editIndex=-1;
let flagcompany=true;
function Read(){
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
    

    if(val(id,partno,name,size,checkedValues,desc,weight,companyname,address,date)){
        if(editIndex===-1){
            add(id,partno,name,size,checkedValues,desc,weight,companyname,address,date)
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

  
}
function deletename(){
    document.getElementById("deletebtn").style.display="none"
    document.getElementById("deleteinput").style.display="inline-block"
    document.getElementById("disname").style.display="inline-block"
    document.getElementById("disid").style.display="none"
   


}
function deleteid(){
    document.getElementById("deletebtn").style.display="none"
    document.getElementById("deleteinput").style.display="inline-block"
    document.getElementById("disname").style.display="none"
    document.getElementById("disid").style.display="inline-block"
}
function deleteparticular(){
    let d=document.getElementById("inputparticular").value

    let index=JSON1.findIndex((item)=>item.name===d || item.id===d)
    if (confirm("Are you sure you want to delete the data") == true) {
        JSON1.splice(index, 1);
        reset()
        printData(JSON1);
        }
    document.getElementById("deletable").style.display="none"
    document.getElementById("deleteinput").style.display="none"
    document.getElementById("deletebtn").style.display="inline-block"
    document.getElementById("inputparticular").value=""
    
    
}
function val(id,partno,name,size,checkedValues,desc,weight,companyname,address,date){
    


    let add=false;
    let add1=false;
    let add2=false;
    let add3=false;
    
    
    let existproductid = JSON1.some((item, index) => index !== editIndex && item.id === id);
    let existdata= JSON1.some((item, index) => index !== editIndex && item.name.toLowerCase() === name.toLowerCase());
    console.log(existdata)
    console.log(existproductid)


    const pattern1 = /^(?!0\d)\d+$/;
    if (!pattern1.test(String(id))) {
        if (id < 0) {
            document.getElementById("idval").innerHTML = "Product id cannot be negative";
            document.getElementById("pid").style.border = "2px solid red";
            add = false;
        } 
        
        
        else {
            document.getElementById("idval").innerHTML = "Product id cannot be zero or start with zero or have special characters";
            document.getElementById("pid").style.border = "2px solid red";
            add = false;
        }
    }
     else if(existproductid){
        document.getElementById("idval").innerHTML = "Product id already exist";
        document.getElementById("pid").style.border = "2px solid red";
        add = false;}
    else if (id >= 10000) {
        document.getElementById("idval").innerHTML = "Product id should be less than 10000";
        document.getElementById("pid").style.border = "2px solid red";
        add = false;
    } else {
        document.getElementById("idval").innerHTML = "";
        document.getElementById("pid").style.border = "none";
        add = true;
    }

    if (!pattern1.test(String(partno))) {
        if (partno < 0) {
            document.getElementById("partval").innerHTML = "Product partno cannot be negative";
            document.getElementById("partNo").style.border = "2px solid red";
            add1 = false;
        } else {
            document.getElementById("partval").innerHTML = "Product partno cannot be zero or start with zero or have special characters";
            document.getElementById("partNo").style.border = "2px solid red";
            add1 = false;
        }
    } else if (partno >= 10000) {
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
        const pattern = /^(?![\s])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
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
             else if (existdata) {
                document.getElementById("nameval").innerHTML = "Data already exist";
                document.getElementById("name").style.border = "2px solid red";
                add2 = false;
            }
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
        add3 = false;
    } else if (address.length >= 300) {
        document.getElementById("addressval").innerHTML = "Address should be less than 300";
        document.getElementById("address").style.border = "2px solid red";
        add3 = false;
    } else {
        document.getElementById("addressval").innerHTML = "";
        document.getElementById("address").style.border = "none";
        add3 = true;
    }

    if (companyname.length !== 0) {
        const pattern = /^(?![\s])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
        if (companyname.length > 0) {
            if (companyname[0] === " ") {
                document.getElementById("companynameval").innerHTML = "No spaces at start";
                document.getElementById("companyname").style.border = "2px solid red";
                add2 = false;
            } else if (!pattern.test(companyname)) {
                document.getElementById("companynameval").innerHTML = "Company name should contain only letters and single spaces";
                document.getElementById("companyname").style.border = "2px solid red";
                add2 = false;
            }
            else if (companyname.length > 20) {
                document.getElementById("companynameval").innerHTML = "Company name should be less than 50 character";
                document.getElementById("companyname").style.border = "2px solid red";
                add2 = false;
            } else {
                document.getElementById("companynameval").innerHTML = "";
                document.getElementById("companyname").style.border = "none";
                add2 = true;
            }
        }
    } else if (companyname.length == 0 && flagcompany===false) {
        document.getElementById("companynameval").innerHTML = "Company name  is empty";
        document.getElementById("companyname").style.border = "2px solid red";
        add2 = false;
    } else {
        document.getElementById("companynameval").innerHTML = "";
        document.getElementById("companyname").style.border = "none";
        add2 = true;
    }
    let selectedDate = new Date(date);
    let currentDate = new Date();
    if(!date && flagcompany===false){
        document.getElementById("dateval").innerHTML = "date is empty";
            document.getElementById("date").style.border = "2px solid red";
            add2=false

        }else if(selectedDate > currentDate){
            document.getElementById("dateval").innerHTML = "Establish date is in future";
            document.getElementById("date").style.border = "2px solid red";
            add2=false
        }
        else{
            document.getElementById("dateval").innerHTML = "";
            document.getElementById("date").style.border = "";
            add2=true
        }

    
    if(add && add1 && add2 && add3){
        return true
    }

}
function add(id,partno,name,size,checkedValues,desc,weight,companyname,address,date){
    let details=[]
    if(weight===""){
        weight=0
    }
    if(companyname!="" && address!="" && date!=""){
        details.push(companyname)
        details.push(address)
        details.push(new Date(date))
    }
    else{
        details.push("NA")

    }
 
    let obj={
        "id":id,
        "partno":partno,
        "name":name,
        "size":size,
        "color":checkedValues,
        "desc":desc,
        "weight":weight,
        "details":details

    }
    JSON1.push(obj);
    
    console.log(JSON1)
    printData(JSON1);
  reset()
}
function edit() {
    document.getElementById("edittable").style.display="inline-block"
    document.getElementById("form").style.display="none"
    document.getElementById("editbtn3").innerText = "Update Weight";
    document.getElementById("Companytable").style.display="none"


}
function editname(){
 document.getElementById("editbtn").style.display="none"
    document.getElementById("editinput").style.display="inline-block"
    document.getElementById("editname").style.display="inline-block"
    document.getElementById("editid").style.display="none"
}
function editid(){
    document.getElementById("editbtn").style.display="none"
    document.getElementById("editinput").style.display="inline-block"
    document.getElementById("editname").style.display="none"
    document.getElementById("editid").style.display="inline-block"
}
function editparticular(){
    let e=document.getElementById("editparticular").value;
    let index=JSON1.findIndex((item)=>item.name===e || item.id===e)
    let obj = JSON1[index];
    document.getElementById("pid").value = obj.id;
    document.getElementById("partNo").value = obj.partno;
    document.getElementById("name").value = obj.name;
    document.getElementById("desc").value = obj.desc;
    if(obj.details[0]==="NA"){

        document.getElementById("companyname").value="";
        document.getElementById("address").value="";
        document.getElementById("date").value="";
    }
    else{
        document.getElementById("companyname").value=obj.details[0];
        document.getElementById("address").value=obj.details[1];
        document.getElementById("date").value=obj.details[2].toISOString().substring(0, 10);
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

    // Handle radio button
    document.querySelector('input[type="radio"][value="' + obj.size.toLowerCase() + '"]').checked = true;
    // Handle checkboxes
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    obj.color.split(" ").forEach(color => {
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
    console.log(weight)
    JSON1[index].id= id;
    JSON1[index].partno = partno;
    JSON1[index].name = name;
    JSON1[index].desc = desc;
    JSON1[index].weight = weight;
    JSON1[index].details[0] = companyname;
    JSON1[index].details[1] = address;
    JSON1[index].details[2] = new Date(date);
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkedValues = [...checked].map(c => c.value).join(' ');
    JSON1[index].size=document.querySelector('input[type="radio"]:checked').value;
    JSON1[index].color=checkedValues
    

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
    for (let i = 0; i < JSON1.length; i++) {
        let tr = "<tr>";
        tr += "<td>" + (i+1)+ "</td>";
        tr += "<td>" + JSON1[i].id + "</td>";
        tr += "<td>" + JSON1[i].partno + "</td>";
        tr += "<td>" + JSON1[i].name + "</td>";
        tr += "<td>" + JSON1[i].size + "</td>";
        tr += "<td>" + JSON1[i].color + "</td>";
        tr += "<td>" + JSON1[i].desc + "</td>";
        
        if(JSON1[i].weight===0 || JSON1[i].weight===""){

            tr += "<td>" + "-" + "</td>";
        }
        else{
            tr += "<td>" + JSON1[i].weight + "</td>";

        }
        if(JSON1[i].details[0]==="NA" || JSON1[i].details[0]===""){
            tr += "<td>" + "-" + "</td>";
        }
        else{
            tr += "<td>" + "Name:"+JSON1[i].details[0]+"<br><br>"+"Address:"+JSON1[i].details[1]+"<br><br>"+"Date:"+JSON1[i].details[2]+ "</td>";
            
        }

        tr += "</tr>";
        tbody.innerHTML += tr;
    }
    document.getElementById("weightinput").style.display="none"

}
function search(){
    let search=document.getElementById("search").value.trim().toLowerCase()
    if(search.length>0){
        let filterdata=JSON1.filter((item)=>{
            return item.name.toLowerCase().includes(search.toLowerCase()) || item.id.includes(search);    
        });
        if (filterdata.length > 0) {
            printData(filterdata);
        } else {
            document.getElementById("tbody").innerHTML="No data"
        }
    }
    else {
        printData(JSON1);
    }
}
function sort() {
    let sort = document.getElementById("sortvalue").value;
    switch (sort) {
        case "partIdSortup":
            JSON1.sort((a, b) => b.id - a.id);
            break;
        case "partIdSortdown":
            JSON1.sort((a, b) => a.id - b.id);
            break;
        case "partNoSortup":
            JSON1.sort((a, b) => b.partno - a.partno);
            break;
        case "partNoSortdown":
            JSON1.sort((a, b) => a.partno - b.partno);
            break;
        case "partNameSort":
            JSON1.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "Date":
            JSON1.sort((a, b) => new Date(a.details[2]) - new Date(b.details[2]));
            break;
        case "Namelength":
            JSON1.sort((a, b) => {
                if (a.details[0].length < b.details[0].length || a.details[0] === "NA") {
                    return -1;
                }
                if (a.details[0].length > b.details[0].length || b.details[0] === "NA") {
                    return 1;
                }
                return 0;
            });
            break;
    }
    // Move rows with details[0] as "NA" to the end
    // JSON1.sort((a, b) => (a.details[0] === "NA") - (b.details[0] === "NA"));
    printData(JSON1);
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
