##### 최초작성일 : 2021. 8. 22.<br><br>
# 11. 객체 - Number Object (Number(), Number상수, new 연산자 - 인스턴스 생성, new Number() - 인스턴스 형태)
[Property List](#property-list)  
[Number()](#number)  
[Number 상수](#number-상수)  
[new 연산자 - 인스턴스 생성](#new-연산자---인스턴스-생성)  
[new Number(), 인스턴스 형태](#new-number-인스턴스-형태)  
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
---
### **Reference**
- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)

<br><br>
---
##### [다음 12. 객체 - Number Object (Primitive 값/타입, valueOf, toString(), toLocaleString(), toExponential(), toFixed())](https://github.com/mansaout/TIL/blob/main/Javascript/12_basic_number_object.md)
##### [이전 10. 객체(Object) - Property 개요, 추가, 변경, 값추출, for~in문, 빌트인(Built-in)](https://github.com/mansaout/TIL/blob/main/Javascript/10_basic_object.md)