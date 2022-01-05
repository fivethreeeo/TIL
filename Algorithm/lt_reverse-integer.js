// https://leetcode.com/problems/reverse-integer

function reverse(x) {
  const reverse = Number(Math.abs(x).toString().split('').reverse().join(''));
  return reverse <= 2 ** 31 && reverse >= -1 * 2 ** 31 ? reverse * Math.sign(x) : 0;
}

reverse(0); // 0
reverse(-123); // -321
reverse(123); // 321
reverse(120); // 21
