'use strict';

// [1] variable | primitive vs object
// - primitive 와 object의 차이점: 변수, 상수 할당 관련

// [2] function
// - 함수를 다른 변수에 할당
// - 함수를 인자로 할당

// [3] operator
// - boolean: 어떤 것들이 true, false 인가?
// - &&, || 의 return 값은?

let v_null = null;
let v_num = 123;
let v_false = false;

console.log(v_num && v_num && v_num);
console.log(v_null || v_null || v_false);

// 프로그램이 죽지 않게 하는 코드가 좋은 코드
let obj;
obj && console.log(obj.name);

// [4] class
console.clear();

class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomething(num) {
  console.log(`${num} : yo!`);
}
function alertSomething(num) {
  alert(`${num} : WoW!`);
}
let printCounter = new Counter(printSomething);
let alertCounter = new Counter(alertSomething);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
