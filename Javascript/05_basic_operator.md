##### 최초작성일 : 2021. 8. 13.<br><br>
# 05. 연산자 - 동등, 일치, 부등, 불일치 연산자
[동등 연산자](#동등-연산자-)  
[일치 연산자](#일치-연산자-)  
[부등 연산자](#부등-연산자-)  
[불일치 연산자](#불일치-연산자-)  
[Reference](#reference)

<br><br>

## **동등 연산자 `==`**
- 왼쪽과 오른쪽 값이
  - **같으면 `true`**
  - **다르면 `false`**
- Type은 비교하지 않음

```js
var num = 123;
var str = "123";

console.log(num == str); //문자열은 숫자로 변환 후 비교
console.log(typeof num, typeof str);

//--[실행결과]--

true
number string
```

<br><br>

## **일치 연산자 `===`**
- 왼쪽과 오른쪽 값과 타입이
  - **값과 타입이 같으면 `true`**
  - **값 또는 타입이 다르면 `false`**

```js
var num = 123;
var str = "123";

console.log(num === str); //문자열은 숫자로 변환 후 비교
console.log(typeof num, typeof str);

//--[실행결과]--

false
number string
```

```js
// undedefined, null 비교

var result;

console.log(result == null);
console.log(result === null);

//--[실행결과]--

true
false
```

<br><br>

## **부등 연산자 `!=`**
- 왼쪽과 오른쪽 값이
  - **다르면 `true`**
  - **같으면 `false`**
- Type은 비교하지 않음
- `a != b` 와 `!(a == b)`가 같음

```js
var num = 200;
var str = "200";

console.log(num != str);
console.log(typeof num, typeof str);

//--[실행결과]--

true
number string
```

```js
//a!= b 와 !(a == b)
console.log(123 != "123");
console.log(!(123 == "123"));

//--[실행결과]--

false
false
```

<br><br>

## **불일치 연산자 `!==`**
- 왼쪽과 오른쪽 값과 타입이
  - **값과 타입이 같으면 `false`**
  - **값 또는 타입이 다르면 `true`**
- **`a !== b`** 와 **`!(a === b)`** 가 같음

```js
var num = 200;
var str = "200";

console.log(num !== str);
console.log(typeof num, typeof str);

//--[실행결과]--

true
number string
```

```js
//a!== b 와 !(a === b)
console.log(123 !== "123");
console.log(!(123 === "123"));

//--[실행결과]--

true
true
```

<br><br>
---
### **Reference**
- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)

<br><br>
---
##### [다음 06. 연산자 - 논리 NOT/OR/AND 연산자, 조건 연산자, 연산자 우선순위](https://github.com/mansaout/TIL/blob/main/Javascript/06_grammar_operator.md)
##### [이전 04. 연산자 - 후치, 전치, 관계 연산자 그리고 유니코드/UTF](https://github.com/mansaout/TIL/blob/main/Javascript/04_grammar_operator.md)
