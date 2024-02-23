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
    let add1=true;
    let add2=true;
    let add3=true;
    let add4=true;
    let add5=true;
    let add6=true;

    if(name.length!==0){
        const pattern=/^[a-zA-Z]+$/;
        if(name.length>0){
            if(name[0]===" " || name[name.length]===" "){
               document.getElementById("nameval").innerHTML="No spaces at start or end";
               document.getElementById("name").style.border="2px solid red"
               add1=false;
            }
            else if(!pattern.test(name)){

                document.getElementById("nameval").innerHTML="No digits or special character";
                document.getElementById("name").style.border="2px solid red"
                add1=false;
            }
            else{
                document.getElementById("nameval").innerHTML="";
                document.getElementById("name").style.border="none"
                add1=true;
            }

        
            
        
        }
        else{
            for(let i=0;i<arr.length;i++){
                if(name===arr[i].Product_name){
                    document.getElementById("nameval").innerHTML="Already exist in data";
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
        
    }
    else if(name.length==0){
        document.getElementById("nameval").innerHTML="Product is empty";
        document.getElementById("name").style.border="2px solid red"
        add2=false;
    }
    else{
        document.getElementById("nameval").innerHTML="";
        document.getElementById("name").style.border="none"
        add2=true;
    }



    if(String(quant).length===0){

        document.getElementById("quantval").innerHTML="Product quantity is empty";
        document.getElementById("Quant").style.border="2px solid red"
        add3=false;
    }
    else if(quant<0){
        document.getElementById("quantval").innerHTML="Product quantity cannot be negative";
        document.getElementById("Quant").style.border="2px solid red"
        add3=false;

    }
    else{
        document.getElementById("quantval").innerHTML="";
        document.getElementById("Quant").style.border="none"
        add3=true;

    }


    if(price===0 || String(price).length===0){
        document.getElementById("priceval").innerHTML="Product price is empty";
        document.getElementById("price").style.border="2px solid red"
        add4=false;
        


    }
    else if(price<0){
        document.getElementById("priceval").innerHTML="Product price cannot be negative";
        document.getElementById("price").style.border="2px solid red"
        add4=false;

    }
    else{
        document.getElementById("priceval").innerHTML="";
        document.getElementById("price").style.border="none"
        add4=true;

    }

    if(SDK.length===0){
        document.getElementById("SKUval").innerHTML="Product SKU is empty";
        document.getElementById("SDK").style.border="2px solid red"
        add5=false;

    }
    else{
        document.getElementById("SKUval").innerHTML="";
        document.getElementById("SDK").style.border="none"
        add5=true;

    }

    if(desc.length===0){
        document.getElementById("descval").innerHTML="Product SKU is empty";
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
}
function printData(arr){
    
    let data=document.getElementById("tbody")
    data.innerHTML=" "
    for(let i=0;i<arr.length;i++){
    
    data.innerHTML+= `<tr> <td>${arr[i].productid}</td> <td>${arr[i].Product_name}</td><td>${arr[i].quant}</td> <td>${arr[i].price}</td> <td>${arr[i].SDK}</td> <td>${arr[i].desc}</td> <td><button onclick="edit(${arr[i].productid},${i})" ><i class="fa fa-edit"></i></button>   <button onclick="delete1(${arr[i].productid})" ><i class="fa fa-trash-o"></i></button></td></tr>` 
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
    if(flag){

      
        name.value=arr[i].Product_name;
        quant.value=arr[i].quant;
        price.value=arr[i].price;
        SDK.value=arr[i].SDK;
        desc.value=arr[i].desc; 
        document.getElementById("edit").innerHTML=`Change the fields you want to change then click update`;
       
        document.getElementById("submit").style.display="none";
        flag=false;
    }
    else{
        console.log(i)
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
    }
}
function update(i){
    console.log(i)
    let name=document.getElementById("name");
    let quant=document.getElementById("Quant");
    let price=document.getElementById("price");
    let SDK=document.getElementById("SDK");
    let desc=document.getElementById("desc");


}


function search(){
    let search=document.getElementById("search").value
    if(search.length>0){
        let filterdata=arr.filter(filter=>filter.Product_name===search)
        printData(filterdata)

    }
    else{
        printData(arr)
    }   
}
