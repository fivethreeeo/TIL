// https://programmers.co.kr/learn/courses/30/lessons/12930

// 공백을 기준으로 문자열을 쪼갠다. -> 단어들을 포함한 배열 생성
// map으로 단어를 하나씩 변환한다.
//   단어를 알파벳으로 쪼갠 후 -> 짝수인덱스->대문자, 홀수인덱스->소문자로 변환
//   변환된 알파벳을 join한다.
// 변환된 단어를 공백을 기준으로 다시 join한다.

function solution(s) {
  const words = s.split(' ');

  const convertedWords = words.map((word) =>
    word
      .split('')
      .map((alphabet, index) => {
        if (index % 2 === 0) return alphabet.toUpperCase();
        return alphabet.toLowerCase();
      })
      .join('')
  );

  const answer = convertedWords.join(' ');
  return answer;
}

// function convertWord(word) {
//   return word
//     .split('')
//     .map((alphabet, index) => {
//       if (index % 2 === 0) return alphabet.toUpperCase();
//       return alphabet.toLowerCase();
//     })
//     .join('');
// }

console.log(solution('try hello world'));
