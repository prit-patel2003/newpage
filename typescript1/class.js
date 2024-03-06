var user = /** @class */ (function () {
    function user(name, age) {
        this.email = "prit.s.patel03@gmail.com";
        this.name = name;
        this.age = age;
    }
    return user;
}());
var p = new user("prit", 20);
console.log(p.age);
console.log(p.name);
