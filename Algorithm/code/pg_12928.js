// https://programmers.co.kr/learn/courses/30/lessons/12910

// 1. 약수 배열 구하기 - 약수는 나눠서 0이 되는 수.
// 2. 약수 배열 전체 합 구하기

// 이 방법은 숫자가 3000이면 1~3000까지 모두 포함한 배열을 구하고 또 필터로 한번 순회하는 거라 시간이 오래 걸림
function solution1(n) {
  if (n === 0) return 0;

  const factors = [...Array(n)].map((_, i) => i + 1).filter((num) => n % num === 0);
  const sum = factors.reduce((a, c) => a + c);

  return sum;
}

// 더 빠른 방법. 루프를 한 번만 돔
function solution2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum = i + sum;
  }
  return sum;
}
