/*
function sum (a, b){
    return a + b;
}
function mul (a , b) {
    return a * b;
}

const div = (a, b ) => {
    console.log(a/b);
}

function countVowels(str) {

    let count = 0 ;
    for (let el of str) {
        if (el==="a" || el==="e" || el==="i" || el==="o" || el==="u") {
            count ++;
        }
    }
    return count;
} 

const arrowVowelsCount = (str) => {
    let count = 0 ;
    for (let el of str) {
        if (el==="a" || el==="e" || el==="i" || el==="o" || el==="u") {
            count ++;
        }
    }
    return count;
}

let number = [2,3,4,5,6,7,8];

number.forEach((vel) =>{
    console.log( vel * vel)
})

let squerArr = number.map((val) => {
    return val * val;
})
console.log(squerArr);

let findEvent = number.filter((val) => {
    return val % 2 === 0;
})
console.log(findEvent);

let marks = [34, 56, 97, 34, 97, 92, 78, 90, 34, 93];

let findAPlus = marks.filter((val) => {
    return val >= 90;
})
console.log(findAPlus);
*/
let n = Number(prompt("Enter a number :"));

let arr = [];
for (let i = 1; i<=n; i++) {
    arr.push(i);
}
let sumAllNumber = arr.reduce((prev, curr) =>{
    return prev + curr;
})
console.log(sumAllNumber);
 
let factorial = arr.reduce((prev, curr) => {
    return prev * curr;
})
console.log(factorial);


