console.log("This is Second Class");
//__ Artimetic opreators__//
/*
let a = 5;
let b = 2;
let c = a+b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;
let exp = a ** b;

console.log("A = ",a, "B = ", b);
console.log(" A + B = ",c);
console.log("A - B = ", sub);
console.log("A * B = ", mul);
console.log("A / B = ", div);
console.log("A % B = ", mod);
console.log("A ** B = ", exp);
*/

//__ Unary opreators__//
/*

let a = 5;
let b = 3;
console.log("A = ", a, "B = ", b);


console.log("A++ = ", a++);
console.log("A = ", a);
console.log("++A = ", ++a);

console.log("B++ = ", b++);
console.log("B = ", b);
console.log("++B = ", ++b);

console.log("A-- = ", a--);
console.log("A = ", a);
console.log("--A = ", --a);

console.log("B-- = ", b--);
console.log("B = ", b);
console.log("--B = ", --b);
*/

//__Assignment Operator__//
/*
let a = 5;
let b = 2;
console.log("A = ", a, "B = ", b);

a **= 4;
console.log("A = ", a);
*/
//__Comparison Operator__//
/*
let a = 5;
let b = 3;
console.log("A = ",a, "B = ",b);

console.log("A == B ", a === b);

console.log("A != B ", a !== b);

console.log("A >= B ", a>=b);
*/

//__Logical Operator__//
/*
let a = 5;
let b = 3;
console.log("A = ",a, "B = ",b);
let cond1 = a < b;
let cond2 = a === 2;

console.log("Cond1 && Cond2 ", cond1 && cond2);
console.log("Cond1 || Cond2 ", cond1 || cond2);
console.log("Cond1", !cond2);
*/

//__Conditional Operator__//
/*
let age = 25;
let mode = "dark";
let color;
if(mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white";
}
console.log(color);

if(age >= 18){
    console.log("You Can Vote");
}
if( age < 18){
    console.log("You Cann't Vote");
}


let age = 15;
let result ;

if ( age >= 18) {
    result = "Vote";
} else {
    result = "not Vote";
}
console.log(result)
*/

//__Odd and Event__//
/*
let number = 3;

if ( number % 2 === 0) {
    console.log(number, "Is Event")
} else {
    console.log(number, "Is Odd")
}
*/
/*
let mode = "silver";
let color;

if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color ="blue";
} else if (mode === "pink") {
    color ="pink";
} else {
    color = "white";
}
console.log(color);

let age = 14;

let result = age >= 18 ? "Adult" : "not Adult";
console.log(result);
*/
//__exmple-1__//
/*
let number = prompt("Enter A number: ");

let result = number % 3 === 0 ? `${number} , " is a multiple of 3"` : `${number} ," is not a multiple of 3"`;
console.log(result);
*/
//__exmple-2__//

let marks = prompt("Enter Your Mark");
let grade;

if (marks <= 100 && marks >=90) {
    grade = "A+";
} else if (marks <= 89 && marks >=80) {
     grade = "A";
} else if (marks <= 79 && marks >=70) {
     grade = "B";
} else if (marks <= 69 && marks >= 60) {
     grade = "C";
} else if (marks <= 59 && marks >= 50) {
     grade = "C";
} else if (marks <= 49 && marks >=0) {
     grade = "F";
} else {
     grade = "Invalide number";
}
console.log("according to your marks, your grade was : ",grade);
