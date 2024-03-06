// class user{
//     name:string
//     age:number
//     readonly email:string="prit.s.patel03@gmail.com"
//     constructor(name:string,age:number){
//     this.name=name;
//     this.age=age;
//     }
// }
// class user{
//         public name:string
//         private age:number
//         readonly email:string="prit.s.patel03@gmail.com"
//         constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//         }
//     }
// const p=new user("prit",20)
// console.log(p.age)
// console.log(p.name)

class user{
        public name:string
        protected age:number
        readonly email:string="prit.s.patel03@gmail.com"
        constructor(name:string,age:number){
        this.name=name;
        this.age=age;
        }
    }
class admin extends user{
        isfamily:boolean=true
        changcoursecount(){

            this.age=200
        }
}
const p=new user("prit",20)
console.log(p.name)


