// let score:number | string | boolean=100
// let score:number | string | boolean="win"
// let score:number | string | boolean=true

type User={
    name:string;
    age:number
}
type Admin={
    username:string;
    password:number
}
let prit:User | Admin={name:"prit",age:20}
let prit1:User | Admin={username:"prit",password:20}

function data(id:number|string){
    if(typeof id==="string"){
        id.toLowerCase()
    }
    else{
        id+2
    }
}
let mix:(number|string)[]=["prit",1,2]
// let mix1:number[] | string[]=["prit",1,2]

 

export {}