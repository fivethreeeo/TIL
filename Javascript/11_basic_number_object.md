##### 최초작성일 : 2021. 8. 20.<br><br>
# 11. 객체 - Number Object (Property List, )
[Property List](#property-list)  
[Number()](#number)  
[Number 상수](#number-상수)  
[new 연산자 - 인스턴스 생성](#new-연산자---인스턴스-생성)  
[new Number(), 인스턴스 형태](#new-number-인스턴스-형태)  
[Primitive 값/타입](#primitive-값타입)  
[valueOf()](#valueOf)  
[toString()](#tostring)  
[toLocaleString()](#tolocalestring)  
[toExponential()](#toExponential)  
[toFixed()](#tofixed)  
[Reference](#reference)

## Number Object
- 숫자 처리를 위한 오브젝트
- 숫자 처리를 위한 함수와 프로퍼티가 포함, 함수를 호출하여 숫자를 처리

<br><br>

## Property List

<table>
    <tr><th> new Number() </th><th>Number 인스턴스 생성</th></tr>
</table>

- Number 함수
<table>
    <tr><td>Number()</td><td>숫자 값으로 변환하여 반환</td></tr>
</table>

- **Number.prototype**
<table>
    <tr><td>constructor</td><td>생성자</td></tr>
    <tr><td>toString()</td><td>숫자 값을 문자열로 반환</td></tr>
    <tr><td>toLocaleString()</td><td>숫자 값을 지역화 문자로 반환</td></tr>
    <tr><td>valueOf()</td><td>Primitive 값 반환</td></tr>
    <tr><td>toExponential()</td><td>지수 표기로 변환</td></tr>
    <tr><td>toFixed()</td><td>고정 소숫점 표기로 변환</td></tr>
    <tr><td>toPrecision()</td><td>고정 소숫점 또는 지수 표기로 변환</td></tr>
</table>

<br><br>

## Number()
- 파라미터 값을 Number 타입으로 변환
- 파타미터 값을 넣지 않을 경우 : 0 반환
- String 타입의 경우 : 값이 숫자이면 변환
- 숫자로 변환할 수 있으면 변환 (진수, boolean, null, undefined)

```js
console.log(
    Number(),
    Number(123), //number
    Number("123"), //string
    Number("abc"), //string
    Number(0x14), //진수
    Number(true), //boolean
    Number(false), //boolean
    Number(null), //null
    Number(undefined) //undefined
);

//--[실행결과]--

0
123
123
NaN
20
1
0
0
NaN
```

<br><br>

## Number 상수
- 상수는 값을 변경, 삭제할 수 없음

|상수 이름|값|
|--|--|
|`Number.MAX_VALUE`|1.7976931348623157e+308(308승)|
|`Number.MIN_VALUE`|5e-324(-324승)|
|`Number.NaN`|NaN|
|`Number.POSITIVE_INFINITY`|Infinity|
|`Number.NEGATIVE_INFINITY`|-Infinity|

```js
console.log(
    Number(Number.MAX_VALUE),
    Number(Number.MIN_VALUE),
    Number(Number.NaN),
    Number(Number.POSITIVE_INFINITY),
    Number(Number.NEGATIVE_INFINITY)
);

//--[실행결과]--
1.7976931348623157e+308
5e-324
NaN
Infinity
-Infinity
```

<br><br>

## new 연산자 - 인스턴스 생성
- **new 연산자**로 함수를 호출하면, 호출된 함수를 **생성자(constructor) 함수** 라고 함
- 생성자 함수를 호출하면 **인스턴스를 반환**
- 인스턴스를 복사하는 개념
- 첫 문자를 대문자로 작성

```js
var makeInstance = new Number(1); // Bulit-in Number오브젝트로 인스턴스를 생성해 반환

console.log(
    makeInstance,
    typeof makeInstance,
  );

//--[실행결과]--

Number {1} //Primitive 값이 1
object // 인스턴스는 object 타입
```

## new Number(), 인스턴스 형태
```js
window.onload = function() {
    "use strict"

    debugger;

    var numberObject = Number;

    var obj = new Number("123");
    /*
        1. 새로 생성한 Number 인스턴스가 obj에 할당
        2. Local의 obj > __proto__ > [[PrimitiveValue]]: 123
    */

    debugger;

    var proto = obj.__proto__;

    /*
        인스턴스를 생성할 때 전부 복사를 하는 게 아니고
        numberObject > prototype: Number 안의 내용만 복사

        numberObject.prototype === obj.[[Prototype]]
    */

    debugger;
}
```

<br><br>

## Primitive 값/타입
- Primitive Value
  - 언어에 있어 가장 낮은 단계의 값
  - 더 이상 분해/전개 할 수 없는 값
- Primitive Type
  - Number, String, Boolean : 인스턴스 생성 가능
  - Null, Undefined : 인스턴스 생성 불가
  - Object는 Primitive Value를 제공하지 않음

```js
var obj = {
    one : "하나",

    /*
        위의 경우 Local에서 보면

        one : "하나"
        >__proto__: Object  <<< 프리미티브 값을 제공하지 않는 형태
    */

};
```

<br>

- 인스턴스의 프리미티브 값
  - **`인스턴스`** 를 생셩하면 **`파라미터 값`** 을 인스턴스의 Primitive Value 로 설정
- 프리미티브 값을 갖는 빌트인 오브젝트
  - `Number`, `String`, `Boolean`, `Date`

```js
var obj = new Number("456");

    /*
        위의 경우 Local에서 보면

        >__proto__: Number
        [[PrimitiveValue]]: 456

        자바스크립트 엔진이 "PrimitiveValue"라는 이름으로 456의 값을 저장
        이것이 인스턴스의 프리미티브 값
    */

var obj2 = new Number(100);

console.log(obj2 + 200); //obj2의 프리미티브 값으로 계산
console.log(obj2 + true);

//--[실행결과]--
300
101
```

<br><br>

## valueOf()
- Number 인스턴스의 Primitive Value를 반환
- 파라미터 사용하지 않음

```js
var obj = new Number(500);
var obj1 = new Number("값");

console.log(obj.valueOf());
console.log(obj1.valueOf());

//--[실행결과]--

500
NaN
```

<br><br>

## toString()
- data를 string 타입으로 변환
- 파라미터 값
  - 진수 입력 (2~36)
  - **디폴트 값: 10진수**
  - **작성 주의사항** : **`유동소수점 사용!!`**

```js
var value = 20;
console.log(value, typeof value);

var valueToString = value.toString();
console.log(valueToString, typeof valueToString);

console.log(value == valueToString);
console.log(value === valueToString);

--[실행결과]--

20 number
20 string
true
false
```
```js
console.log(100.toString()); // X

/*
    에러 발생 !!
    toString()의 파라미터 작성은 유동소수점 사용.
    따라서 100을 입력할 땐
    100. 또는 100.0 사용
*/

console.log(100..toString()); // O
console.log(100.0.toString()); // O

```

<br><br>

## toLocaleString()
- 숫자를 브라우저가 지원하는 지역화 문자로 변환
- 지역화를 지원하지 않으면 toString()로 반환
- 파라미터 사용 X
  - ES6에서 파라미터에 언어 타입 사용 가능

```js
console.log(value.toLocaleString()); //현재 브라우저 지원 : 한국어
console.log(value.toLocaleString('de-DE')); //독일
console.log(value.toLocaleString('zh-Hans-CN-u-nu-hanidec')); //중국

//--[실행결과]--
1,234.56
1.234,56
一,二三四.五六
```

<br><br>

## toExponential()
- 숫자를 지수 표기로 변환하여 문자열로 반환
- 파라미터
  - 소수 이하 자릿 수 **`0~20`** 까지 작성
  - () -> 변환할 값 그대로 진행
- 변환 방법
  1. 변환할 값의 첫째 자리만 소수점(.) 앞에 표시
  2. 파라미터 값만큼 소수아래 표시
     - 파라미터 값보다 변환할 값의 자릿 수가 작으면 반올림
     - 파라미터 값보다 변환할 값의 자릿 수가 크면 0 작성
  3. 맨 뒤에 e+<변환할 값의 둘째자리부터의 길이>

```js
var value = 123456;

console.log(
    value.toExponential(),
    value.toExponential(0),
    value.toExponential(2),
    value.toExponential(6),
);

//--[실행결과]--

1.23456e+5
1e+5
1.235e+5
1.23456000e+5
```

<br><br>

## toFixed()
- 숫자를 고정 소숫점 표기로 변환하여 문자열로 반환
- 파라미터
  - 소수 이하 자릿 수 **`0~20`** 까지 작성
  - () -> 0으로 간주
- 변환 방법
  1. 파라미터 값만큼 소수아래 표시
     - 파라미터 값보다 소수 자릿 수가 길면 반올림
     - 파라미터 값보다 소수 자릿 수가 짧으면 0

```js
var value = 123.456;

console.log(
    value.toExponential(),
    value.toExponential(0),
    value.toExponential(2),
    value.toExponential(6),
);

//--[실행결과]--

123
123
123.46
123.4560
```


<br><br>
---
### **Reference**
- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)

<br><br>
---
##### [다음 12. 객체 - String Object](https://github.com/mansaout/TIL/blob/main/Javascript/12_basic_string_object.md)
##### [이전 10. 객체(Object) - Property 개요, 추가, 변경, 값추출, for~in문, 빌트인(Built-in)](https://github.com/mansaout/TIL/blob/main/Javascript/10_basic_object.md)