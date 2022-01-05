// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const number = numbers[i] + numbers[j];
      if (result.find((element) => element === number) === undefined) {
        result.push(number);
      }
    }
  }
  result.sort((a, b) => a - b);

  return result;
}

/* 

- 첫 번째 풀이
- shift() 써서 배열의 첫 번째를 지우는 게 성능이 안 좋음.
- 그리고 애초에 정해진 index부터 시작하면 굳이 shift()를 쓸 이유가 없음
- for문을 중첩해서 정해진 index부터 시작하게 변경함

    function solution(numbers) {
      const numbersLength = numbers.length;
      const newNumbers = [];
      for (let i = 0; i < numbersLength; i++) {
        numbers.forEach((number, index) => {
          const num = numbers[0] + numbers[index + 1];
          if (!isNaN(num) && newNumbers.find((number) => number === num) === undefined) {
            newNumbers.push(num);
          }
        });
        numbers.shift();
      }
      newNumbers.sort((a, b) => a - b);
      return newNumbers;
    }
 */
