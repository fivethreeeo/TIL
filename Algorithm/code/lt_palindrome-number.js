//https://leetcode.com/problems/merge-two-sorted-lists/

// 음수 -> false
// 0 -> true
// 양수 -> 리버스한 것과 비교
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x === 0) return true;
  const reverse = String(x).split('').reverse().join('');
  return x == reverse;
};

console.log(isPalindrome(1231));
