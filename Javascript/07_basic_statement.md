##### 최초작성일 : 2021. 8. 18.<br><br>
# 07. 문장 - 
[]()  
[Reference](#reference)

<br><br>

## **논리 NOT 연산자**
- 형태 : `!value`
- 표현식의 평가 결과를 true, false로 반환 후,<br>
**true 면 => false 반환<br>
false 면 => true 반환**
- 원래 값은 변환되지 않으며 사용할 때만 변환

```js
var value = true;

console.log(!value, value);
console.log(typeof !value, typeof value);

var result = 123;

console.log(!result, result);
console.log(typeof !result, typeof result);

//--[실행결과]--

false true
boolean, boolean

false 123
boolean number
```

<br><br>
---
### **Reference**
- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)

<br><br>
---
##### [이전 06. 연산자 - 논리 NOT/OR/AND 연산자, 조건 연산자, 연산자 우선순위](https://github.com/mansaout/TIL/blob/main/Javascript/06_basic_operator.md)  