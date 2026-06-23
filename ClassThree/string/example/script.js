// let fullName = "Md. Shahidul Islam";
// console.log(fullName.length);
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// let res = fullName.length >5 ? "Long String" : "Short String";
// console.log(res); 

// // for (val of fullName) {
// //     console.log(val);
// // }
//  console.log(fullName.split("").reverse().join(""))

// fullname = fullName.toLowerCase();
// let count = 0;
// for (val of fullName) {
//     if (val === "a") {
//         count++;
//     } else if (val ==="e"){
//         count++;
//     } else if (val === "i") {
//         count ++;
//     } else if (val ==="o") {
//         count++;
//     } else if (val ==="u") {
//         count++;
//     }
// }
// console.log(count);



// let str = "oldlo";
// let revers = str.split("").reverse().join("");
// if (str === revers) {
//     console.log("Palindrome")
// }else {
//     console.log("Not Palindrome")
// }
//__ The Fast Built-In Approach__//
/*
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-zA-Z]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome('A man, a plan, a canal: Panama'));
*/
//__The Two-Pointer Approach __//
/*
function isPalindromeTwoPointer(str) {
    const cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    let left = 0;
    let right = cleaned.length - 1;

    while(left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindromeTwoPointer("javascript"));
*/

// function fizzBuzz(n) {
//     let result = [];
//     for (let i = 1; i<= n; i++) {
//         if (i % 3 ===0 &&  i % 5 === 0){
//             result.push("FizzBuzz");
//         } else if (i % 3 ===0) {
//             result.push("Fizz");
//         } else if (i % 5 === 0) {
//             result.push("Buzz")
//         } else {
//             result.push(i.toString())
//         }
//     }
//     return result;
// }

// function reverseString(s) {
//     let start = 0;
//     let end = s.length - 1;

//     while(start < end ) {
//         let swap = s[start] 
//         s[start] = s[end]
//         s[end] = swap
//         start ++;
//         end--;
//     }
//     return s;
// }
// console.log(reverseString("hello"));

let name = "Shahidul";
console.log(name.length);

var strStr = function(haystack, needle) {
    for (let i = 0; i<=haystack.length - needle.length; i++) {
        let match = true;

        for (j = 0; j< needle.length; j++){
            if (haystack[i + j] !== needle[j]){
                match = false;
                break;
            }
        }
        if (match){
            return i
        }
    }
    return -i
};
