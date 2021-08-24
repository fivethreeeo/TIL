##### 최초작성일 : 2021. 8. 24.<br><br>
# Operator
[String concatemation](#string-concatenation)  
[Numberic operators](#numberic-operators)  
[Increment & Decrement operators](#increment--decrement-operators)  
[Assignment operators](#assignment-operators-------)  
[Comparison operators](#comparison-operators)  
[Logical operators: ||(or), &&(and), !(not)](#logical-operators-or-and-not)  
[Equality operator](#equality-operator)  
[Conditional operators: if](#conditional-operators-if)  
[Ternary operator: ?](#ternary-operator-)  
[Reference](#reference)

<br><br>

## String concatenation
```js
console.log('my'+' name');
// print: my name

console.log('10' + 10);
// print: 1010;
```

<br>

## Numberic operators
```js
console.log(10 + 10); // add
console.log(10 - 10); // substract
console.log(10 / 10); // divide
console.log(10 * 10); // multiply
console.log(10 % 10); // remainder
console.log(10 ** 10); // exponentiation

20
0
1
100
1
10000000000
```

<br>

## Increment & decrement operators
```js
let counter = 2;

const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;

console.log(preIncrement, counter); // print: 3 3

const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;

console.log(postIncrement, counter); // print: 3 4

// -- 도 동일
```

<br>

## Assignment operators:  =, +=, -=, *=, /=
```js
let x = 3;
let y = 5;
console.log(x += y);// print: 8
// x = x + y;

console.log(x -= y);// print: 3
// x = x - y;

console.log(x *= y);// print: 15
// x = x * y;

console.log(x /= y);// print: 3
// x = x / y;
```

<br>

## Comparison operators: <, <=, >, >=
```js
console.log(10 < 6) // print: false
// less than

console.log(10 <= 6) // print: false
// less than or equal

console.log(10 > 6) // print: true
// greater than

console.log(10 >= 6) // print: true
// greater than or equal
```

<br>

## Logical operators: ||(or), &&(and), !(not)

- `||(or), &&(and)`

```js
const value1 = false;
const value2 = 4 < 2; // false

function check() {
    for(let i = 0; i < 5; i++) {
        console.log('processing');
    }
    return true;
}

/* ||(or), finds the first truthy value */
console.log(value1 || value2 || check()) // print: (5)processing, true

/* &&(and), finds the first falsy value */
console.log(value1 && value2 && check()) // print: false

//무거운 연산은 뒤에 배치해 되도록 실행되지 않게 작성
```

<br>

- `!(not)`

```js
const truthyValue= true;

console.log(!truthyValue); // print: false
```

<br>

# Equality operator
- `==, ===`

```js
const stringTwo = '2';
const numberTwo = 2;

// == loose equality, with type conversion
console.log(stringTwo == numberTwo); // print: true
console.log(stringTwo != numberTwo); // print: false

// === stricty equality, no type conversion
console.log(stringTwo === numberTwo); // print: false
console.log(stringTwo !== numberTwo); // print: true

// object equality
const mansa1 = {name: 'out'};
const mansa2 = {name: 'out'};
const mansa3 = mansa1;
console.log(mansa1 == mansa2); // print: false
console.log(mansa1 === mansa2); // print: false
console.log(mansa1 === mansa3); // print: true

console.log(0 == false); // print: true
console.log(0 === false); // print: false
console.log('' == false); // print: true
console.log('' === false, typeof ''); // false string
console.log(null == undefined); // print: true
console.log(null === undefined); // print: false
```

<br>

## Conditional operators: if
- `if, else if, else`

```js
function whatName(name) {
    if (name === 'mansaout') {
        console.log('Hello, mansa!!');
    } else if (name === 'heo') {
        console.log('heoheo!');
    } else {
        console.log('who are you?');
    }
}
whatName('mansaout'); // print: Hello, mansa!!
whatName('heo'); // print: heoheo!
whatName('unknown'); // print: who are you?
```

<br>

## Ternary operator: ?
- `condition ? value1 : value2`
- 길거나 복잡해지는 코드는 가독성이 떨어저 `if` 나 `switch` 를 사용 권장

```js
function youngOld(age) {
    age < 30 ? console.log(`${age}? You're young.`) : console.log(`${age}? You're old.`)
}
youngOld(10); // print: 10? You're young.
youngOld(1000); // print: 1000? You're old.

```

<br><br>
---
### **Reference**
- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>
---
##### [Next - Switch, Loops]()
##### [Prev - Variable Types - primitive types, object type]()