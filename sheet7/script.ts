interface Product  {
    productid: number,
    name: string,
    quant: number,
    price: number,
    sku: number | string,
    desc: string
};

    const arr: Product[] = []; 

    let productid = 0;
    let editIndex = -1;


function ReadProduct():void {
    let name = document.getElementById("name") as HTMLInputElement;
    let quant = document.getElementById("Quant") as HTMLInputElement;
    let price = document.getElementById("price") as HTMLInputElement;
    let sku = document.getElementById("SDK") as HTMLInputElement;
    let desc = document.getElementById("desc") as HTMLTextAreaElement;
    if (namevalidation(name.value) && quantvalidation(quant.value) && pricevalidation(price.value) && skuvalidation(sku.value) && descvalidation(desc.value)) {
        if(editIndex===-1){

            add(productid, name.value, parseInt(quant.value), parseInt(price.value), sku.value, desc.value);
        }
        else{

            UpdateProduct(editIndex, name.value ,parseInt(quant.value), parseInt(price.value), sku.value, desc.value)
        }
    }
    else{
    }
}

function namevalidation(name: string):boolean | undefined {
    let existdata = arr.some((item, index) => index !== editIndex && item.name.toLowerCase() === name.toLowerCase());
    let nameval = document.getElementById("nameval") as HTMLParagraphElement;
    let namevalue = document.getElementById("name") as HTMLInputElement;

    if (name.length !== 0) {
        const pattern = /^(?![\s])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
        if (name.length > 0) {
            if (name[0] === " ") {
                nameval.innerHTML = "No spaces at start";
                namevalue.style.border = "2px solid red";
                return false;
            } else if (!pattern.test(name)) {
                nameval.innerHTML = "Name should contain only letters and single spaces";
                namevalue.style.border = "2px solid red";
                return false;

            }    else if (existdata) {
                nameval.innerHTML = "Data already exist";
                namevalue.style.border = "2px solid red";
                return false;
            }
            else if (name.length > 50) {
                nameval.innerHTML = "Name should be less than 50 character";
                namevalue.style.border = "2px solid red";
                return false;
            } else {
                nameval.innerText = "";
                namevalue.style.border = "none";
                return true;
            }
        }
    } else if (name.length == 0) {
        nameval.innerHTML = "Product quantity is empty";
        namevalue.style.border = "2px solid red";
        return false;
    } else {
        nameval.innerHTML = "";
        namevalue.style.border = "none";
        return true;
    }
}

function quantvalidation(quant: string):boolean {
    let quantval = document.getElementById("quantval") as HTMLParagraphElement;
    let quantvalue = document.getElementById("Quant") as HTMLInputElement;
    const pattern1 = /^(?!0)\d+$/;

    if (quant === "") {
        quantval.innerHTML = "Product partno cannot be empty";
        quantvalue.style.border = "2px solid red";
        return false;

    } else if (!pattern1.test(quant)) {
        quantval.innerHTML = "Product partno cannot start with zero";
        quantvalue.style.border = "2px solid red";
        return false;
    } else if (parseInt(quant) >= 10000) {
        quantval.innerHTML = "Product partno should be less than 10000";
        quantvalue.style.border = "2px solid red";
        return false;
    } else {
        quantval.innerHTML = "";
        quantvalue.style.border = "none";
        return true;
    }
}

function pricevalidation(price: string):boolean {
    let priceval = document.getElementById("priceval") as HTMLParagraphElement;
    let pricevalue = document.getElementById("price") as HTMLInputElement;
    const pattern1 = /^(?!0)\d+$/;

    if (price === "") {
        priceval.innerHTML = "Product partno cannot be empty";
        pricevalue.style.border = "2px solid red";
        return false;

    } else if (!pattern1.test(price)) {
        priceval.innerHTML = "Product partno cannot start with zero";
        pricevalue.style.border = "2px solid red";
        return false;
    } else if (parseInt(price) >= 10000) {
        priceval.innerHTML = "Product partno should be less than 10000";
        pricevalue.style.border = "2px solid red";
        return false;
    } else {
        priceval.innerHTML = "";
        pricevalue.style.border = "none";
        return true;
    }
}

