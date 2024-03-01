const data1={
    "id": "d0328732-28a3-4d8b-8cbe-db463e3ce312",
    "image": "2b3da5c7-09bc-45aa-b0a6-be3378516519.jpg",
    "internal_path": "product/",
    "external_path": "product/",
    "base_url": "https://kf-dev-assets.s3.ap-southeast-2.amazonaws.com/",
    "name": "Apple",
    "sku": "123456",
    "weight": 1,
    "product_unit": "kg",
    "category": "Fruits",
    "supplier": "Fresh Fruits",
    "minimum_stock": 5,
    "remaining_quantity": 91,
    "stock_status": "in_stock",
    "inventory_detail": [
        {
            "id": "05ca6c1d-f535-4b04-a28e-5c5fae525e20",
            "remaining_quantity": 1,
            "created_at": "2024-02-27T12:16:39.634441+00:00",
            "quantity_detail": [
                {
                    "id": "22241480-7f48-4c6f-8912-d578df2d7cd0",
                    "remaining_quantity": 1,
                    "expiry_date": "2024-03-29"
                },
             
              
            ]
        },
        {
            "id": "38d8a681-d491-4e80-a11e-bf79967645bd",
            "remaining_quantity": 80,
            "created_at": "2024-02-27T12:17:34.676513+00:00",
            "quantity_detail": [
                {
                    "id": "ac8e4bf3-ae3f-4b17-8288-5f6744b3c492",
                    "remaining_quantity": 80,
                    "expiry_date": "2024-03-25"
                }
            ]
        },
        {
            "id": "8a459282-da35-4574-8d93-8b0de2cb53bc",
            "remaining_quantity": 10,
            "created_at": "2024-02-28T12:29:17.484502+00:00",
            "quantity_detail": [
                {
                    "id": "75a738ce-0862-43da-9c50-4a444281dc9e",
                    "remaining_quantity": 10,
                    "expiry_date": "2024-03-02"
                }
            ]
        }
    ]
}
let url="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
function print(){
    let data=document.getElementById("display").innerHTML=`<div class="inner"><div class='displayimage'>Product Image<br><img src=${url} height='70px' width='70px'></div><div class='displayinner'><div class='productdata'>Product name<br>${data1.name}</div><div class='productdata'>Product SKU<br>${data1.sku}</div><div class='productdata'>Product weight<br>${data1.weight}</div><div class='productdata'>Product category<br>${data1.category}</div><div class='productdata'>Product supplier<br>${data1.supplier}</div><div class='productdata'>Product quant<br>${data1.remaining_quantity}</div><div class='productdata'>Product minstock<br>${data1.minimum_stock}</div><div class='productdata'>Product status<br>${data1.stock_status}</div></div></div>`;
    let data2=document.getElementById("tbody")
    for(let i=0;i<data1.inventory_detail.length;i++){
        data2.innerHTML+=`<tr><td>${i+1}</td><td>${data1.inventory_detail[i].remaining_quantity}</td><td>${data1.inventory_detail[i].created_at.split("").splice(0,10).join("")}</td><td>${data1.inventory_detail[i].quantity_detail[0].expiry_date}</td></tr>`
    }
}
