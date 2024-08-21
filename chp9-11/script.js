// QUESTION 1 
// var cityName=prompt("Enter your city name");
// if (cityName=="karachi"){
//     document.write("Welcome to city of Lights");

// }
// else {
//     document.write("You city is not correct");
// }

// QUESTION 2

// var gender=prompt("Please enter your gender");
//  if (gender=="Male"){
//     alert("Good Morning Sir");
//  }
// else if(gender=="Female"){
//     alert("Good Morning Ma'am");
// }
// else {
//     alert("Enter your gender");

// }

// QUESTION 3 
// var color = prompt("Write color of road traffic signal");

// if (color == "RED" || color == "Red" || color == "red") {
//   alert("Must Stop");
// } else if (color == "YELLOW" || color == "Yellow" || color == "yellow") {
//   alert("Ready to move");
// } else if (color == "GREEN" || color == "Green" || color == "green") {
//   alert("Move now.");
// } else {
//   alert("Please enter a right color of road traffic signal.");
// }


// QUESTION 4 
// var remFuel = prompt("Enter fuel in litres");

// if (remFuel < "0.25litres") {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("You have enough fuel");
// }

//  QUESTION 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// QUESTION 6
// var markS1 = Number(prompt("Enter marks of subject 1"));
// var markS2 = Number(prompt("Enter marks of subject 2"));
// var markS3 = Number(prompt("Enter marks of subject 3"));
// var totalMarks=300;
// var marksObtained = markS1 + markS2 + markS3;
// var percentage = (marksObtained / totalMarks) * 100;
// var grade, remarks;
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1>" + "<br>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%" + "<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);

// QUESTION 7
// var secretNumber = 10;  
// var guess = Number(prompt("Guess the secret number:"));

// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, wrong guess.");
// }

// QUESTION 8
// var number = Number(prompt("Enter a number"));

// if (number % 3 === 0) {
//     document.write("Your number is divisible by 3.");
// } else {
//     document.write("Your number is not divisible by 3.");
// }

// QUESTION 9
// var number =Number(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     alert(number + " is an even number.");
// } 
// else if (number%2!==0) {
//     alert(number + " is an odd number.");
// }
// else {
//     alert("Wrong number");
// }


// QUESTION 10
// var temp = Number(prompt("Enter the temperature:"));
// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30) {
//     alert("The weather today is normal.");
// } else if (temp > 20) {
//     alert("Today's weather is cool.");
// } else if (temp > 10) {
//     alert("OMG! Today's weather is so cool.");
// } else {
//     alert("It's very cold outside!");
// }


// 11.

// var firstNum = Number(prompt("Enter the first number:"));
// var secondNum = Number(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;
// if (operation === "+") {
//     result = firstNum + secondNum;
// } else if (operation === "-") {
//     result = firstNum - secondNum;
// } else if (operation === "*") {
//     result = firstNum * secondNum;
// } else if (operation === "/") {
//     result=firstNum/secondNum;
//     // if (secondNum !== 0) {
//     //     result = firstNum / secondNum;
//     // } else {
//     //     result = "Error! Division by zero.";
//     // }
// } else if (operation === "%") {
//     result = firstNum % secondNum;
// } else {
//     result = "Invalid operation.";
// }

// alert("The result is: " + result);