function skuvalidation(sku: string):boolean {
    let existSDK = arr.some((item, index) => index !== editIndex && String(item.sku).toLowerCase() === sku.toLowerCase());
    let skuval = document.getElementById("SKUval") as HTMLParagraphElement;
    let skuvalue = document.getElementById("SDK") as HTMLInputElement;
    const pattern2 = /^[a-zA-Z0-9](?:[a-zA-Z0-9]{0,4})$/;
    if (sku.length === 0) {
        skuval.innerHTML = "Product SKU is empty";
        skuvalue.style.border = "2px solid red";
        return false;
    } else if (!pattern2.test(sku)) {
        skuval.innerHTML = "Product SKU should be less than 5 and should not contain spaces";
        skuvalue.style.border = "2px solid red";
        return false;
    }else if (existSDK) {
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

function descvalidation(desc: string):boolean {
  
    let descval = document.getElementById("descval") as HTMLParagraphElement;
    let descvalue = document.getElementById("desc") as HTMLInputElement;
    if (desc.length === 0) {
        descval.innerHTML = "Product desc is empty";
        descvalue.style.border = "2px solid red";
        return false;
    } else if (desc.length >= 300) {
        descval.innerHTML = "Product desc should be less than 300";
        descvalue.style.border = "2px solid red";
        return false;
    } else {
        descval.innerHTML = "";
        descvalue.style.border = "none";
        return true;
    }
}

function add(productid: number, name: string, quant: number, price: number, sku: string | number, desc: string) {

    let obj: Product = {
        productid: productid,
        name: name,
        quant: quant,
        price: price,
        sku: sku,
        desc: desc
    };

    arr.push(obj);
    console.log(arr);
    printData(arr)
    reset()

}
function printData(arr:Product[]):void {
    let tbody = document.getElementById("tbody") as HTMLParagraphElement;
    tbody.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let tr = "<tr>";
        tr += "<td>" + (i+1)+ "</td>";
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
function reset():void {
    let name1 = document.getElementById("name") as HTMLInputElement;
    name1.value = "";
    let quant1 = document.getElementById("Quant") as HTMLInputElement;
    quant1.value = "";
    let price1 = document.getElementById("price") as HTMLInputElement;
    price1.value = "";
    let SDK1 = document.getElementById("SDK") as HTMLInputElement;
    SDK1.value = "";
    let desc1 = document.getElementById("desc") as HTMLTextAreaElement;
    desc1.value = "";
    let submit=document.getElementById("submit") as HTMLButtonElement
    submit.innerText = "Add";
    let reset=document.getElementById("reset") as HTMLButtonElement
    reset.style.display = "inline-block";
    let nameval=document.getElementById("nameval") as HTMLParagraphElement
    nameval.innerHTML=""
    let quantval=document.getElementById("quantval") as HTMLParagraphElement
    quantval.innerHTML=""
    let priceval=document.getElementById("priceval") as HTMLParagraphElement
    priceval.innerHTML=""
    let skuval=document.getElementById("SDK") as HTMLParagraphElement
    skuval.innerHTML=""
    let descval=document.getElementById("desc") as HTMLParagraphElement
    descval.innerHTML=""
    name1.style.border = "none";
    quant1.style.border = "none";
    price1.style.border = "none";
    SDK1.style.border = "none";
    desc1.style.border = "none";
    let edit1=document.getElementById("edit") as HTMLParagraphElement
    edit1.innerHTML =""
    editIndex=-1
}
function edit(index:number):void {
    let name = document.getElementById("name") as HTMLInputElement;
    let quant = document.getElementById("Quant") as HTMLInputElement;
    let price = document.getElementById("price") as HTMLInputElement;
    let sku = document.getElementById("SDK") as HTMLInputElement;
    let desc = document.getElementById("desc") as HTMLTextAreaElement;
    let submit=document.getElementById("submit") as HTMLInputElement
    let obj = arr[index];
    name.value = obj.name;
    quant.value = String(obj.quant);
    price.value = String(obj.price);
    sku.value = String(obj.sku);
    desc.value = obj.desc;
    submit.innerText = "Update";

    let reset1=document.getElementById("reset") as HTMLButtonElement
    reset1.style.display = "none";

    if (editIndex === index) {   
        editIndex = -1;
    } else {
        editIndex = index;
    }
}
function UpdateProduct(index:number, name:string, quant:number, price:number, sku:string|number, desc:string):void {
    console.log(name)
    console.log(sku)
    console.log(desc)

    arr[index].name = name;
    arr[index].quant = quant;
    arr[index].price = price;
    arr[index].sku = sku;
    arr[index].desc = desc;
    let reset1=document.getElementById("reset") as HTMLButtonElement
    reset1.style.display = "inline-block";

    printData(arr);
    reset();
}
function Delete(index:number):void {
    if (confirm("Are you sure you want to delete the data") == true) {
    arr.splice(index, 1);
    reset()
    printData(arr);
    }
}
function search():void {
    let search = document.getElementById("search") as HTMLInputElement;
    let search1=search.value.trim()
    if (search1.length > 0) {
        let filterdata = arr.filter(filter => String(filter.name).toLowerCase().includes(String(search1).toLowerCase()));
        if (filterdata.length > 0) {
            printData(filterdata);
        } else {
            let tbody=document.getElementById("tbody") as HTMLParagraphElement
            tbody.innerHTML="No data"
        }
    } else {
        printData(arr);
    }
}


