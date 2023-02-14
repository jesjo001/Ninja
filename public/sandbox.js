"use strict";
let character;
let age;
let isLoggedIn;
//
age = 40;
isLoggedIn = true;
let ninjas = [];
ninjas.push("rice");
// union types
let mixes;
let mixed2;
let obj;
let mixed3 = [];
let ninjaObj;
//function
let greet;
greet = () => {
    console.log("greetings");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(1, 2, "ade");
const minus = (a, b) => {
    return a - b;
};
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeter = (user) => {
    console.log(`${user.name} says hello `);
};
