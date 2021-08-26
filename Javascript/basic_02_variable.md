##### 최초작성일 : 2021. 8. 24.<br><br>

# Variable, Constant, Variable Types, Dynamic typing

[Variable - let, block scope, var](#variable)  
[Constant - const](#constant)  
[Dynamic Typing](#dynamic-typing)  
[Reference](#reference)

<br><br>

## **Variable**

- read/write
- mutable
- only use let if variable needs to change
- ### **let**

```js
let who = 'mansaout';
// let으로 변수 who를 선언, 값 'mansaout'을 who에 할당
```

<br>

- ### **Block Scope**

```js
{
} // Block Scope

let globalName = 'global'; // Global Scope

{
  let localName = 'local';
  console.log(globalName, localName);
  // print: " global local "
}

console.log(globalName, localName);
// Error: localName is not defined
```

<br>

- ### **var - don't use this**
  - **var hoisting** : 선언이 어느 위치에 있건 제일 위로 올려줌
  - **has no block scope** : 블록 스코프를 무시함

```js
myName = 'mansaout';
var myName;
console.log(myName);
// print: mansaout

myAge = 30;
let myAge;
console.log(myAge);
// Error: myAge is not defined
```

<br>

## **Constant**

- read only
- immutable
- use const whenever possible
- ### **const**

```js
const daysInWeek = 7;
const hoursInDay = 24;

daysInWeek = 10;
// Error: Assignment to constant variable.
```

<br>

## **Dynamic Typing**

- 선언할 때 무슨 타입인지 선언하지 않음
- 런타임에 할당된 값에 따라 타입이 변경될 수 있음
- 중간에 타입이 변경되어 런타임 에러가 나는 경우 발생 -> TS가 나온 이유

```js
let text = '10';
console.log(text, typeof text); // print: 10 string

text = 10;
console.log(text, typeof text); // print: 10 number

text = 10 + '10';
console.log(text, typeof text); // print: 1010 string

text = '10' * '10';
console.log(text, typeof text); // print: 100 number
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

## <br><br>

##### [Next - Variable Types - primitive types, object type](/Javascript/basic_03_variable_type.md)

##### [Prev - async vs defer]()
