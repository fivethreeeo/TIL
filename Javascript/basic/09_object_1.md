##### 최초작성일 : 2021. 8. 26.<br><br>

# Object - literals and properties, computed properties, property value shorthand, constructor function

[Object ?](#object-)  
[Literals and properties](#literals-and-properties)  
[Computed properties](#computed-properties)  
[Property value shorthand](#property-value-shorthand)  
[Constructor functon](#constructor-function)  
[Reference](#reference)

<br><br>

## Object ?

- one of the JavaScript's data types.
- a collection of related data and/or functionalty.
- Nearly all objects in Javascript are instances of Object
- object = { key : value } -> 키와 벨류의 집합체

<br>

## Literals and properties

- 기본형태

```js
const mansaout = { name: 'Heo', age: '30' };

function print(person) {
  console.log(mansaout.name, mansaout.age);
}

print(mansaout); // print: Heo 30
```

<br>

- object 생성 방법
  1. 'object literal' syntax
  2. 'object constructor' syntax

```js
// object literal
const object1 = {};

// object constructor
const object2 = new Object();
```

<br>

- Can add properties later
  - dynamically typed language
  - type이 runtime에 결정되기 때문
  - 가능하면 피하자. 유지보수를 어렵게 만듬

```js
const iMac = { maker: 'apple', color: 'silver' };
iMac.price = 'bad';

console.log(iMac);
// print: {maker: "apple", color: "silver", price: "bad"}
```

<br>

- Can delete !!!

```js
const iMac = { maker: 'apple', color: 'silver', price: 'bad' };
delete iMac.price;

console.log(iMac);
// print: {maker: "apple", color: "silver"}
```

<br>

## Computed properties

- 계산된 프로퍼티
- key should be always string !!
- **`[]`**

```js
const mansaout = { name: 'heo', age: 30 };

mansaout['height'] = 200; // computed property

console.log(mansaout.height); // print: 200
```

<br>

- When use?
  - 동적으로 key의 value를 받아야하는 경우
  - 정확하게 어떤 key가 필요한지 모를 때, 런타임에 결정 될 때

```js
const mansaout = { name: 'heo', age: 30 };

function printValue(obj, key) {
  console.log(obj.key);
  console.log(obj[key]);
}

printValue(mansaout, 'age');
// print:
// undefined
// 30
```

<br>

## Property value shorthand

- if(key === value) 생략가능

```js
// 새로운 object를 만들 때 마다 name과 age가 계속 중복
const person1 = { name: 'name1', age: 1 };
const person2 = { name: 'name2', age: 2 };
const person3 = { name: 'name3', age: 3 };

// personN 을 만드는 함수를 사용.
function makePerson(name, age) {
  return {
    name, // name: name,
    age, // age: age,
  };
}

const person4 = makePerson('name4', 4);
```

<br>

## Constructor function

- Class와 비슷한 성격
- 함수 이름 대문자 사용
- `new` 로 호출

```js
function Person(name, age) {
  // this ={}; 생략
  this.name = name;
  this.age = age;
  // return this; 생략
}

// new
const person5 = new Person('name5', 5);
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Next - Object - in operator, for..in vs for..of, cloning](/Javascript/basic_10_object_2.md)

##### [Prev - Class declaration, getter & setter, fields, static, inheritance, instanceOf](/Javascript/basic_08_class.md)
