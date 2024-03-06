;
var arr = [];
var productid = 0;
var editIndex = -1;
function ReadProduct() {
    var name = document.getElementById("name");
    var quant = document.getElementById("Quant");
    var price = document.getElementById("price");
    var sku = document.getElementById("SDK");
    var desc = document.getElementById("desc");
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
    var existdata = arr.some(function (item, index) { return index !== editIndex && item.name.toLowerCase() === name.toLowerCase(); });
    var nameval = document.getElementById("nameval");
    var namevalue = document.getElementById("name");
    if (name.length !== 0) {
        var pattern = /^(?![\s])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
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
    var quantval = document.getElementById("quantval");
    var quantvalue = document.getElementById("Quant");
    var pattern1 = /^(?!0)\d+$/;
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
    var priceval = document.getElementById("priceval");
    var pricevalue = document.getElementById("price");
    var pattern1 = /^(?!0)\d+$/;
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
    var existSDK = arr.some(function (item, index) { return index !== editIndex && String(item.sku).toLowerCase() === sku.toLowerCase(); });
    var skuval = document.getElementById("SKUval");
    var skuvalue = document.getElementById("SDK");
    var pattern2 = /^[a-zA-Z0-9](?:[a-zA-Z0-9]{0,4})$/;
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
    var descval = document.getElementById("descval");
    var descvalue = document.getElementById("desc");
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
    var obj = {
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
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var tr = "<tr>";
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
    var name1 = document.getElementById("name");
    name1.value = "";
    var quant1 = document.getElementById("Quant");
    quant1.value = "";
    var price1 = document.getElementById("price");
    price1.value = "";
    var SDK1 = document.getElementById("SDK");
    SDK1.value = "";
    var desc1 = document.getElementById("desc");
    desc1.value = "";
    var submit = document.getElementById("submit");
    submit.innerText = "Add";
    var reset = document.getElementById("reset");
    reset.style.display = "inline-block";
    var nameval = document.getElementById("nameval");
    nameval.innerHTML = "";
    var quantval = document.getElementById("quantval");
    quantval.innerHTML = "";
    var priceval = document.getElementById("priceval");
    priceval.innerHTML = "";
    var skuval = document.getElementById("SDK");
    skuval.innerHTML = "";
    var descval = document.getElementById("desc");
    descval.innerHTML = "";
    name1.style.border = "none";
    quant1.style.border = "none";
    price1.style.border = "none";
    SDK1.style.border = "none";
    desc1.style.border = "none";
    var edit1 = document.getElementById("edit");
    edit1.innerHTML = "";
    editIndex = -1;
}
function edit(index) {
    var name = document.getElementById("name");
    var quant = document.getElementById("Quant");
    var price = document.getElementById("price");
    var sku = document.getElementById("SDK");
    var desc = document.getElementById("desc");
    var submit = document.getElementById("submit");
    var obj = arr[index];
    name.value = obj.name;
    quant.value = String(obj.quant);
    price.value = String(obj.price);
    sku.value = String(obj.sku);
    desc.value = obj.desc;
    submit.innerText = "Update";
    var reset1 = document.getElementById("reset");
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
    var reset1 = document.getElementById("reset");
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
    var search = document.getElementById("search");
    var search1 = search.value.trim();
    if (search1.length > 0) {
        var filterdata = arr.filter(function (filter) { return String(filter.name).toLowerCase().includes(String(search1).toLowerCase()); });
        if (filterdata.length > 0) {
            printData(filterdata);
        }
        else {
            var tbody = document.getElementById("tbody");
            tbody.innerHTML = "No data";
        }
    }
    else {
        printData(arr);
    }
}
// export {}
