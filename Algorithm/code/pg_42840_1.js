// https://programmers.co.kr/learn/courses/30/lessons/42840

// 찍는 방식을 패턴화함
// 패턴별로 문제 순서를 패턴길이로 나눠서 답 비교 => 정답 개수 구함
// 제일 많이 맞춘 정답 개수 찾기(max)
// max와 패턴별 맞춘 개수가 같으면 해당 패턴이 제일 맞이 맞춘 패턴임으로 결과에 푸시
// 패턴 1 -> 2 -> 3 순서로 하면 자연스럽게 오름차순 정렬

function solution(answers) {
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const a1 = answers.filter((answer, index) => answer === pattern1[index % pattern1.length]).length;
  const a2 = answers.filter((answer, index) => answer === pattern2[index % pattern2.length]).length;
  const a3 = answers.filter((answer, index) => answer === pattern3[index % pattern3.length]).length;
  const max = Math.max(a1, a2, a3);

  const result = [];
  a1 === max && result.push(1);
  a2 === max && result.push(2);
  a3 === max && result.push(3);

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([2, 1, 2, 3, 2]));
console.log(solution([1, 3, 2, 4, 2]));
