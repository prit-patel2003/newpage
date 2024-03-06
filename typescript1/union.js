"use strict";
// let score:number | string | boolean=100
// let score:number | string | boolean="win"
// let score:number | string | boolean=true
Object.defineProperty(exports, "__esModule", { value: true });
var prit = { name: "prit", age: 20 };
var prit1 = { username: "prit", password: 20 };
function data(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
var mix = ["prit", 1, 2];
