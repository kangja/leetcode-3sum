
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
// Input: nums = [-1,0,1,2,-1,-4]

// SORT THE NUMS IN ORDER FIRST 
// [-4, -1, -1, 0, 1, 2]

// i will start at the beginning
// j will start 1 after i
// k will start at the end 


// OUTPUT?
// [ [ -4 ], [ -1 ], [ 2 ] ],
// [ [ -4 ], [ -1 ], [ 2 ] ],
// [ [ -4 ], [ 0 ], [ 2 ] ],
// [ [ -4 ], [ 1 ], [ 2 ] ],
// [ [ -4 ], [ 2 ], [ 2 ] ],
// [ [ -1 ], [ -1 ], [ 2 ] ],
// [ [ -1 ], [ 0 ], [ 2 ] ],
// [ [ -1 ], [ 1 ], [ 2 ] ],
// [ [ -1 ], [ 2 ], [ 2 ] ],
// [ [ -1 ], [ 0 ], [ 2 ] ],
// [ [ -1 ], [ 1 ], [ 2 ] ],
// [ [ -1 ], [ 2 ], [ 2 ] ],
// [ [ 0 ], [ 1 ], [ 2 ] ],
// [ [ 0 ], [ 2 ], [ 2 ] ],
// [ [ 1 ], [ 2 ], [ 2 ] ]


// IF THERE IS A DUPLICATE, GET RID OF THE DUPLICATE

//IF [i+j+k]= 0, PUT IT IN THE EMPTY ARRAY AND RETURN IT!

// CODE 
var threeSum = function (nums) {

  let emptyArray = []

  nums.sort(function (a, b) {
    return a - b
  });

  if (nums.length < 2) {
    return [];
  }

  for (let i = 0; i < nums.length - 2; i++) {
    let numberOne = [nums[i]];
    for (let j = i + 1; j < nums.length - 1; j++) {
      let numberTwo = [nums[j]];
      for (let k = (j + 1); k < nums.length; k++) {
        let numberThree = [nums[k]];
        if (numberOne + numberTwo + numberThree === 0) {
          emptyArray.push([numberOne, numberTwo, numberThree])
        }
      }  
    } 
  }
    return emptyArray
  }

console.log(threeSum([-1,0,1,2,-1,-4])) 
