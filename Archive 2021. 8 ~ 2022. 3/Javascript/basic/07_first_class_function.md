##### 최초작성일 : 2021. 8. 25.<br><br>

# Function expression, CallBack, Arrow, IIFE

[First-class function](#first-class-function)  
[Function expression](#function-expression)  
[Callback function](#callback-function)  
[Arrow function](#arrow-function)  
[IIFE](#IIFE)  
[Quiz](#quiz)  
[Reference](#reference)

<br><br>

## First-class function

- functions are treated like any other variable
- can be assigned as a value to variable
- can be passed as an argument to other functions
- can be returned by another function

<br>

## Function expression

- a function declaration can be called earlier than it is defined. **(hoisted)**
- a function expression is created when the execution reaches it.
- anonymous function
- named function

```js
// Uncaught ReferenceError:
// Cannot access 'print' before initialization

print();

// function expression
// anonymous function
const print = function () {
  console.log('print');
};
```

```js
print(); //print: Print Success

// function declaration
// named function
function print() {
  console.log('Print Success');
}
```

<br>

## Callback function

- Callback function using function expression
- 이름 그대로 나중에 호출
- 특정 이벤트 발생, 특정 시점에 도달했을 때 시스템에서 호출하는 함수

```js
function randomQuiz(answer, printYes, printNo) {
  // printYes, printNo -> callback function
  // passed as an argument to other functions
  if (answer === 'correct') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log('good');
};

const printNo = function print() {
  // named function
  console.log('bad');
  print(); // recursion: 자기 스스로를 호출
};

randomQuiz('correct', printYes, printNo); // print: good
randomQuiz('wrong', printYes, printNo); // print: bad
```

<br>

## Arrow function

- always anonymous function

```js
const printName = function () {
  console.log('Name!!');
};

// using Arrow function
const printName = () => console.log('Name!!');

const sumArgument = function (a, b, c) {
  // required "return" in Block
  return a + b + c;
};

// using Arrow fucntion
// "return" can be omitted
const sumArgument = (a, b, c) => a + b + c;
```

<br>

## IIFE

- Function declaration and execution at the same time

```js
// ( function() ) ();

(function doIIFE() {
  console.log('DO IIFE!!');
})();

// print: DO IIFE!!
```

<br>

## Quiz

```js
// Q. 아래의 command를 사용해 계산을 수행하는 function을 만들자.
//
// function calculate(command, a, b)
// command: (add, substract, divide,multiply, remainder)
```

```js
// 풀이 1
//
// command를 callback 으로 만듬
// calculate() 호출하면 a, b를 계산하는 함수 실행

function calculate(command, a, b) {
  console.log(command(a, b));
}

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const remainder = (a, b) => a % b;

calculate(add, 1, 2); // print: 3
calculate(substract, 1, 2); // print: -1
calculate(multiply, 1, 2); // print: 2
calculate(remainder, 1, 2); // print: 1
```

```js
// 풀이 2
//
// switch 문을 사용
// command를 각각 case로 만듬
// 해당 command일 때 그 command에 맞게 계산하고 종료

function calculate(command, a, b) {
  switch (command) {
    case add:
      console.log(a + b);
      break;
    case substract:
      console.log(a - b);
      break;
    case multiply:
      console.log(a * b);
      break;
    case remainder:
      console.log(a % b);
      break;
    default:
      console.log('wrong command!');
      break;
  }
}

calculate(add, 1, 2); // print: 3
calculate(substract, 1, 2); // print: -1
calculate(multiply, 1, 2); // print: 2
calculate(remainder, 1, 2); // print: 1
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Next - Class declaration, getter & setter, fields, static, inheritance, instanceOf](/Javascript/basic/08_class.md)

##### [Prev - Function declaration, Parameters](/Javascript/basic/06_function.md)
