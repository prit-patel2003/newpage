let arr=[];
let productid=0;
let flag=true;
function ReadProduct(){
    productid=productidchanger(productid);
    let name=document.getElementById("name").value;
    let quant=document.getElementById("Quant").value;
    let price=document.getElementById("price").value;
    let SDK=document.getElementById("SDK").value;
    let desc=document.getElementById("desc").value;
    val(name,quant,price,SDK,desc)
    
}
function val(name,quant,price,SDK,desc){
    
    let add1=true;
    let add2=true;
    let add3=true;
    let add4=true;
    let add5=true;
    let add6=true;

    if(name.length!==0){
        const pattern=/^(?![\s])[a-zA-Z]+(?:[\s]{1}[a-zA-Z]+)*[\s]*$/;
        if(name.length>0){
            if(name[0]===" "){
               document.getElementById("nameval").innerHTML="No spaces at start";
               document.getElementById("name").style.border="2px solid red"
               add1=false;
            }
            else if(!pattern.test(name)){

                document.getElementById("nameval").innerHTML="Name should contain only letters and single spaces";
                document.getElementById("name").style.border="2px solid red"
                add1=false;
            }
            else if(name.length>50){
                document.getElementById("nameval").innerHTML="Name should be less than 50 character";
                document.getElementById("name").style.border="2px solid red"
                add1=false;
            }
            else{
                document.getElementById("nameval").innerHTML="";
                document.getElementById("name").style.border="none"
                add1=true;
            }

        
            
        
        }
        
    }
    else if(name.length==0){
        document.getElementById("nameval").innerHTML="Product quantity is empty";
        document.getElementById("name").style.border="2px solid red"
        add2=false;
    }
    else{
        document.getElementById("nameval").innerHTML="";
        document.getElementById("name").style.border="none"
        add2=true;
    }


    const pattern1=/^(?!0+$)\d+$/
    if(!pattern1.test(String(quant))){
        if(quant<0){
            document.getElementById("quantval").innerHTML="Product quantity cannot be negative";
            document.getElementById("Quant").style.border="2px solid red"
            add3=false;
    
        }
        else{

            document.getElementById("quantval").innerHTML="Product quantity cannot be zero or start with zero or have special characters";
            document.getElementById("Quant").style.border="2px solid red"
            add3=false;
        }
    }

    else if(quant>=10000){
        document.getElementById("quantval").innerHTML="Product quantity should be less than 10000";
        document.getElementById("Quant").style.border="2px solid red"
        add3=false;
    }
    else{
        document.getElementById("quantval").innerHTML="";
        document.getElementById("Quant").style.border="none"
        add3=true;

    }


    if(!pattern1.test(String(price))){
        if(price<0){
            document.getElementById("priceval").innerHTML="Product price cannot be negative";
            document.getElementById("price").style.border="2px solid red"
            add3=false;
    
        }
        else{

            document.getElementById("priceval").innerHTML="Product price cannot be zero or start with zero or have special characters";
            document.getElementById("price").style.border="2px solid red"
            add3=false;
        }
    }

    else if(price>=100000){
        document.getElementById("priceval").innerHTML="Product quantity should be less than 100000";
        document.getElementById("price").style.border="2px solid red"
        add3=false;
    }
    else{
        document.getElementById("price").innerHTML="";
        document.getElementById("price").style.border="none"
        add3=true;

    }
    const pattern2=/^[a-zA-Z0-9](?:[a-zA-Z0-9]{0,4})$/;
    if(SDK.length===0){
        document.getElementById("SKUval").innerHTML="Product SKU is empty";
        document.getElementById("SDK").style.border="2px solid red"
        add5=false;

    }
    else if(!pattern2.test(SDK)){
        document.getElementById("SKUval").innerHTML="Product SKU should be less than 5 and should not contain spaces";
        document.getElementById("SDK").style.border="2px solid red"
        add5=false;
    }
    else{
        document.getElementById("SKUval").innerHTML="";
        document.getElementById("SDK").style.border="none"
        add5=true;

    }

    if(desc.length===0){
        document.getElementById("descval").innerHTML="Product desc is empty";
        document.getElementById("desc").style.border="2px solid red"
        add6=false;

    }
    else if(desc.length>=300){
        document.getElementById("descval").innerHTML="Product desc should be less than 300";
        document.getElementById("desc").style.border="2px solid red"
        add6=false;
    }
    else{
        document.getElementById("descval").innerHTML="";
        document.getElementById("desc").style.border="none"
        add6=true;

    }
    


    
    if(add1 && add2 && add3 && add4 && add5 && add6){
        
        AddProduct(productid,name,quant,price,SDK,desc)
    }
}
function productidchanger(productid){
    return productid+1
}
function AddProduct(productid,name,quant,price,SDK,desc){
    let same=true;
    let obj={
        "productid":productid,
        "Product_name":name,
        "quant":quant,
        "price":price,
        "SDK":SDK,
        "desc":desc
    }

    arr.push(obj)
    console.log(arr)
    printData(arr)
    reset()

}
function reset(){
    let name1=document.getElementById("name");
    name1.value=""
    let quant1=document.getElementById("Quant");
    quant1.value=""
    let price1=document.getElementById("price");
    price1.value=""
    let SDK1=document.getElementById("SDK");
    SDK1.value=""
    let desc1=document.getElementById("desc");
    desc1.value=""
    document.getElementById("nameval").innerHTML="";
    document.getElementById("quantval").innerHTML="";
    document.getElementById("priceval").innerHTML="";
    document.getElementById("SKUval").innerHTML="";
    document.getElementById("descval").innerHTML="";
    document.getElementById("name").style.border="none"
    document.getElementById("Quant").style.border="none"
    document.getElementById("price").style.border="none"
    document.getElementById("SDK").style.border="none"
    document.getElementById("desc").style.border="none"


}
function printData(arr){
    
    let data=document.getElementById("tbody")
    data.innerHTML=" "
    let update1=document.getElementById("updatefield")
    for(let i=0;i<arr.length;i++){
 
    data.innerHTML+= `<tr> <td>${arr[i].productid}</td> <td>${arr[i].Product_name}</td><td>${arr[i].quant}</td> <td>${arr[i].price}</td> <td>${arr[i].SDK}</td> <td>${arr[i].desc}</td> <td><button onclick="edit(${arr[i].productid},${i})" ><i class="fa fa-edit"></i></button>   <button onclick="delete1(${arr[i].productid})" ><i class="fa fa-trash-o"></i></button></td></tr>` 
    update1.innerHTML=`<button type="submit" onclick="update(${i})" id="updatebtn">update</button>`
    }
    

}
function delete1(productid){
    console.log(productid)
for(let i=0;i<arr.length;i++){
    if(arr[i].productid===productid){
        arr.splice(i,1)
    }
    else{
        continue    
    }
}
printData(arr)
}
function edit(productid,i){
    let name=document.getElementById("name");
    let quant=document.getElementById("Quant");
    let price=document.getElementById("price");
    let SDK=document.getElementById("SDK");
    let desc=document.getElementById("desc");

      
        name.value=arr[i].Product_name;
        quant.value=arr[i].quant;
        price.value=arr[i].price;
        SDK.value=arr[i].SDK;
        desc.value=arr[i].desc; 
        document.getElementById("edit").innerHTML=`Change the fields you want to change then click update`;
        document.getElementById("updatebtn").style.display="inline-block";
        document.getElementById("submit").style.display="none";
        document.getElementById("reset").style.display="none";
        if(!flag){
            update(i)
        }


    

}
function update(i){
    flag=false;
    console.log("hii")
    let name=document.getElementById("name");
    let quant=document.getElementById("Quant");
    let price=document.getElementById("price");
    let SDK=document.getElementById("SDK");
    let desc=document.getElementById("desc");
    val(name,quant,price,SDK,desc)
    arr[i].Product_name=name.value;
    arr[i].quant=quant.value;
    arr[i].price=price.value;
    arr[i].SDK=SDK.value;
    arr[i].desc=desc.value;
    document.getElementById("edit").innerHTML=``;
    document.getElementById("submit").style.display="inline-block";
    
    flag=true;
    reset()
    printData(arr)
    console.log(i)


}


function search(){
    let search = document.getElementById("search").value.trim();
    if (search.length > 0) {
        let filterdata = arr.filter(filter => filter.Product_name.toLowerCase().includes(search.toLowerCase()));
        if (filterdata.length > 0) {
            printData(filterdata);
        } else {
            alert("No matching results found.");
        }
    } else {
        printData(arr);
    }   
}