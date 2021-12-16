// 게임에서 말해야 할 총 숫자를 배열로 구함 -> 숫자들을 n진수로 변환
// n진수로 변환된 숫자들을 전부 1글자로 split -> 전체 답변
// 전체 답변에서 filter로 내 순서만 찾아 배열로 구함 -> 내 차례 답변

function playNotationGame(notation, numberCount, playerCount, myTurn) {
  if (!isVaildArgs(notation, playerCount, myTurn)) {
    return;
  }

  const totalCount = numberCount * playerCount;
  const totalNumbers = [...Array(totalCount).keys()];

  const allAnswer = totalNumbers
    .map((decimal) => decimal.toString(notation))
    .join('')
    .split('');

  const myFirstIndex = myTurn - 1;
  const myAnswer = allAnswer.filter(
    (n, index) => index % playerCount === myFirstIndex
  );

  console.log(`\n전체 답변: ${allAnswer}` + `\n내 차례 답변: ${myAnswer}`);
}

function isVaildArgs(notation, playerCount, myTurn) {
  if (notation < 1 || notation > 17) {
    console.log('진수는 2~16 중에 입력하세요.');
    return false;
  }
  if (myTurn <= 0 || myTurn > playerCount) {
    console.log('내 차례가 올바르지 않습니다.');
    return false;
  }
  return true;
}

playNotationGame(2, 3, 3, 2);

/*
  =============== note ===============

  - parseInt(30, 8); 8진수의 30을 10진수 변환
  - toString(n) n진수로 변환

  - Array.from()
  - Array.keys()
  - Object.keys()

  const arr = Array.from({ length: totalCount }, (v, i) => i);

*/
