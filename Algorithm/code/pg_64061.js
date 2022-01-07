// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  const _moves = moves.map((number) => number - 1);
  const basket = [];
  let count = 0;

  _moves.forEach((number) => {
    board.some((row) => {
      if (row[number] !== 0) {
        if (row[number] === basket[basket.length - 1]) {
          basket.pop();
          count += 2;
        } else {
          basket.push(row[number]);
        }
        row[number] = 0;

        return true;
      }
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
solution(board, moves);
