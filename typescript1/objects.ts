function getdata():{}{
    return {}
}
let user={
    name:"prit",
    ispaid:true

}
function getdata1({name:String,ispaid:boolean}):{name:String,ispaid:boolean}{
    return {name:"String",ispaid:true}
}
let data=getdata1(user)
console.log(data)
export {}