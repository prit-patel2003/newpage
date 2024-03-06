"use strict";
;
const arr = [];
let productid = 0;
let editIndex = -1;
function ReadProduct() {
    let name = document.getElementById("name");
    let quant = document.getElementById("Quant");
    let price = document.getElementById("price");
    let sku = document.getElementById("SDK");
    let desc = document.getElementById("desc");
    if (namevalidation(name.value) && quantvalidation(quant.value) && pricevalidation(price.value) && skuvalidation(sku.value) && descvalidation(desc.value)) {
        if (editIndex === -1) {
            add(productid, name.value, parseInt(quant.value), parseInt(price.value), sku.value, desc.value);
        }
        else {
            UpdateProduct(editIndex, name.value, parseInt(quant.value), parseInt(price.value), sku.value, desc.value);
        }
    }
    else {
    }
}
function namevalidation(name) {
    let existdata = arr.some((item, index) => index !== editIndex && item.name.toLowerCase() === name.toLowerCase());
    let nameval = document.getElementById("nameval");
    let namevalue = document.getElementById("name");
    if (name.length !== 0) {
        const pattern = /^(?![\s])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
        if (name.length > 0) {
            if (name[0] === " ") {
                nameval.innerHTML = "No spaces at start";
                namevalue.style.border = "2px solid red";
                return false;
            }
            else if (!pattern.test(name)) {
                nameval.innerHTML = "Name should contain only letters and single spaces";
                namevalue.style.border = "2px solid red";
                return false;
            }
            else if (existdata) {
                nameval.innerHTML = "Data already exist";
                namevalue.style.border = "2px solid red";
                return false;
            }
            else if (name.length > 50) {
                nameval.innerHTML = "Name should be less than 50 character";
                namevalue.style.border = "2px solid red";
                return false;
            }
            else {
                nameval.innerText = "";
                namevalue.style.border = "none";
                return true;
            }
        }
    }
    else if (name.length == 0) {
        nameval.innerHTML = "Product quantity is empty";
        namevalue.style.border = "2px solid red";
        return false;
    }
    else {
        nameval.innerHTML = "";
        namevalue.style.border = "none";
        return true;
    }
}
function quantvalidation(quant) {
    let quantval = document.getElementById("quantval");
    let quantvalue = document.getElementById("Quant");
    const pattern1 = /^(?!0)\d+$/;
    if (quant === "") {
        quantval.innerHTML = "Product partno cannot be empty";
        quantvalue.style.border = "2px solid red";
        return false;
    }
    else if (!pattern1.test(quant)) {
        quantval.innerHTML = "Product partno cannot start with zero";
        quantvalue.style.border = "2px solid red";
        return false;
    }
    else if (parseInt(quant) >= 10000) {
        quantval.innerHTML = "Product partno should be less than 10000";
        quantvalue.style.border = "2px solid red";
        return false;
    }
    else {
        quantval.innerHTML = "";
        quantvalue.style.border = "none";
        return true;
    }
}
function pricevalidation(price) {
    let priceval = document.getElementById("priceval");
    let pricevalue = document.getElementById("price");
    const pattern1 = /^(?!0)\d+$/;
    if (price === "") {
        priceval.innerHTML = "Product partno cannot be empty";
        pricevalue.style.border = "2px solid red";
        return false;
    }
    else if (!pattern1.test(price)) {
        priceval.innerHTML = "Product partno cannot start with zero";
        pricevalue.style.border = "2px solid red";
        return false;
    }
    else if (parseInt(price) >= 10000) {
        priceval.innerHTML = "Product partno should be less than 10000";
        pricevalue.style.border = "2px solid red";
        return false;
    }
    else {
        priceval.innerHTML = "";
        pricevalue.style.border = "none";
        return true;
    }
}
function skuvalidation(sku) {
    let existSDK = arr.some((item, index) => index !== editIndex && String(item.sku).toLowerCase() === sku.toLowerCase());
    let skuval = document.getElementById("SKUval");
    let skuvalue = document.getElementById("SDK");
    const pattern2 = /^[a-zA-Z0-9](?:[a-zA-Z0-9]{0,4})$/;
    if (sku.length === 0) {
        skuval.innerHTML = "Product SKU is empty";
        skuvalue.style.border = "2px solid red";
        return false;
    }
    else if (!pattern2.test(sku)) {
        skuval.innerHTML = "Product SKU should be less than 5 and should not contain spaces";
        skuvalue.style.border = "2px solid red";
        return false;
    }
    else if (existSDK) {
        skuval.innerHTML = "SKU already exist";
        skuvalue.style.border = "2px solid red";
        return false;
    }
    else {
        skuval.innerHTML = "";
        skuvalue.style.border = "none";
        return true;
    }
}
function descvalidation(desc) {
    let descval = document.getElementById("descval");
    let descvalue = document.getElementById("desc");
    if (desc.length === 0) {
        descval.innerHTML = "Product desc is empty";
        descvalue.style.border = "2px solid red";
        return false;
    }
    else if (desc.length >= 300) {
        descval.innerHTML = "Product desc should be less than 300";
        descvalue.style.border = "2px solid red";
        return false;
    }
    else {
        descval.innerHTML = "";
        descvalue.style.border = "none";
        return true;
    }
}
function add(productid, name, quant, price, sku, desc) {
    let obj = {
        productid: productid,
        name: name,
        quant: quant,
        price: price,
        sku: sku,
        desc: desc
    };
    arr.push(obj);
    console.log(arr);
    printData(arr);
    reset();
}
function printData(arr) {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + arr[i].name + "</td>";
        tr += "<td>" + arr[i].quant + "</td>";
        tr += "<td>" + arr[i].price + "</td>";
        tr += "<td>" + arr[i].sku + "</td>";
        tr += "<td>" + arr[i].desc + "</td>";
        tr += "<td><button onclick='edit(" + i + ")'>Edit</button> <button onclick='Delete(" + i + ")'>Delete</button></td>";
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
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
    let submit = document.getElementById("submit");
    submit.innerText = "Add";
    let reset = document.getElementById("reset");
    reset.style.display = "inline-block";
    let nameval = document.getElementById("nameval");
    nameval.innerHTML = "";
    let quantval = document.getElementById("quantval");
    quantval.innerHTML = "";
    let priceval = document.getElementById("priceval");
    priceval.innerHTML = "";
    let skuval = document.getElementById("SDK");
    skuval.innerHTML = "";
    let descval = document.getElementById("desc");
    descval.innerHTML = "";
    name1.style.border = "none";
    quant1.style.border = "none";
    price1.style.border = "none";
    SDK1.style.border = "none";
    desc1.style.border = "none";
    let edit1 = document.getElementById("edit");
    edit1.innerHTML = "";
    editIndex = -1;
}
function edit(index) {
    let name = document.getElementById("name");
    let quant = document.getElementById("Quant");
    let price = document.getElementById("price");
    let sku = document.getElementById("SDK");
    let desc = document.getElementById("desc");
    let submit = document.getElementById("submit");
    let obj = arr[index];
    name.value = obj.name;
    quant.value = String(obj.quant);
    price.value = String(obj.price);
    sku.value = String(obj.sku);
    desc.value = obj.desc;
    submit.innerText = "Update";
    let reset1 = document.getElementById("reset");
    reset1.style.display = "none";
    if (editIndex === index) {
        editIndex = -1;
    }
    else {
        editIndex = index;
    }
}
function UpdateProduct(index, name, quant, price, sku, desc) {
    console.log(name);
    console.log(sku);
    console.log(desc);
    arr[index].name = name;
    arr[index].quant = quant;
    arr[index].price = price;
    arr[index].sku = sku;
    arr[index].desc = desc;
    let reset1 = document.getElementById("reset");
    reset1.style.display = "inline-block";
    printData(arr);
    reset();
}
function Delete(index) {
    if (confirm("Are you sure you want to delete the data") == true) {
        arr.splice(index, 1);
        reset();
        printData(arr);
    }
}
function search() {
    let search = document.getElementById("search");
    let search1 = search.value.trim();
    if (search1.length > 0) {
        let filterdata = arr.filter(filter => String(filter.name).toLowerCase().includes(String(search1).toLowerCase()));
        if (filterdata.length > 0) {
            printData(filterdata);
        }
        else {
            let tbody = document.getElementById("tbody");
            tbody.innerHTML = "No data";
        }
    }
    else {
        printData(arr);
    }
}
