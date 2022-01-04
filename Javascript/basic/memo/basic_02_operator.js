'use strict';

// 1. String concatenation(연속)
console.log('my'+' name');
console.log('10' + 10);
console.log(`string literals: 123456 'very nice!!'`);




// 2. Numberic operators
console.log(10 + 10); // add
console.log(10 - 10); // substract
console.log(10 / 10); // divide
console.log(10 * 10); // multiply
console.log(10 % 10); // remainder(나머지)
console.log(10 ** 10); // exponentiation(지수화)




// 3. Increment(증가) and decrement(감소) operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(preIncrement, counter);

const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;
console.log(postIncrement, counter);

// -- 도 동일




// 4. Assignment operators:  =, +=, -=, *=, /=
let x = 3;
let y = 5;
console.log(x += y); // x = x + y;
console.log(x -= y); // x = x - y;
console.log(x *= y); // x = x * y;
console.log(x /= y); // x = x / y;




// 5. Comparison operators
console.log(10 < 6) // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6) // greater than
console.log(10 >= 6)// greater than or equal





// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2; // false

function check() {
    for(let i = 0; i < 5; i++) {
        console.log('processing');
    }
    return true;
}

// ||(or), finds the first truthy value
// 무거운 것들을 뒤에 작성
console.log(`or: ${value1 || value2 || check()}`)

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`)

// often use to compress long if-statement
// nullableObject && nullableObject.something -> nullableObject가 null이 아닐 때만 something의 value를 받음
let nullableObject = null;

if(nullableObject != null) {
    console.log('not null');
} else {
    console.log('null')
}

console.log(nullableObject && nullableObject.something);

// !(not)
const truthyValue= true;
console.log(!truthyValue);





// 7. Equality operator
const stringTwo = '2';
const numberTwo = 2;

// == loose equality, with type conversion
console.log(stringTwo == numberTwo);
console.log(stringTwo != numberTwo);

// === stricty equality, no type conversion
console.log(stringTwo === numberTwo);
console.log(stringTwo !== numberTwo);

// object equality
const mansa1 = {name: 'out'};
const mansa2 = {name: 'out'};
const mansa3 = mansa1;
console.log(mansa1 == mansa2);
console.log(mansa1 === mansa2);
console.log(mansa1 === mansa3);

console.log(0 == false);//t
console.log(0 === false);//f
console.log('' == false);//t
console.log('' === false, typeof '');//f
console.log(null == undefined);//t
console.log(null === undefined);//f

console.log('-----------------------')




// 8. Conditional operators: if
// if, else if, else
function whatName(name) {
    if (name === 'mansaout') {
        console.log('Hello, mansa!!');
    } else if (name === 'heo') {
        console.log('heoheo!');
    } else {
        console.log('who are you?');
    }
}
whatName('mansaout');
whatName('heo');
whatName('unknown');





// 9. Ternary operator: ?
// condition ? value1 : value2
// 길거나 복잡해지는 코드는 가독성이 떨어저 if나 switch를 사용 권장

function youngOld(age) {
    age < 30 ? console.log(`${age}? You're young.`) : console.log(`${age}? You're old.`)
}
youngOld(10);
youngOld(40);




// 10. Switch statement
// use for multiple if checks
// use for enum(열거형)-like value checks
// use for multiple type checks in TS

const browser = 'Whale';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Whale':
        console.log('come here!');
        break;
    default:
        console.log('same all!');
        break;
}




// 11. Loops

// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    i = 5;
    console.log(`do: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
// executed 1 ~ 5
for (i = 1; i < 6; i++) {
    console.log(i);
}

for (let k = 6; k > 0; k = k - 2) {
    // inline variable declaration
    console.log(k);
}



// 12. Quiz - break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
console.log(`start Q1`);
for (let a = 0;a < 11; a++) {
    if (a % 2 !== 0 ) {
        continue;
    }
    console.log(a);
}



// Q1. iterate from 0 to 10 and print numbers until reaching 8 (use break)
console.log(`start Q2`);
for (let m = 0;m < 11;m++) {
    if (m > 8) {
        break;
    }
    console.log(m);
}