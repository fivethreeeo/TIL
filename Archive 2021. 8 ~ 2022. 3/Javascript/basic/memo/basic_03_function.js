// Function
// - fundamental building block in the program
// - subprogram can be used mulitple times 서브프로그램이라고도 불림
// - performs a task or calculates a value 한 가지의 테스크나 값을 계산하기 위해

//------------- 1. Function declaration 함수 선언
// 형태: function name(param1, param2) { body... return; }
// one function === one thing
// naming : doSomething, command, verb
// e.g createCardAndPoint -> createCard, createPoint
// function is object in JS
// 그래서 printHello.-- 으로 함수 속성 값 확인 가능

function printHello() {
  console.log('Hello');
}
printHello(); // 함수 호출. Hello 출력밖에 못함.

// 타입 선언 x, message가 string을 전달해야하는지 등 알 수 없음
function log(message) {
  console.log(message);
}
log('Mansaout');

// in TS 파라미터 타입, 리턴 타입을 선언
// function log(message: string): number {
//   console.log(message);
//   return 0;
// }

//------------- 2. Parameters
// - premitive parameters: passed by value
// - object parameters: passed by reference

function changeName(obj) {
  // changeName 함수는 전달 받은 obj의 name의 값을 'coder'로 change
  obj.name = 'coder';
  console.log(obj);
}
const mansaout = { name: 'heo' };
changeName(mansaout);

//------------- 3. Default Parameters (added in ES6)
function showMessage1(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage1('Hello'); //입력 안하면 undefined

function showMessage2(message, from = 'unknown') {
  //default 값 지정
  console.log(`${message} by ${from}`);
}
showMessage2('Hello');

//------------- 4. Rest Parameters (added in ES6)
// 배열 형태로 전달
// 3개가 담겨있는 배열. 배열의 갯수만큼 출력
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  //args의 arg를 하나씩 출력
  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('one', 'two', 'three');

// First-class function
// - functions are treated like any other variable
// - can be assigned as a value to variable // 변수의 값으로 할당되고
// - can be passed as an argument to other functions //함수의 파라미터로 전달되고
// - can be returned by another function // 리턴 값으로도 리턴이 된다

//------------- 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
// anonymous function
// named function

//print(); // Uncaught ReferenceError: Cannot access 'print' before initialization
const print = function () {
  // anonymous function
  console.log('print');
};

const printAgain = print;
printAgain();

declarPrint();
function declarPrint() {
  console.log('declar print');
}

//------------- 2. Callback function using function expression
//파라미터로 함수를 불러서 필요하면 함수를 사용할 수 있게 하는 것
function randomQuiz(answer, printYes, printNo) {
  // printYes, printNo -> callback Function
  if (answer === 'correct') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  // 변수에 함수 할당
  console.log('good');
};

const printNo = function print() {
  // named function
  // better debugging in debugger's stack traces
  // recursions
  console.log('bad');
  //print() : recursion 함수가 자기 스스로를 부르는 것
};

randomQuiz('correct', printYes, printNo);
randomQuiz('wrong', printYes, printNo);

//------------- Arrow function
// always anonymous

const simplePrint = function () {
  console.log('simplePrint!');
};

const ShortSimplePrint = () => console.log('simplePrint!');

const add2 = function (a, b) {
  return a + b; //block인 경우 블럭을 꼭 사용
};

const add = (a, b) => a + b;

//------------- IIFE
// 함수를 선언과 동시에 실행하고 싶을 경우
// 함수를 ()로 감싸고 뒤에 ();
(function doIIFE() {
  console.log('DO IIFE!!');
})();

// //Quiz
// //function calculate(command, a, b)
// //command: (add, substract, divide,multiply, remainder)

// //콜백함수 사용 -> add, substract, divide, multiply, remainder 에 각각 함수를 할당해 파라미터로 가져올 수 있게

// function calculate(command, a, b) {
//   command(a, b);
// }

// // const add = (a, b) => a + b;
// // const substract = (a, b) => a - b;
// // const multiply = (a, b) => a * b;
// // const remainder = (a, b) => a / b;

// const add = (a, b) => console.log(a + b);
// const substract = (a, b) => console.log(a - b);
// const multiply = (a, b) => console.log(a * b);
// const remainder = (a, b) => console.log(a / b);

// calculate(add, 1, 2);
// calculate(substract, 1, 2);
// calculate(multiply, 1, 2);
// calculate(remainder, 1, 2);
