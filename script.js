"use strict";


let equation = "";
let actualEquation = 0;


//variable values
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");

let addOne = function() {


//operator values
let add = document.getElementById("plus")
let minus = document.getElementById("minus")
let equals = document.getElementById("equals")
let answer = document.getElementById("answer")

let addPlus = function() {
    equation += "+"; 
    answer.innerHTML += " +";
}
let addMinus = function() {
    equation += "-";
    answer.innerHTML += " -";
}

add.addEventListener("click", addPlus)
minus.addEventListener("click", addMinus)

console.log(equation)

//console.log(add, minus, equals, answer)