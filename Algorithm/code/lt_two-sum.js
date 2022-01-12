//https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];
  let answer;

  const length = nums.length;
  nums.some((int, index) => {
    for (let i = index + 1; i < length; i++) {
      if (int + nums[i] === target) {
        answer = [index, i];
        break;
      }
    }
    return answer;
  });
  return answer;
};

twoSum([2, 7, 11, 15], 9); // [0, 1]
twoSum([3, 2, 4], 6); // [1, 2]
twoSum([3, 3], 6); // [0, 1]
twoSum([3, 2, 3], 6); // [0, 2]

const twoSum2 = function (nums, target) {
  const length = nums.length;

  if (length === 2) return [0, 1];

  for (let i = 0; i < length; i++) {
    const num1 = nums[i];
    const num2 = target - num1;
    const num1Index = nums.indexOf(num1);
    const num2Index = nums.lastIndexOf(num2);
    if (nums.includes(num2) && num1Index !== num2Index) {
      return [num1Index, num2Index];
    }
  }
};

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));
console.log(twoSum2([3, 2, 3], 6));
