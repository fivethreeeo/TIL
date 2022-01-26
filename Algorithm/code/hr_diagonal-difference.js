// https://www.hackerrank.com/challenges/diagonal-difference/problem
// Time - 00:26:72

/*
  Input: 2D Integer Array
  Output: Single Integer

  1. Sum across the primary diagonal (left to right)
  2. Sum across the secondary diagonal (right to left)
  3. Get difference 1 between 2 (be absolute)

  - arr를 순회한다.
    - a = 순회하면서 각 배열별로 firstIndex, +1, +2, +3... 전부 더한 값
    - b = 순회하면서 각 배열별로 lastIndex, -1, -2, -3... 전부 더한 값
  - result = a - b 의 절대값
*/

function diagonalDifference(arr) {
  let primary = 0;
  let secondary = 0;

  arr.forEach((innerArr, index) => {
    primary += innerArr[index];
    secondary += innerArr[arr.length - index - 1];
  });

  return Math.abs(primary - secondary);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
); //15
