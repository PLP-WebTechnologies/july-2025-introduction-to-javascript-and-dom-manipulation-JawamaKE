/* Part 1: Javascript basics */
/* Data types */
// String
let name = "Jane Maina";
console.log(name);
// Constant variable
const DOB = 2002;
console.log(DOB);
// Number
let age = 22;
console.log(age);
// Boolean
let iscooking = false;
console.log(iscooking);
// Array
let days = ["Monday", "Tuesday", "Wednesday"];
console.log(days);

/* Arithmetic operators */
let a = 10, b = 5;
console.log(a * b);
console.log(a / b);
console.log(a + b);
console.log(10 == "10");
console.log(10 === "10");

// If/else logic to check driving eligibility
    if (age >= 18) {
      console.log("You are old enough to drive.");
    } else {
      console.log("You are too young to drive.");
    }

/* Functions */ 
// if/else function
function checknumber(num){
    if (num > 0) {
        console.log("The number is positive");
    } else if (num < 0) {
        console.log("The number is negative");
    } else {
        console.log("The number is zero");
    }
}
checknumber();

// function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
greet();

//example 2
function greeting(){
    console.log("Hello,\nHow are you doing!");
}
greeting();

// function expression
const morning = function(){
    console.log("Good morning!");
}
morning();

 // function calculator
function divide(num1, num2,){
    return num1 / num2;
}
console.log(divide(100, 100));
console.log(divide(100, 10));
console.log(divide(100, 20));
console.log(divide(100, 50));


/* Part 3: Javascript loops */
// For loop: Print numbers from 1 to 3
for (let i = 1; i <= 3; i++) {
  console.log("Number:", i);
}

// While loop: Countdown from 3 to 0
let count = 3;
while (count > -1) {
  console.log("Countdown:", count);
  count--;
}

// forEach loop: Print fruit names
const fruits = ["Orange", "Pineapple", "Mango"];

fruits.forEach(function(fruit) {
  console.log("Fruit:", fruit);
});


/* Part 4: DOM */
// Select element by Id
function changeText(){
    // Changing an element
    let title = document.getElementById("text");
    text.textContent = "Javascript is fun!"
    text.style.color = "green";
    }

// Tag Name Selector
  const paragraphs = document.getElementsByTagName("p");
  paragraphs[0].style.color = "orange";
  paragraphs[1].style.color = "Purple"; 
 
// Class Selector
  const boxes = document.getElementsByClassName("box");
  boxes[0].classList.add("highlight"); 
  boxes[1].classList.add("highlight"); 

