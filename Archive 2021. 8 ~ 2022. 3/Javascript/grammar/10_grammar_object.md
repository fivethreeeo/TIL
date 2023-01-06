##### 최초작성일 : 2021. 8. 20.<br><br>

# 10. 객체(Object) - Property 개요, 추가, 변경, 값추출, for~in문, 빌트인(Built-in)

[프로퍼티(Property)](#프로퍼티property)  
[프로퍼티 추가/변경](#프로퍼티-추가변경)  
[프로퍼티 값 추출](#프로퍼티-값-추출)  
[for~in 문](#for--in)  
[빌트인(Bulit-In)](#빌트인built-in)  
[Reference](#reference)

## 프로퍼티(Property)

- 형태 : **`name : value`**
- `name` 에 property의 name/key 를 작성
  - 작성 시 string type이지만 따옴표를 생략
- `value` 는 js에서 지원하는 type 작성
  - 123, "abc", true, {} 등
  - 끝에 `,`는 제일 마지막 줄에도 사용
- 프로퍼티 안에 또 다른 객체를 넣을 수 있음

```js
var user = {
  name: '김갑생',
  age: 20,
  height: {
    10: 150,
    20: 160,
    30: function () {},
  },
};
```

<br><br>

## 프로퍼티 추가/변경

- `var obj = {}`<br>
  `obj.abc = 123`
  - obj 오브젝트에 abc가 없으면 abc:123 추가
  - obj 오브젝트에 abc가 있으면 value를 123으로 변경

```js
var user = {
    name: "이택조",
};

user.name = "이호창"; //기존에 name이 있으니 값을 변경
user.age = 35; //기존에 age가 없으니 새로 name과 value를 생셩

console.log(user);

//--[실행결과]--

{name: "이호창", age: 35}
```

<br>

- 대괄호 사용 **`[ ]`**

```js
var user = {};

user['age'] = 35; //대괄호 안에 문자열로 작성

console.log(user);

//--[실행결과]--

{
  age: 35;
}
```

<br>

- 변수 이름 사용 **`[varName]`**

```js
var user = { age: 20 };
var propName = 'age'; //프로퍼티 네임을 변수에 할당

user[propName] = 35;

console.log(user);

//--[실행결과]--

{
  age: 35;
}
```

<br><br>

## 프로퍼티 값 추출

- `var user = { title: "이택조" }`<br>
  `var value = user.title`
  - 프로퍼티 이름인 `title`이 있으면 프로퍼티의 value 값인 `"이택조"` 반환
  - 프로퍼티 이름인 `title`이 없으면 `undefined` 반환

```js
var user = { age: 20 };
var valueAge = user.age;
var valueName = user.name;

console.log(valueAge, valueName);

//--[실행결과]--
20 undefined
```

<br><br>

## for ~ in

- 오브젝트에서 Property를 열거

```js
var user = {
    name : "자바스",
    age : 20,
    height: 100
};

for (var propName in user){ //프로퍼티 네임이 변수 propName에 설정
    console.log(propName, user[propName]);
}

//--[실행결과]--

name 자바스
age 20
height 100

```

<br><br>

## 빌트인(Built In)

- 값 타입, 연산자, 오브젝트를 사전에 만들어 놓은 것
  - 빌트인 값 타입 : Undefined, Null, Boolean, Number, String, Object
  - 빌트인 연산자 : +, -, \*, /, %, ++, -- 등
  - **빌트인 오브젝트(11개)**
    - Number
    - String
    - Boolean - true, false
    - Object - {name : value} 형태
    - Array - [1, 2, "A"] 형태
    - Function - function abc(){} 형태
    - Math - abs(), round() 등
    - Date
    - JSON - [{"name" : "value"}]
    - RegExp
    - Global - 하나만 존재, 전역 객체

## <br><br>

### **Reference**

- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)
