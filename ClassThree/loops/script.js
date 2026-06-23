console.log("This is a third class ");
//__ For loop__//
/*
// for (let i = 1 ; i<=5; i++) {
//     console.log(i,"I start learn JavaScript");
// }

let n = Number(prompt("Enter number : "));
let sum = 0;
for (let i = 1; i <=n; i++) {
    sum +=i;
}
console.log("sum = ",sum);
*/
//__ while__//
/*
let i = 1;
while(i<=5){
    console.log("I = ", i);
    i++;
}
*/

//__ do while loop__//
/*
let i = 1;
do {
    console.log("I = ", i);
    i++;
} while (i <= 10);
 */
//__ For of Loop__//
/*
let str = "JavaScript";
let size = 0;
for (let val of str) {
    console.log("Val = ", val);
    size ++;
}
console.log('String Size = ', size);
*/
//__ For in Loop__//
/*
const stulent = {
    name : "Akash",
    age : 24,
    cgpa : 4.34,
    isPass : true 
};

for (let key in stulent) {
    console.log("key =", key, "Value =", stulent[key]);
}
*/
//__Example-1__//
/*
// for (let i = 0; i<=100; i++){
//     console.log("I =", i);
// }
for (let i = 0; i<=100; i++) {
    if ( i % 2 === 0) {
        console.log(i, "is a Even Number");
    }
}
*/
//__Example-2__//

let gameNumber = 22;
let userNumber = prompt("guess the game number : ");

while (userNumber != gameNumber) {
    userNumber = prompt("You Enter a wrong Number. Please Guess again : ");
}
console.log("congratulations You Win")