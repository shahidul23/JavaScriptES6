// let marks = [34,45,23,12,45,576];
// console.log(typeof(marks));
// let heroes = ["iron man", "halk", "etc"];
// console.log(heroes);

// for (let i = 0; i<heroes.length; i++)
// {
//     console.log(heroes[i]);
// }

// for (let hero of heroes) {
//     console.log(hero)
// }
//__example - 1__//

// let marks = [85, 97, 44, 37, 76, 60];
// let avg = 0;
// let sum  = 0;

// for (let el of marks) {
//     sum += el;
// }
// avg = sum/marks.length;

// console.log(`avg marks of the class ${avg}`);

//__example - 2__//
// let price = [250, 645, 300, 900, 50];
// let i = 0;
// for (let el of price) {
//     let offer = el /10;
//     price[i] = price[i] - offer;
//     console.log(`Value after offer = ${price[i]}`);
//     i++;
// }

// for (let i = 0; i<price.length; i++ ){
//     let offer = price[i] / 10;
//     price[i] -= offer;
// }
// console.log(price);

//__ array method__//

// let foodName = ["apple", "banana", "orange"];
// let fullName = ["Shahidul", "Aksah Khan", "Najmul"];
// let cityName = ["Dhaka", "Mymensingh", "Gulshan", "Banabi"];
// console.log(foodName);
// foodName.push("mango");
// console.log(foodName);
// console.log(foodName.pop());
// console.log(foodName.toString());
// let allName = fullName.concat(foodName, cityName);
// console.log(allName);

// foodName.unshift("pynaple");
// console.log(foodName)
// console.log(fullName.shift());
// console.log(fullName);
// console.log(cityName.slice(1, 3));
// console.log(cityName.slice(1));

// let arr = [3, 5, 6, 5, 5, 4, 12 ,34 ,35, 56];
// //delete and add
// // arr.splice(2, 2, 101, 102)

// //only add
// // arr.splice(3,0,101);

// //only delete
// arr.splice(4, 1);
// arr.splice(1, 1, 4);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(1, 1, "Ola");
console.log(companies)
companies.push("Amazon")
console.log(companies)

