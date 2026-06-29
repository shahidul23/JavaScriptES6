// var buildArray = function(nums) {
//     let newArr = [];
//     for (let i = 0; i<=nums.length - 1; i ++) {
//         newArr[i] = nums[nums[i]];
//     }
//     return newArr;
// };

// var runningSum = function(nums) {
//     let sum = 0;
//     let newArr = [];
//     for (let i = 0; i< nums.length; i++){
//         sum += nums[i];
//         newArr[i] = sum;
//     }
//     return newArr;
// };

// var findMaxConsecutiveOnes = function(nums) {
//     let count = 0;
//     let recount = 0;
//     for (let i = 0; i<nums.length; i++){
//         if (nums[i] === 1) {
//             count ++;
//         }else {
//             count = 0;
//         }
//         if (count > recount) {
//             recount  = count;
//         }
//     }
//     return recount;
// };

// function countEventDigite(nums) {

//     let evenCount = 0;
//     for (let el of nums) {
//         let digite = 0;

//         while (el > 0) {
//             el = Math.floor(el/10);
//             digite ++
//         }
//         if (digite % 2 === 0) {
//             evenCount++;
//         }

//     }
//     return evenCount;

// }

// let arr = [34, 2, 454, 3455, 234234, 3, 2342, 232, 453];

// console.log(countEventDigite(arr));

// var removeDuplicates = function(nums) {
//     let firstEl = 0, secondEl = 1;
//     for (let idx = 0; idx<nums.length; idx++) {
//         if (nums[firstEl] !== nums[secondEl]){
//             firstEl++
//             nums[firstEl] = nums[secondEl];
//             secondEl++;
//         }else{
//             secondEl++
//         }
//     }
//     return nums;
// };

// let nums = [0,0,1,1,1,2,2,3,3,4];
// let low = 0
// for (let fast = 1; fast<nums.length; fast++) {
//     if (nums[low] !== nums[fast]) {
//         low++
//         nums[low] = nums[fast];
//     }
// }
// console.log(nums);
// let nums = [0,1,0,3,12];
// let low = 0
// for (let idx = 0; idx < nums.length; idx++) {
//     if (nums[idx] !== 0 ) {
//         nums[low] = nums[idx]
//         low++;
//     }
// }
// for (let i = low; i<nums.length; i++)
// {
//     nums[i] = 0;
// }
// console.log(nums);

// let nums = [-1,1,3,4,2];
// for (let idx = 0; idx<nums.length; idx++) {
//     for (let j = idx + 1; j < nums.length; j++){
//         if (nums[idx] === nums[j]){
//             console.log(true);
//             break;
//         }
//     }
// }

// ((let = numbers = [2, 7, 11, 15]), (target = 9));

// let sum = 0;
// let newArr = [];
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     sum = numbers[i] + numbers[j];
//     if (target === sum) {
//       newArr.push(i + 1);
//       newArr.push(j + 1);
//     }
//   }
// }
// console.log(newArr);
// var twoSum = function(numbers, target) {
//     let left = 0;
//     let right = numbers.length - 1;

//     while (left < right) {
//         let sum = numbers[left] + numbers[right];

//         if(target === sum){
//             return [left + 1, right+1];
//         }else if (sum < target) {
//             left ++;
//         }else{
//             right--;
//         }
//     }
// };

// let nums = [-4, -1, 0, 3, 10];

// let left = 0;
// let right = nums.length - 1;
// let result = new Array(nums.length);
// let index = nums.length - 1;
// while (left <= right) {
//   let leftSquer = nums[left] * nums[left];
//   let rightSquer = nums[right] * nums[right];
//   if(leftSquer > rightSquer) {
//     result[index] = leftSquer;
//     left ++;
//   }else{
//     result[index] = rightSquer;
//     right--;
//   }
//   index--;
// }
// console.log(result);

// let nums = [-1, 0, 1, 2, -1, -4];
// let array = new Array();

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     for (let k = j + 1; k < nums.length; k++) {
//       let sum = nums[i] + nums[j] + nums[k];
//       if (sum === 0) {

//         array.push([nums[i], nums[j], nums[k]]);
//       }
//     }
//   }
// }
// console.log(array);

let nums = [-1, 0, 1, 2, -1, -4];
let array = [];
nums.sort((a, b) => a - b);
for (let i = 0; i < nums.length - 2; i++) {
  if (i > 0 && nums[i] === nums[i - 1]) {
    continue;
  }
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[i] + nums[left] + nums[right];
    if (sum === 0) {
      array.push([nums[i], nums[left], nums[right]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(array);
