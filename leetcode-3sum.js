
//******************************************************************************************************************************************************** 
//3Sum

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]


// Example 2:
// Input: nums = []
// Output: []


// Example 3:
// Input: nums = [0]
// Output: []
//******************************************************************************************************************************************************** 


// PSEUDOCODE

//Input: nums = [-1,0,1,2,-1,-4]
//initiate an empty array and push the combination here.

//if nums.length is less than or equal to 1, return [].

// 3 for loops. i will be the first number; j will the i+1; k will the last number
//the result will be [-1, 0, -4], [-1, 1, -4], [-1,2,-4], [-1, -1, -4]
//the result will be [0, 1, -4], [0, 2, -4], [0, -1, -4], [0, -1, -4]
// etc

// sort the result in lowest to highest number

// get rid of the duplicates

// if addition of three numbers = 0, only return the number.

// *******************************************************************************************************************************************************



// CODE 
var threeSum = function (nums) {
  let emptyArray = [];

  if (nums.length <= 1) {
    return [];
  }

  nums.sort((a, b) => a - b);
  // console.log(nums)
  
  for (let i = 0; i < (nums.length - 2); i++) {
    let firstNumber = nums[i];

    for (let j = (i + 1); j < (nums.length - 1); j++) {
      let secondNumber = nums[j];

      for (let k = (nums.length - 1); k < nums.length; k++) {
        let thirdNumber = nums[k];

        emptyArray.push([firstNumber, secondNumber, thirdNumber]);
      }
    }
  }
  
      return Array.from(new Set(emptyArray))
}

// console.log(threeSum([0]))
console.log(threeSum([-1,0,1,2,-1,-4])) 






// arr = arr.filter (function (value, index, array) { 
//   return array.indexOf (value) == index;
// });