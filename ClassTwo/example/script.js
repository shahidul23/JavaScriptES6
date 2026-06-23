//__proble -1  Positive, Negative, or Zero __/
/*
let number = prompt("Enter A Number : ");
let result ;

if (number >  0 ) {
    result = "Positive"
} else if (number < 0 ){
    result = "Negative";
}else {
    result = "Zero";
}
console.log(result);
*/

//__proble -2  Even or Odd __//
/*
let number = prompt("Enter A Number : ");
let result;

if ( number % 2 === 0 ){
    result = `${number} is Event`;
} else {
    result = `${number} is Odd`;
}
console.log(result);
*/

//__proble -3  Multiple of 5 __//
/*
let number = prompt("Enter Number : ");
let result;

if (number % 5 === 0 ) {
    result = `${number} is Multiple of 5`;
} else {
    result = `${number} is not Multiple of 5`;
}
console.log(result);
*/

//__proble -4  Voting Eligibility __//
/*
let age = prompt("Enter Your Age : ");
let result = age >= 18 ? `${age} is Eligible to vote` : `${age} is Not eligible to vote`;
console.log(result);
*/

//__proble -5  Largest of Two Numbers __//
/*
let num1 = prompt("Enter first number : ");
let num2 = prompt("Enter second number : ");

if (num1 > num2) {
    console.log(num1, "is larger then", num2);
} else if (num2 > num1) {
    console.log(num2, "is larger then", num1);
} else {
    console.log(num2, " and ", num1, "are equel");
} 
*/

//__proble -6  Largest of Three Numbers __//
/*
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let num3 = Number(prompt("Enter third number: "));

if (num1 > num2 && num1 > num3) {
    console.log(num1, "is the largest")
} else if (num2 > num1 && num2 > num3) {
    console.log(num2, "is the largest")
} else if (num3 > num1 && num3 > num2){
    console.log(num3, "is the largest")
} else {
    console.log("invalide number");
}
    
*/
//__proble -7 Pass or Fail__//
/*
let marks = Number(prompt("Enter Marks : "));

let result = marks >=33 ? "Pass" : "Fail";
console.log(result);
*/

//__proble -8 Grade Calculator__//
/*
let marks = Number(prompt("Enter Your Marks : "));
let grade;

if (marks >= 80 && marks <= 100) {
    grade = "A+";
} else if (marks >= 70 && marks <= 79) {
     grade = "A";
} else if (marks >= 60 && marks <= 69) {
     grade = "A-";
} else if (marks >= 50 && marks <= 59) {
     grade = "B";
} else if (marks >= 33 && marks <= 49) {
     grade = "C";
} else if (marks >= 0 && marks <= 32) {
     grade = "Fail";
} else {
    grade = "Invalide number";
}
console.log(grade);
*/
//__proble -9 Leap Year Checker__//
/*
let year = Number(prompt("Enter Years : "));

if (year % 4 === 0 && year % 100 !== 0 || year % 400 ===0) {
    console.log(year, "is Leap Year");
} else {
    console.log(year, "is not Leap Year");
}
*/
//__proble -10 Simple Calculator__//
/*
let num1 = Number(prompt("Enter First Number : "));
let opr = prompt("Enter Operator : ");
let num2 = Number(prompt("Enter Second Number : "));
let result;

// if (opr == '+') {
//     result = num1 + num2;
// } else if ( opr == '-') {
//      result = num1 - num2;
// } else if ( opr == '*') {
//      result = num1 * num2;
// } else if ( opr == '/') {
//      result = num1 / num2;
// } else if ( opr == '%') {
//      result = num1 % num2;
// } else {
//     result = "invalide Operator or Number";
// }
switch (opr) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break
    case '%':
        result = num1 % num2;
        break;
    default:
        result = "Invalid Operator";
}
console.log(`${num1} ${opr} ${num2} = ${result}`);
*/

//__proble -11 Login System__//
const user = {
    Username: "admin",
    Password: 1234
}
let userName = prompt("Enter Your Username : ");
let pass = Number(prompt("Enter Your Password : "));

if (user.Username === userName && user.Password === pass) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}
