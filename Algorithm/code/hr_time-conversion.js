// https://www.hackerrank.com/challenges/time-conversion/problem
// Time - 00:34:36

/*
  Input: A single string 's' that represents a time in 12-hour clock format
  Output: A string that represents a time 24-hour clock format

  1. 새로운 시간 구하기
    - 12시 이고, AM이면 '00'
    - 12시가 아니고, PM이면 '기존시간+12'

  2. 새로운 포맷으로 만들기
    - 기존 시간에서 시간 부분, 맨뒤 AM/PM 부분을 자르고
    - 맨 앞에 새로구한 시간을 붙인다.
*/

function timeConversion(s) {
  const type = s.slice(8); // AM or PM
  let hour = s.slice(0, 2);

  if (hour === '12' && type === 'AM') hour = hour.replace(hour, '00');
  if (hour !== '12' && type === 'PM') hour = String(Number(hour) + 12);

  const format24hour = hour + s.slice(2, 8);
  return format24hour;
}

console.log(timeConversion('07:05:45PM')); // 19:05:45
console.log(timeConversion('12:01:01AM')); // 00:01:01
