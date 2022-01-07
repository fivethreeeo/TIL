// https://www.acmicpc.net/problem/1009

/*
  1차 풀이 :
    숫자 num을 count만큼 거듭제곱을 하는데 끝자리만 알면 되니까
    제곱한 수의 끝자리와 숫자 num를 계속 반복 곱셈하고, 최종으로 나온 숫자의 끝자리를 출력.

  2차 풀이 :
    거듭제곱수가 1,000,000 까지 올라가는데 연산이 너무 큰 것 같음...
    끝자리만 확인하면 되니까 거듭제곱했을 때 나오는 끝자리의 패턴을 파악해서,
    실제로 거듭제곱을 전부 하지 않고 거듭제곱의 숫자로 끝자리를 찾는다.

  //rl.close();
*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = [];

const endDigitSet = {
  1: [1],
  2: [6, 2, 4, 8],
  3: [1, 3, 9, 7],
  4: [6, 4],
  5: [5],
  6: [6],
  7: [1, 7, 9, 3],
  8: [6, 8, 4, 2],
  9: [1, 9],
  0: [10],
};

let limitCount = null;
let count = 0;

rl.on('line', (input) => {
  if (!limitCount) {
    limitCount = Number(input);
    return;
  }

  count++;

  const [base, exponent] = input.split(' ');
  const baseEndDigit = base.slice(-1);
  const endDigitIndex = exponent % endDigitSet[baseEndDigit].length;
  const endDigit = endDigitSet[baseEndDigit][endDigitIndex];

  answer.push(endDigit);

  if (count === limitCount) {
    answer.forEach((value) => console.log(value));
    rl.close();
  }
});
