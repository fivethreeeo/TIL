// https://programmers.co.kr/learn/courses/30/lessons/42748

// 커맨드를 하나씩 돌아가면서 array 연산을 한다.
//  i~j까지 자르기 / 오름차순 정렬하기 / k번째 숫자 찾기
// 찾은숫자들을 배열에 넣어 리턴한다.

// commands는 개별 command를 배열의 값으로 가진다.
// command를 이용해서 숫자 값 하나를 찾아야하기 떄문에
// commands에서 map을 이용해서 내부 값을 결과 값으로 바꿔서 바로 제출.

function solution(array, commands) {
  const answer = commands.map((command) => {
    const [i, j, k] = command;
    const sliced = array.slice(i - 1, j).sort((a, b) => a - b);
    return sliced[k - 1];
  });

  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
