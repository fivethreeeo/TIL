// https://programmers.co.kr/learn/courses/30/lessons/64061

// moves의 값을 하나씩 순회한다. (크레인을 한 번씩 움직인다.)
// 보드의 row를 하나씩 순회하면서 크레인 위치의 값을 확인한다.
// 값이 있으면
//   바구니의 마지막 인형과 값이 같으면  count++, 바구니의 마지막 인형 pop, 보드의 값 자리에 0 할당
//   바구니의 마지막 인형과 값이 다르면 바구니에 인형 push, 보드의 값 자리에 0 할당
// 값이 없으면 리턴.
// count 리턴

function dollPicker(board, moves) {
  const positions = moves.map((v) => v - 1);
  const basket = [];
  let count = 0;

  positions.forEach((position) => {
    board.some((row) => {
      if (!row[position]) return false;

      if (row[position] === basket[basket.length - 1]) {
        basket.pop();
        count += 2;
      } else {
        basket.push(row[position]);
      }
      row[position] = 0;
      return true;
    });
  });

  return count;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(dollPicker(board, moves));
