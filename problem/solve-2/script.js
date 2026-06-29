// let nums = [-1, 0, 1, 2, -1, -4];
// let result = [];
// nums.sort((a, b) => a - b);
// for (let i = 0; i < nums.length - 2; i++) {
//   if (i > 0 && nums[i] === nums[i - 1]) {
//     continue;
//   }
//   let left = i + 1;
//   let right = nums.length - 1;
//   while (left < right) {
//     let sum = nums[i] + nums[left] + nums[right];
//     if (sum === 0) {
//       result.push([nums[i], nums[left], nums[right]]);
//       left++;
//       right--;
//       while (left < right && nums[left] === nums[left - 1]) {
//         left++;
//       }
//       while (left < right && nums[right] === nums[right + 1]) {
//         right--;
//       }
//     } else if (sum < 0) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }
// console.log(result);

// let nums = [1, 12, -5, -6, 50, 3],
//   k = 4;

// let maxAvg = 0;
// for (let i = 0; i <= nums.length - k; i++) {
//   let sum = 0;
//   for (let j = i; j < i + k; j++) {
//     sum = sum + nums[j];
//   }
//   let avg = sum / k;
//   maxAvg = Math.max(maxAvg, avg);
// }
// console.log(maxAvg);

// let nums = [1, 12, -5, -6, 50, 3],
//   k = 4;
// let sum = 0;

// for (let i = 0; i < k; i++) {
//   sum += nums[i];
// }
// let maxAvg = sum / k;
// for (let i = k; i < nums.length; i++) {
//   sum = sum - nums[i - k] + nums[i];
//   let avg = sum / k;
//   maxAvg = Math.max(avg, maxAvg);
// }
// console.log(maxAvg);

// let prices = [7, 6, 4, 3, 1];

// let buy = Infinity;
// let sell = Infinity;
// let index = -1;
// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] < prices[i + 1]) {
//     if (buy > prices[i]) {
//       buy = prices[i];
//       index = i;
//     }
//   }
// }
// for (let j = index; j < prices.length; j++) {
//   if (prices[j] > prices[j + 1]) {
//     sell = prices[j];
//     if (sell < prices[j]) {
//       sell = prices[j];
//     }
//   }
// }
// let profite = sell - buy;
// if (profite > 0) {
//   console.log(profite);
// } else {
//   console.log(0);
// }

// let prices = [7, 1, 5, 3, 6, 4];
// let minPrice = Infinity;
// let maxPrice = 0;

// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] < minPrice) {
//     minPrice = prices[i];
//   }
//   let profit = prices[i] - minPrice;
//   maxPrice = Math.max(profit, maxPrice);
// }
// console.log(maxPrice);

// let s = "A man, a plan, a canal: Panama";

// let subStr = s.toLowerCase().replace(/[^a-zA-Z]/g, "");
// let left = 0;
// let right = subStr.length - 1;
// while (left <= right) {
//   if (subStr[left] !== subStr[right]) {
//     console.log(false);
//   } else {
//     left++;
//     right--;
//   }
// }
// console.log(true);
// let s = "abciiidef",
//   k = 3;
// let maxCount = 0;
// let maxVowels = "";
// for (let i = 0; i < s.length - k; i++) {
//   let subStr = s.substring(i, i + k);
//   let count = 0;
//   for (el of subStr) {
//     if ("aeiou".includes(el)) {
//       count++;
//     }
//   }
//   if (maxCount < count) {
//     maxCount = count;
//     maxVowels = subStr;
//   }
// }
// console.log(maxVowels);

// let count = 0;
// for (let i = 0; i < k; i++) {
//   if ("aeiou".includes(s[i])) {
//     count++;
//   }
// }
// let maxCount = count;
// for (let i = k; i < s.length; i++) {
//   console.log(s[i - k]);
//   if ("aeiou".includes(s[i - k])) {
//     count--;
//   }
//   console.log(s[i]);
//   if ("aeiou".includes(s[i])) {
//     count++;
//   }
//   maxCount = Math.max(maxCount, count);
// }
// console.log(maxCount);

let s = "abcabcbb";

let set = new Set();
let left = 0;
let maxLength = 0;

for (let i = 0; i < s.length; i++) {
  while (set.has(s[i])) {
    set.delete(s[left]);
    left++;
  }
  set.add(s[i]);
  maxLength = Math.max(maxLength, i - left + 1);
}
console.log(maxLength);
