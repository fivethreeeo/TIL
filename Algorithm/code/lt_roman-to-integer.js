//https://leetcode.com/problems/roman-to-integer/

// s를 문자 하나하나 나눈 배열 생성
// 배열의 문자 하나하늘 체크
//   - 문자 하나하나 마다 로마 숫자를 더함
//   - 앞에 문자가 뭐였는지에 맞춰 다른 값 더함

var romanToInt = function (s) {
  const alphabet = s.split('');
  let intValue = 0;
  let tempWord;
  alphabet.forEach((word) => {
    switch (word) {
      case 'I':
        intValue += 1;
        break;
      case 'V':
        tempWord === 'I' ? (intValue += 3) : (intValue += 5);
        break;
      case 'X':
        tempWord === 'I' ? (intValue += 8) : (intValue += 10);
        break;
      case 'L':
        tempWord === 'X' ? (intValue += 30) : (intValue += 50);
        break;
      case 'C':
        tempWord === 'X' ? (intValue += 80) : (intValue += 100);
        break;
      case 'D':
        tempWord === 'C' ? (intValue += 300) : (intValue += 500);
        break;
      case 'M':
        tempWord === 'C' ? (intValue += 800) : (intValue += 1000);
        break;
    }
    tempWord = word;
  });
  return intValue;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
