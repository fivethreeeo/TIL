##### 최초작성일 : 2021. 8. 13.<br><br>
# 06. 연산자 - 논리 NOT/OR/AND 연산자, 조건 연산자, 연산자 우선순위
[논리 NOT 연산자 (!)](#논리-not-연산자)  
[논리 OR 연산자 (||)](#논리-or-연산자)  
[논리 AND 연산자 (&&)](#논리-and-연산자)  
[조건 연산자 (3항)](#조건-연산자-3항-연산자)  
[연산자 우선순위](#연산자-우선순위)  
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

## **논리 OR 연산자**
- 형태 : `||`
- 표현식의 평가 결과가
  - **하나라도 `true`이면 `true`**
  - **아니면 `false`**
  - **평가 결과가 종료된 순간의 값을 반환**
- 왼쪽부터 오른쪽으로 평가
  - 왼쪽부터 읽기 시작해서 평가 결과가 `true' 가 나오는 순간 `true`, 이후의 오른쪽은 평가하지 않음.

```js
var value,
zero = 0,
one = 1;

console.log(value || zero || one);

//--[실행결과]--

1

//  1. value 는 undefined => false
//  2. zero 는 0 => false
//  3. one 은 1 =? true
//  4. 결과 값이 true가 나온 값인 1을 반환
```

- `true`이면 비교 종료!!!
```js
var zero = 0,
one = 1;

console.log(one || zero || value);

//--[실행결과]--

1

//  1. one 은 1 => true
//  2. 결과 값이 true가 나온 값인 1을 반환
//  3. 비교 종료

//  * value 는 선언되지 않은 값, 평가했다면 에러가 나옴.
```

<br><br>


## **논리 AND 연산자**
- 형태 : `&&`
- 표현식의 평가 결과가
  - **모두 `true`이면 `true`**
  - **아니면 `false`**
  - **평가 결과가 종료된 순간의 값을 반환**
- 왼쪽부터 오른쪽으로 평가
  - 왼쪽부터 읽기 시작해서 평가 결과가 `false' 가 나오는 순간 `false`, 이후의 오른쪽은 평가하지 않음.

```js
var one = 1,
two = 2;

console.log(one && two);
console.log(two && one);

//--[실행결과]--

2
1

//  one, two 둘 다 true
//  그래서 각각 평가 종료 시점의 one, two의 값을 반환
```
- `false`이면 비교 종료!!!
```js
var zero = 0,
two = 2;

console.log(two && zero && value);

//--[실행결과]--

0

//  1. two 은 2 => true
//  2. zero 는 0 => false
//  3. 결과 값이 false가 나온 zero의 값 0을 반환
//  3. 비교 종료

//  * value 는 선언되지 않은 값, 평가했다면 에러가 나옴.
```

<br><br>

## **조건 연산자 (3항 연산자)**
- **`exp ? exp1 : exp2`**
- exp 의 표현식을 먼저 평가
  - `true`일 경우 => `exp1`의 결과 반환
  - `false`일 경우 => `exp2`의 결과 반환

```js
console.log(1 === 1 ? "같음" : "다름"); //true
console.log(1 === "1" ? "같음" : "다름"); //false

//--[실행결과]--
같음
다름
```

<br><br>

## 연산자 우선순위
- [MDN 연산자 우선순위](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

<br><br>

---
### **Reference**
- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)
- [모던 Javascript 튜토리얼](https://ko.javascript.info/)
- [MDN 연산자 우선순위](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
