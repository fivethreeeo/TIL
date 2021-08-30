##### 최초작성일 : 2021. 8. 27.<br><br>

# Array - Declaration, index, loop, addition, deletion, searching

[Declaration](#declaration)  
[Index position](#index-position)  
[Looping over an array: forEach](#looping-over-an-array)  
[Addition, Deletion: push, pop, unshift, shift](#addition-deletion)  
[splice, concat](#splice-concat)  
[Searching: indexOf, lastIndexOf, includes](#searching)  
[Reference](#reference)

<br><br>

## Declaration

```js
const arr1 = new Array();
const arr2 = [1, 2];
```

<br>

## Index position

- 0 부터 시작

```js
const balls = ['🏀', '⚽️'];

// count
console.log(balls.length); // print: 2

// first value
console.log(balls[0]); // print: 🏀

// last value
console.log(balls[balls.length - 1]); // print: ⚽️

// no value
console.log(balls[2]); // print: undefined
```

<br>

## Looping over an array

- print all values

```js
// print all balls

const balls = ['🏀', '⚽️', '🎾'];

// a. for
for (let i = 0; i < balls.length; i++) {
  console.log(balls[i]);
}

// b. for...of
for (let ball of balls) {
  console.log(ball);
}

// b. forEach
balls.forEach(function (ball, index, array) {
  // index, array 생략 가능
  console.log(ball, index, array);
});
```

<br>

## Addition, Deletion

- shift, unshift are slower than pop, push

```js
const balls = ['🏀', '⚽️', '🎾'];

// push: add an item to the end
balls.push('🏈');
console.log(balls); // print: ['🏀', '⚽️', '🎾', '🏈']

// pop: remove an item to the end
balls.pop();
console.log(balls); // print: ['🏀', '⚽️', '🎾']

// unshift: add am item to the beginning
balls.unshift('🏐');
console.log(balls); // print: ['🏐', '🏀', '⚽️', '🎾']

// shift: remove am item to the beginning
balls.shift();
console.log(balls); // print: ['🏀', '⚽️', '🎾']
```

<br>

## splice, concat

- **`splice`**
  - remove an item by index position
  - remove and replace value

```js
const balls = ['🏀', '⚽️', '🎾', '🏐', '🏈'];

// splice(start, count, value1, value2...)

balls.splice(2, 1);
console.log(balls); // ['🏀', '⚽️', '🏐', '🏈'];

balls.splice(2, 1, '🏓');
console.log(balls); // ['🏀', '⚽️', '🏓', '🏈'];

balls.splice(1);
console.log(balls); // ['🏀'];
```

<br>

- **`concat`**
  - combine two or more arrays

```js
const balls = ['🏀', '⚽️', '🎾'];
const balls2 = ['🏐', '🏈'];

// arrayExisting.concat(arrayToCombine)
// [arrayExisting + arrayToCombine]

const newBalls = balls.concat(balls2);
console.log(newBalls);
// print: ["🏀", "⚽️", "🎾", "🏐", "🏈"]
```

<br>

## Searching

- **`indexOf`, `lastIndexOf`, `includes`**

```js
const balls = ['🏀', '⚽️', '🎾', '🏐', '🏈', '⚽️'];

// indexOf : find the index from beginning
// if it is not present => return -1
console.log(balls.indexOf('⚽️'));
console.log(balls.indexOf(''));
// print:
// 1
// -1

// lastIndexOf : find the index from end
console.log(balls.lastIndexOf('⚽️'));
console.log(balls.lastIndexOf(''));
// print
// 5
// -1

// includes : true or false
console.log(balls.includes('🎾'));
// print: true
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

## <br><br>

##### [Next - ]()

##### [Prev - Object - literals and properties, computed properties, property value shorthand, constructor function](/Javascript/basic_09_object_1.md)
