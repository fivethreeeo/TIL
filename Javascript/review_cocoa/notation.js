/*
  2021. 12. 19

  [프로그래밍 순서]
    1) 예외처리 -> 에러 메시지 & 종료
    2) 게임에서 말해야 할 총 숫자를 배열로 구함. totalNumbers
    3) totalNumbers의 숫자들을 n진수로 변환 -> n진수로 변환된 숫자들을 전부 1글자로 split. 
    4) 전체 답변에서 filter로 내 순서만 찾아 배열로 구함 -> 내 차례 답변

  [예외처리]
    1) 변경할 진수가 2~16이 아닐 경우
    2) 내 차례 순번이 참가자 수 보다 클 경우

  [노트]
    1) 구조 변경
      - 이전 풀이는 사용자 입력이 circle일 경우, getCircle를 호출하고, getCircle 안에서 매개변수에 따라 getCircles를 또 호출하는 구조이다.
      - 이럴 경우, 메인 함수 getArea만 보고는 getCircles까지 가는 로직을 정확하게 이해하기 어렵다.
      - 중간에 사용자 입력에 맞춰 정확한 figure를 구하는 과정을 추가했다. 그리고 그 figure에 맞춰 필요한 함수를 바로 출력할 수 있도록 수정했다.
      - 메인 함수 getArea만 봐도 전체 구조를 더 잘 파악할 수 있도록 변경했다.

    2) 예외처리 추가
      - 기존보다 더 넓은 범위의 예외처리를 추가했다.

    3) switch문 -> if문 변경
      - 개인적으로 if문이 더 간결하고 가독성이 뛰어난 것 같아서 변경했다.
      - 문 안에서 특별한 로직이 있는게 아니라 한 줄짜리 간단한 식이라 {}, break, case 등을 더 써야하는 switch문이 더 복잡한 것 같다.
      - if문으로 한 줄로 간단하게 처리가 가능하다.

    4)
      - Math.PI
      - Math.pow(숫자, 제곱)
*/

function playNotationGame(notation, numberCount, playerCount, myTurn) {
  if (!isVaildArgs(notation, playerCount, myTurn)) return;

  const totalCount = numberCount * playerCount;
  const totalNumbers = [...Array(totalCount).keys()];
  const convertedNumbers = totalNumbers.map((num) => num.toString(notation));

  console.log(convertedNumbers);
  const allAnswer = [];

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
