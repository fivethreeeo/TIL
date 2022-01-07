// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const answer = [0, 0, 0];
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((number, index) => {
    number === a1[index % a1.length] && answer[0]++;
    number === a2[index % a2.length] && answer[1]++;
    number === a3[index % a3.length] && answer[2]++;
  });

  const max = Math.max(answer[0], answer[1], answer[2]);

  const result = [];
  answer[0] === max && result.push(1);
  answer[1] === max && result.push(2);
  answer[2] === max && result.push(3);

  return result;
}

solution([1, 2, 3, 4, 5]); // [1]
solution([1, 3, 2, 4, 2]); // [1, 2, 3]
solution([2, 4, 5, 1, 4]); // [2, 3]
solution([5, 4, 5, 3, 1]); // [2]
solution([3, 3, 3, 4, 1]); // [1, 3]
