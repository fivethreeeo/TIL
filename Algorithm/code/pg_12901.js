// https://programmers.co.kr/learn/courses/30/lessons/12901

// 1. a, b 를 받아서 date인스턴스 구하기
// 2. 요일 배열 만들기
// 3. getDay()로 요일 인덱스 구해 요일 문자열 리턴

// date 메서드를 사용하는게 안좋은 걸까..? 알고리즘에 한해서만..

function solution(a, b) {
  const month = String(a).length === 1 ? 0 + String(a) : String(a);
  const date = String(b).length === 1 ? 0 + String(b) : String(b);
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayIndex = new Date(`2016-${month}-${date}`).getDay();

  return week[dayIndex];
}

console.log(solution(1, 1));
