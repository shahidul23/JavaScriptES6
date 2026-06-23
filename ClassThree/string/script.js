console.log("This is a String Class");

// let str = "Md. Shahidul Islam";
// console.log(str.length); // 18
// console.log(str[5]);
//__template literals__//
/*
let item = {
    name : "pen",
    price : 5
}

let str = `This is ${item.name} this price is ${item.price}`;
console.log(str);
*/
//__excapr carecture__//
/*
let str = "Reddata\nAyal Corp";
console.log(str);
*/

//__string methods__//
// let str = " Reddata  ";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(2, 5));
// console.log(str.concat(str));
// console.log(str.replace("t", "d"));
// console.log(str.replaceAll("d", "t"));
// console.log(str.charAt((3)));

//__example__//

let fullName = prompt("Enter Your Full Name: ");
fullName = fullName.trim();
fullName = fullName.replaceAll(" ", "");
fullName = fullName.replaceAll(".", "");
fullName = fullName.toLowerCase();

let userName = `@${fullName}${fullName.length}`;
console.log(userName);