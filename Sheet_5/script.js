let arr = [];
let productid = 0;
let flag = true;
let editIndex = -1;


function ReadProduct() {
    productid = productidchanger(productid);
    let name = document.getElementById("name").value;
    let quant = document.getElementById("Quant").value;
    let price = document.getElementById("price").value;
    let SDK = document.getElementById("SDK").value;
    let desc = document.getElementById("desc").value;
    val(name, quant, price, SDK, desc);
}

function val(name, quant, price, SDK, desc) {
    let add1 = true;
    let add2 = true;
    let add3 = true;
    let add4 = true;
    let add5 = true;
    let add6 = true;
    let existdata = arr.some((item, index) => index !== editIndex && item.Product_name.toLowerCase() === name.toLowerCase());
    let existSDK = arr.some((item, index) => index !== editIndex && item.SDK.toLowerCase() === SDK.toLowerCase());
    console.log(existSDK)
    console.log(existdata)

 
   

    if (name.length !== 0) {
        const pattern = /^(?![\s])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
        if (name.length > 0) {
            if (name[0] === " ") {
                document.getElementById("nameval").innerHTML = "No spaces at start";
                document.getElementById("name").style.border = "2px solid red";
                add1 = false;
            } else if (!pattern.test(name)) {
                document.getElementById("nameval").innerHTML = "Name should contain only letters and single spaces";
                document.getElementById("name").style.border = "2px solid red";
                add1 = false;
                
            }    else if (existdata) {
                document.getElementById("nameval").innerHTML = "Data already exist";
                document.getElementById("name").style.border = "2px solid red";
                add1 = false;
            }
            else if (name.length > 50) {
                document.getElementById("nameval").innerHTML = "Name should be less than 50 character";
                document.getElementById("name").style.border = "2px solid red";
                add1 = false;
            } else {
                document.getElementById("nameval").innerHTML = "";
                document.getElementById("name").style.border = "none";
                add1 = true;
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

    const pattern1 = /^(?!0\d)\d+$/;
    if (!pattern1.test(String(quant))) {
        if (quant < 0) {
            document.getElementById("quantval").innerHTML = "Product quantity cannot be negative";
            document.getElementById("Quant").style.border = "2px solid red";
            add3 = false;
        } else {
            document.getElementById("quantval").innerHTML = "Product quantity cannot be zero or start with zero or have special characters";
            document.getElementById("Quant").style.border = "2px solid red";
            add3 = false;
        }
    } else if (quant >= 10000) {
        document.getElementById("quantval").innerHTML = "Product quantity should be less than 10000";
        document.getElementById("Quant").style.border = "2px solid red";
        add3 = false;
    } else {
        document.getElementById("quantval").innerHTML = "";
        document.getElementById("Quant").style.border = "none";
        add3 = true;
    }

    if (!pattern1.test(String(price))) {
        if (price < 0) {
            document.getElementById("priceval").innerHTML = "Product price cannot be negative";
            document.getElementById("price").style.border = "2px solid red";
            add3 = false;
        } else {
            document.getElementById("priceval").innerHTML = "Product price cannot be zero or start with zero or have special characters";
            document.getElementById("price").style.border = "2px solid red";
            add3 = false;
        }
    } else if (price >= 100000) {
        document.getElementById("priceval").innerHTML = "Product quantity should be less than 100000";
        document.getElementById("price").style.border = "2px solid red";
        add3 = false;
    } else {
        document.getElementById("priceval").innerHTML = "";
        document.getElementById("price").style.border = "none";
        add3 = true;
    }

    const pattern2 = /^[a-zA-Z0-9](?:[a-zA-Z0-9]{0,4})$/;
    if (SDK.length === 0) {
        document.getElementById("SKUval").innerHTML = "Product SKU is empty";
        document.getElementById("SDK").style.border = "2px solid red";
        add5 = false;
    } else if (!pattern2.test(SDK)) {
        document.getElementById("SKUval").innerHTML = "Product SKU should be less than 5 and should not contain spaces";
        document.getElementById("SDK").style.border = "2px solid red";
        add5 = false;
    } else if (existSDK) {
        document.getElementById("SKUval").innerHTML = "SKU already exist";
        document.getElementById("SDK").style.border = "2px solid red";
        add5 = false;
    } else {
        document.getElementById("SKUval").innerHTML = "";
        document.getElementById("SDK").style.border = "none";
        add5 = true;
    }

    if (desc.length === 0) {
        document.getElementById("descval").innerHTML = "Product desc is empty";
        document.getElementById("desc").style.border = "2px solid red";
        add6 = false;
    } else if (desc.length >= 300) {
        document.getElementById("descval").innerHTML = "Product desc should be less than 300";
        document.getElementById("desc").style.border = "2px solid red";
        add6 = false;
    } else {
        document.getElementById("descval").innerHTML = "";
        document.getElementById("desc").style.border = "none";
        add6 = true;
    }

    if (add1 && add2 && add3 && add4 && add5 && add6) {
        if (editIndex === -1) {
            AddProduct(productid, name, quant, price, SDK, desc);
        } else {
            
            UpdateProduct(editIndex, name, quant, price, SDK, desc);
        }
        }
    }

function alreadyexist(index){
    console.log("already exist "+index)
}

function productidchanger(productid) {
    return productid + 1;
}

function AddProduct(productid, name, quant, price, SDK, desc) {
    let obj = {
        "productid": productid,
        "Product_name": name,
        "quant": quant,
        "price": price,
        "SDK": SDK,
        "desc":desc
    };

    arr.push(obj);
    console.log(arr);
    printData(arr);
    reset();
}

function reset() {
    let name1 = document.getElementById("name");
    name1.value = "";
    let quant1 = document.getElementById("Quant");
    quant1.value = "";
    let price1 = document.getElementById("price");
    price1.value = "";
    let SDK1 = document.getElementById("SDK");
    SDK1.value = "";
    let desc1 = document.getElementById("desc");
    desc1.value = "";
    document.getElementById("submit").innerText = "Add";
    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("nameval").innerHTML=""
    document.getElementById("quantval").innerHTML=""
    document.getElementById("priceval").innerHTML=""
    document.getElementById("SKUval").innerHTML=""
    document.getElementById("desc").innerHTML=""
    document.getElementById("name").style.border = "none";
    document.getElementById("Quant").style.border = "none";
    document.getElementById("price").style.border = "none";
    document.getElementById("SDK").style.border = "none";
    document.getElementById("desc").style.border = "none";
    document.getElementById("edit").innerHTML = "";


    editIndex = -1;
}

function printData(arr) {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let tr = "<tr>";
        tr += "<td>" + (i+1)+ "</td>";
        tr += "<td>" + arr[i].Product_name + "</td>";
        tr += "<td>" + arr[i].quant + "</td>";
        tr += "<td>" + arr[i].price + "</td>";
        tr += "<td>" + arr[i].SDK + "</td>";
        tr += "<td>" + arr[i].desc + "</td>";
        tr += "<td><button onclick='edit(" + i + ")'>Edit</button> <button onclick='Delete(" + i + ")'>Delete</button></td>";
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}

function edit(index) {
    let obj = arr[index];
    document.getElementById("name").value = obj.Product_name;
    document.getElementById("Quant").value = obj.quant;
    document.getElementById("price").value = obj.price;
    document.getElementById("SDK").value = obj.SDK;
    document.getElementById("desc").value = obj.desc;
    document.getElementById("submit").innerText = "Update";

    document.getElementById("reset").style.display = "none";

    if (editIndex === index) {
        editIndex = -1;
    } else {
        editIndex = index;
    }
}

function UpdateProduct(index, name, quant, price, SDK, desc) {
    arr[index].Product_name = name;
    arr[index].quant = quant;
    arr[index].price = price;
    arr[index].SDK = SDK;
    arr[index].desc = desc;
    document.getElementById("reset").style.display = "inline-block";

    printData(arr);
    reset();
}

function Delete(index) {
    if (confirm("Are you sure you want to delete the data") == true) {
    arr.splice(index, 1);
    reset()
    printData(arr);
    }
}

function search() {
    let search = document.getElementById("search").value.trim();
    if (search.length > 0) {
        let filterdata = arr.filter(filter => filter.Product_name.toLowerCase().includes(search.toLowerCase()));
        if (filterdata.length > 0) {
            printData(filterdata);
        } else {
            document.getElementById("tbody").innerHTML="No data"
        }
    } else {
        printData(arr);
    }
}
