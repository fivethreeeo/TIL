##### 최초작성일 : 2021. 8. 25.<br><br>

# Function Declaration, Parameters

[]()  
[]()  
[]()  
[]()  
[Reference](#reference)

<br><br>

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
// console.log(message);
// return 0;
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

//------------- 5. Local Scope
// 밖에서는 안이 보이지 않고
// 안에서만 밖을 볼 수 있다.

let globalMessage = 'global'; // global variable
function printMessage() {
let message = 'hello'; // local variable
console.log(globalMessage);
console.log(message);
}
printMessage();

console.log(globalMessage);
//console.log(message); // Error: message is not defined

//------------- 6. Return a value
// return이 없는 함수는 return undefined 생략
function sum(a, b) {
return a + b;
}
const result = sum(1, 2);
console.log(result); // print: 3

//------------- 7. Early return, early exit
// 조건이 맞지 않는 경우,
// 값이 undefined인 경우,
// 값이 -1인 경우
// -> 빨리 return을 하고 필요한 로직 실행
//bad
function upgradeUser(user) {
if (user.point > 10) {
// long upgrade logic...
}
}

//good
function upgradeUser(user) {
if (user.point <= 10) {
return;
}
// long upgrade logic...
}
<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

## <br><br>

##### [Next - ]()

##### [Prev - Operator]()
