##### 최초작성일 : 2021. 8. 25.<br><br>

# Function declaration, Parameters

[Function ?](#function)  
[Function declaration](#function-declaration-함수-선언)  
[Parameters](#parameters)  
[Default parameters](#default-parameters-added-in-es6)  
[Rest parameters](#rest-parameters-added-in-es6)  
[Reference](#reference)

<br><br>

## Function

- fundamental building block in the program
- called subprogram can be used mulitple times
- performs a task or calculates a value
- function is object in JS

<br>

## Function declaration

- 형태: `function name(param1, param2) { body... return; }`
- one function === one thing
- naming : doSomething (command, verb)
- e.g createCardAndPoint seq-> createCard, createPoint

```js
// 함수 기본 형태와 호출

function printHello() {
  console.log('Hello');
}
printHello(); // 함수 printHello를 호출.
// print: Hello
```

```js
// 타입 선언 x
// message가 string을 전달해야하는지 등 알 수 없음

function log(message) {
  console.log(`message: ${message}`);
}

log('Mansaout');
// print: message: Mansaout
```

```typescript
// in TS
// 파라미터 타입, 리턴 타입을 선언

function log(message: string): number {
  console.log(message);
  return 0;
}
```

<br>

## Parameters

- premitive parameters: passed by value
- object parameters: passed by reference

```js
function changeName(obj) {
  // 전달 받은 obj의 name의 값을 'coder'로 change
  obj.name = 'coder';
  console.log(obj);
}

const mansaout = { name: 'heo' };
changeName(mansaout);
// print: {name: "coder"}
```

<br>

## Default Parameters (added in ES6)

```js
// 1.
// 인자가 전달되지 않을 경우 => undefined 출력
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage('Hello'); // print: Hello by undefined

// 2.
// 인자가 전달되지 않을 경우의
// default값을 지정 => from = 'unknown'
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hello'); // print: Hello ny unknown
```

<br>

## Rest Parameters (added in ES6)

- 배열 형태로 전달

```js
function printAll(...args) {
  // 1. ...args
  // 배열의 수 만큼 출력
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // 2.
  // args 의 arg를 하나씩 출력
  for (const arg of args) {
    console.log(arg);
  }

  // 3.
  // forEach() 사용
  args.forEach((arg) => console.log(arg));
}

printAll('one', 'two', 'three');
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Next - Function expression, CallBack, Arrow, IIFE](/Javascript/basic_07_first_class_function.md)

##### [Prev - Switch, Loops](/Javascript/basic_05_switch_loops.md)
