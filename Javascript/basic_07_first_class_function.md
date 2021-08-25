##### 최초작성일 : 2021. 8. 25.<br><br>

# Function Expression, CallBack, Arrow

[]()  
[]()  
[]()  
[]()  
[Reference](#reference)

<br><br>

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
// command(a, b);
// }

// // const add = (a, b) => a + b;
// // const substract = (a, b) => a - b;
// // const multiply = (a, b) => a \* b;
// // const remainder = (a, b) => a / b;

// const add = (a, b) => console.log(a + b);
// const substract = (a, b) => console.log(a - b);
// const multiply = (a, b) => console.log(a \* b);
// const remainder = (a, b) => console.log(a / b);

// calculate(add, 1, 2);
// calculate(substract, 1, 2);
// calculate(multiply, 1, 2);
// calculate(remainder, 1, 2);

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

## <br><br>

##### [Next - ]()

##### [Prev - Operator]()
