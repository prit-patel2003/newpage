let JSON1={

    "products":[
      
    ]
}
let searchdata="id"
let editIndex=-1;

function Read(){
    let id=document.getElementById("pid").value;
    let partno=document.getElementById("partNo").value;
    let name=document.getElementById("name").value;
    let size=document.querySelector('input[type="radio"]:checked').value;
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkedValues = [...checked].map(c => c.value).join(' ');
    let desc=document.getElementById("desc").value;
    if(val(id,partno,name,size,checkedValues,desc)){
        if(editIndex===-1){
            console.log("bye")
            add(id,partno,name,size,checkedValues,desc)
        }
        else{
            console.log("update")
            UpdateProduct(editIndex, id, partno, name, size, checkedValues, desc);
            editIndex=-1
        }
    }   


}
function Delete(index){
    if (confirm("Are you sure you want to delete the data") == true) {
        JSON1.products.splice(index, 1);
        reset()
        printData(arr);
        }
}
function val(id,partno,name,size,checkedValues,desc){
    let add=false;
    let add1=false;
    let add2=false;
    let add3=false;
    let existproductid = JSON1.products.some((item, index) => index !== editIndex && item.id === id);
    let existdata= JSON1.products.some((item, index) => index !== editIndex && item.name.toLowerCase() === name.toLowerCase());
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
    if(add && add1 && add2 && add3){
        return true
    }

}
function add(id,partno,name,size,checkedValues,desc){
    let obj={
        "id":id,
        "partno":partno,
        "name":name,
        "size":size,
        "color":checkedValues,
        "desc":desc
    }
    JSON1.products.push(obj);
    printData(JSON1.products);
  reset()
}
function edit(index) {
    let obj = JSON1.products[index];
    document.getElementById("pid").value = obj.id;
    document.getElementById("partNo").value = obj.partno;
    document.getElementById("name").value = obj.name;
    document.getElementById("desc").value = obj.desc;
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
}
function UpdateProduct(index, id, partno, name, size, color,desc) {
    JSON1.products[index].id= id;
    JSON1.products[index].partno = partno;
    JSON1.products[index].name = name;
    JSON1.products[index].desc = desc;
    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("submit").innerText = "Add";
    
    printData(JSON1.products);
    reset();
}
function reset(){
    let id = document.getElementById("pid").value = "";
    let partno = document.getElementById("partNo").value = "";
    let name = document.getElementById("name").value = "";
    let desc = document.getElementById("desc").value = "";
    document.getElementById("idval").innerHTML = "";
    document.getElementById("partval").innerHTML = "";
    document.getElementById("nameval").innerHTML = "";
    document.getElementById("descval").innerHTML = "";
    document.getElementById("pid").style.border="none";
    document.getElementById("partNo").style.border="none";
    document.getElementById("name").style.border="none";
    document.getElementById("desc").style.border="none";
    editIndex=-1



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
    console.log(JSON1)
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

        tr += "<td><button onclick='edit(" + i + ")'>Edit</button> <button onclick='Delete(" + i + ")'>Delete</button></td>";
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}
function search(){
    let search=document.getElementById("search").value.trim().toLowerCase()
    if(search.length>0){
        let filterdata=JSON1.products.filter((item)=>{
            return item.name.toLowerCase().includes(search.toLowerCase()) || item.id.includes(search);    
        });
        if (filterdata.length > 0) {
            printData(filterdata);
        } else {
            document.getElementById("tbody").innerHTML="No data"
        }
    }
    else {
        printData(JSON1.products);
    }
}

