/* 
  The brute force approach is to solve this through a nested 
  loop, which will be O(n^2) in time (n being length of nums).
  To solve this in linear time we need to create
  a hash map for constant time look up. 

  

*/

const twoSum = (nums, target) => {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i]

    if (nums.hasOwnProperty(diff)) {
      return [i, map[diff]]
    }

    map[nums[i]] = i
  }

}



// [a,b,c,d], [b_index , d_index]

// { a: 0}
// {a:0, b:1}
// {a:0, b:1, c:2}
// {a:0, b:1, c:2}


// brute force approach

function twoSumFn(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }
  }
}


// [1,2,3,4], target is 7
const startTime = performance.now();

console.log(twoSumFn([1, 2, 3, 4], 7))

const endTime = performance.now()

console.log(endTime - startTime)






function twoSumOnmeballz(nums, target) {
  map = {};

  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return ([i, map[complement]]);
    }
    map[nums[i]] = i;
  }


}























