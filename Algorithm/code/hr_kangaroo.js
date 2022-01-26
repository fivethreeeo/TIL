// https://www.hackerrank.com/challenges/kangaroo/problem
// Time - 00:22:02

/*
  Input: x = starting position, v = jump distance
  Output: YES or NO

  Constraints :
    - x1 < x2
    - 1 <= v <= 10000

  1. 무조건 No인 경우
    - v1 <= v2

  2. 점프를 한 번 실행한 위치 값을 비교
    - (x1 === x2) 이면 YES
    - (x1 > x2) 이면 NO
    - (x1 or x2 > 10000) 이면 NO

    * 계속 점프한 위치값을 비교하지 않는 방법이 있을 것 같은데 못찾았다..
*/

function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) return 'NO';

  let state;

  const jump = (_x1, _v1, _x2, _v2) => {
    if (_x1 > _x2) state = 'NO';
    if (_x1 + _v1 === _x2 + _v2) state = 'YES';
    state || jump(_x1 + _v1, _v1, _x2 + _v2, _v2);
  };
  jump(x1, v1, x2, v2);

  return state;
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
