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

    map[diff] = i
  }

}
