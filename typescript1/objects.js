"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getdata() {
    return {};
}
var user = {
    name: "prit",
    ispaid: true
};
function getdata1(_a) {
    var String = _a.name, boolean = _a.ispaid;
    return { name: "String", ispaid: true };
}
var data = getdata1(user);
console.log(data);
