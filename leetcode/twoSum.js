/* 
  The brute force approach is to solve this through a nested 
  loop, which will be O(n^2) in time (n being length of nums).
  To solve this in linear time we need to create
  a hash map for constant time look up. 
*/

function twoSum(nums, target){
  let map = {}
  let complement;
  for(let i=0; i<nums.length; i++){
    complement = target - nums[i]
    if(map.hasOwnProperty(complement)){
      return [i, map[complement]]
    }else{
      map[nums[i]]=i
  }

  console.log("There was no appropriate pair")
}






















































































