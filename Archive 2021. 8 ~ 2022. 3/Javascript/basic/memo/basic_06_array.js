'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const balls = ['🏀', '⚽️'];
console.log(balls);
console.log(balls.length);
console.log(balls[0]); // first value
console.log(balls[balls.length - 1]); // last value
console.log(balls[2]);

// 3. Looping over an array
// print all balls

// a. for
for (let i = 0; i < balls.length; i++) {
  console.log(balls[i]);
}

// b. for...of
for (let ball of balls) {
  console.log(ball);
}

console.clear();

// c. forEach
balls.forEach(function (ball, index, array) {
  console.log(ball, index, array); // 보통 array는 받아오지 않음
});

balls.forEach((ball) => console.log(ball));

// 4. Addtion, deletion, copy

// push: add an item to the end
balls.push('🏈', '🏐');
console.log(balls);

// pop: remove an item to the end
balls.pop();
console.log(balls);
balls.pop();
console.log(balls);

// unshift: add an item to the beginning
balls.unshift('🏈', '🎱', '🎾');
console.log(balls);

// shift: remove an item to the beginning
balls.shift('🏈');
console.log(balls);

// note !!
// shift, unshift are slower than pop, push

// splice: remove an item by index position
balls.splice(2, 1);
console.log(balls);
balls.splice(1);
console.log(balls);
balls.splice(0, 1, '🏈', '🎱', '🎾');
console.log(balls);

//combine two arrays
const balls2 = ['🏉', '🏓'];
const newBalls = balls.concat(balls2);
console.log(newBalls);

// 5. Searching
console.clear();
console.log(newBalls);

// indexOf : find the index
console.log(newBalls.indexOf('🏈'));
console.log(newBalls.indexOf('⚾️')); // -1

// includes
console.log(newBalls.includes('🏈')); // boolean
console.log(newBalls.includes('⚾️'));

// lastIndexOf
console.clear();
newBalls.push('🎾');
console.log(newBalls);
console.log(newBalls.indexOf('🎾')); // 처음 발견하면 종료
console.log(newBalls.lastIndexOf('🎾')); // 처음 발견하면 종료
