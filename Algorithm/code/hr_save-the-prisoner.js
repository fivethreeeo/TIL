// https://www.hackerrank.com/challenges/save-the-prisoner/problem
// Time -

/*
  Input
    n: the number of prisoners
    m: the number of sweets
    s: the chair number to start passing out treats at

  Output
    the chair number that get last sweet
*/

function saveThePrisoner(n, m, s) {
  const answer = (m + s - 1) % n ? (m + s - 1) % n : n;
  const answer2 = (m % n) + s - 1 ? (m % n) + s - 1 : n;
  return answer === answer2;
}

console.log(saveThePrisoner(5, 2, 1)); // 2
console.log(saveThePrisoner(5, 2, 2)); // 3
console.log(saveThePrisoner(7, 19, 2)); // 6
console.log(saveThePrisoner(3, 7, 3)); // 3
console.log(saveThePrisoner(352926151, 380324688, 94730870)); // 122129406
console.log(saveThePrisoner(499999999, 999999997, 2)); // 499999999
console.log(saveThePrisoner(499999999, 999999998, 2)); // 1
console.log(saveThePrisoner(999999999, 999999999, 1)); // 999999999
console.log(saveThePrisoner(999999999, 999999999, 2)); // 1
