"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = "prit";
var b = 10;
var num = 100;
var str;
function getstr() {
    return "prit";
}
str = getstr();
function name(val) {
    val.toUpperCase();
    return val;
}
// name(4)
var getname = name("prit");
var d = function (name, age) {
    if (age === void 0) { age = 12; }
    console.log(name, age);
};
d("prit");
console.log(num);
console.log(a);
console.log(b);
