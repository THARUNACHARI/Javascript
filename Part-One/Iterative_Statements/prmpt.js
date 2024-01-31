var prompt = require('prompt-sync')();
let a= prompt("enter a value1")
let b=prompt("enter a value2")
console.log(a+b)

var prompt = require('prompt-sync')();

var c = prompt('Enter First Number ');
var d = prompt('Enter Second Number ');

console.log(parseInt(c)+parseInt(d))


//WAP to print given number is 3 digit or not

var prompt = require('prompt-sync')();

var num= parseInt(prompt("Enter Number:"))

if(num >=100 && num <=999){
    console.log("Yes ! Given Number is 3 Digit")
}
else{
    console.log("No ! Given Number is not a 3 Digit")
}