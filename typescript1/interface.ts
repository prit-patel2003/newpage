interface user {
    name:string,
    userid:number,
    id?:number,
    getdata:()=>string,
    getdis:(coupon:string)=>number
}
interface externaldata extends user{
    sku:number
}
const prit={name:"prit",userid:10,number:10
,getdata:()=>{
    return "prit"
},
getdis:(name:"prit")=>{
    return 10
}
}
export {}
