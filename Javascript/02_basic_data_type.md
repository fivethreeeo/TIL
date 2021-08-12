##### 최초작성일 : 2021. 8. 11.<br><br>
# 02. 데이터 타입 - Number, String, Undefined, Null, Boolean, Object
[데이터타입](#데이터-타입-data-type)  
[Number](#number-type)  
[String](#string-type)  
[Undefined](#undefined-type)  
[Null](#null-type)  
[Boolean](#boolean-type)  
[Object](#object-type)  
[정리](#기본-데이터-타입-정리)  
[Reference](#reference)

<br><br>

## **데이터 타입 (Data Type)**
- Number, String, Undefined, Null, Boolean, Object
- `자료형`이라고도 부름
- 데이터는 타입을 가짐, js는 데이터를 기준으로 타입을 결정
- **`typeof`** 연산자 - 데이터 타입 확인 가능

```js
var ssc = "seoul";
console.log(typeof ssc);

//--[실행결과]--

string
```

<br><br>

## **Number Type**
- 부호(+, -)를 가진 값

```js
var pointA = 123;
var pointB = -123;

console.log(typeof pointA);
console.log(typeof pointB);

//--[실행결과]--

number
number
```

- Number Type의 특수한 3개 값
  - `Infinity` : 양수 무한대
  - `-Infinity` : 음수 무한대
  - `NaN` : Not a Number
    - **값이 숫자가 아닌 것을 나타내는 값**
    - 프로그램을 죽지 않게 하려는 특성.
    - 숫자를 만들 수 없는 경우 숫자가 아닌 것을 나타내는 값을 부여
```js
var multiply = 123 * "string";

console.log(multiply, typeof multiply);

//--[실행결과]--

NaN "number"
```

<br><br>

## **String Type**
- 문자 타입
- `"", ''` 사이에 작성
- 따옴표에 숫자를 작성하면 문자 타입이 됨

```js
var iphoneVersion = "20";

console.log(iphoneVersion, typeof iphoneVersion);

--[실행결과]--

20 "string"
```

<br><br>

## **Undefined Type**
- **Undefined** : 타입
- **undefined** : 값
- 변수에 값을 할당하지 않은 것을 나타내는 Sementic
- 변수의 디폴트 값
- 변수에 undefined 할당 가능

```js
var age;
var height = undefined;//변수에 undefined 값을 할당

console.log(age, typeof age);
console.log(height, typeof height);

//--[실행결과]--

undefined "undefined"

//초기값인지 값을 할당한 것인지 구분이 되지 않음
//할당하여 사용 xxxxx
//대신 null을 할당함
```

<br><br>

## **Null Type**
- **Null** : 타입
- **null** : 값
- **null과 undefined의 차이**
  -  **undefined**는 변수만 선언(할당x)
  -  **null**은 값을 **할당해야 null**이 됨

```js
//변수만 선언
var foot;

//변수에 null을 할당
var hand = null;

console.log(foot, typeof foot);
console.log(hand, typeof hand);

//--[실행결과]--

undefined "undefined"
null "object" //자바스크립트 설계. Null타입이 맞다
```

<br><br>

## **Boolean Type**
- 값: true, false
```js
console.log(true, typeof true);
console.log(false, typeof false);

//--[실행결과]--

true "boolean"
false "boolean"
```

<br><br>

## **Object Type**
- Object 형태
  - {name: value}
  - name과 value 한 쌍을 **Property** 라고 함
  - name을 key 라고도 함
  - Object는 0개 이상의 Property 집합

```js
//property 0개
var pensil = {};

//property 2개
var book ={
  title: "book1",
  pages: 500
};

console.log(pensil, typeof pensil);
console.log(book, typeof pensil);

//--[실행결과]--

{} "object"
{title: "book1", pages: 500} "object"
```
<br><br>

## **기본 데이터 타입 정리**
- **Primitive Type** 이라고 함
- Number, String, Boolean, Undefined, Null, Symbol(ES6 추가)

```js
var aa;
var bb = null;

console.log(
  typeof 123,
  typeof "String",
  typeof true,
  typeof aa,
  typeof bb

);

//--[실행결과]--

number string boolean undefined object
```

<br><br>

---
### **Reference**
- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)
- [모던 Javascript 튜토리얼](https://ko.javascript.info/)
