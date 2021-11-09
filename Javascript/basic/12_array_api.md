##### 최초작성일 : 2021. 8. 31.<br><br>

# Array APIs - join(), split(), reverse(), slice(), find(), filter(), map(), some(), every(), reduce()

[Only Questions](#only-questions)  
[Reference](#reference)

<br><br>

### Q1. Make a string out of an array.

```js
// Q1. Make a string out of an array.

const fruits = ['apple', 'banana', 'orange'];
```

```js
// A1. Answer

const newString1 = fruits.join(); // apple, banana, orange
const newString2 = fruits.join(''); // applebananaorange
const newString3 = fruits.join(' '); // apple banana orange
const newString4 = fruits.join('-'); // apple-banana-orange
```

- `join()` | `join(separator?: string): string;`
- Adds all the elements of an array separated by the specified separator string.

<br>

### Q2. Make an array out of a string.

```js
// Q2. make an array out of a string

const fruits = 'apple, banana, orange';
```

```js
// A2

const newArray1 = fruits.split(', '); // ['apple', 'banana', 'orange']
const newArray2 = fruits.split(', ', 2); // ['apple', 'banana']
const newArray3 = fruits.split(', ', 4); // ['apple', 'banana', 'orange']
```

- `split(separator: string | RegExp, limit?: number): string[]`
- Split a string into substrings using the specified separator and return them as an array.

<br>

### Q3. Make this array look like this ...

```js
// Q3. make this array look like this: [5, 4, 3, 2, 1]

const array = [1, 2, 3, 4, 5];
```

```js
// A3.

array.reverse(); // [5, 4, 3, 2, 1]
```

- `reverse(): T[];`
- Reverses the elements in an array in place.
- This method mutates the array and returns a reference to the same array.

<br>

### Q4. make new array without the first two elements

```js
//Q4. make new array without the first two elements

const array = [1, 2, 3, 4, 5];
```

```js
// A4-1. splice()

const newArray = array.splice(2, 2);

console.log(newArray); // answer => [3, 4, 5]
console.log(array); // [1, 2]
```

- `splice(start: number, deleteCount?: number): T[];`
  - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
- `splice(start: number, deleteCount: number, ...items: T[]): T[];`

  - Inserts new elements at the start of an array, and returns the new length of the array.

    ```js
    // e. g;

    const arr = [1, 2, 3, 4, 5, 6];
    const newArr = arr.splice(3, 2, 'push!!');

    console.log(arr); // [1, 2, 3, 'push!!', 6]
    console.log(newArr); // [4, 5]
    ```

```js
// A4-2. slice()

const newArray = array.slice(2, 5);

console.log(newArray); // answer => [3, 4, 5]
console.log(array); // [1, 2, 3, 4, 5]
```

- `slice(start?: number, end?: number): T[];`
- Returns a copy of a section of an array.
- For both start and end, a negative index can be used to indicate an offset from the end of the array.

<br>

## Q5 ~ Q10

- 공통 제시

```js
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
```

<br>

### Q5. Find a student with score 90.

```js
// A5.
const score90Student = students.find((student) => student.score === 90);

console.log(score90Student);
// Student {name: 'C', age: 30, enrolled: true, score: 90}
```

- `find(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number | undefined;`
- Returns the value of the first element in the array where predicate is true, and undefined
- immediately returns that element value. Otherwise, find returns undefined.
- true인 값을 반환, true인 값을 못찾았다면 undefined 반환

<br>

### Q6. Make an array of enrolled students.

```js
// A6.
const enrolledStudents = students.filter((student) => student.enrolled == true);

console.log(score90Student);
// [Student, Student, Student]
// A, C, E
```

- `filter(predicate: (value: number, index: number, array: Int8Array) => any, thisArg?: any): Int8Array;`
- Returns the elements of an array that meet the condition specified in a callback function.
- the predicate function one time for each element in the array.

<br>

### Q7. Make an array containing only the student's scores.

```js
// result should be: [45, 80, 90, 66, 88]

// A7-1.
{
  const scores = [];
  scores.forEach((student) => result.push(student.score));

  console.log(scores); // [45, 80, 90, 66, 88]
}

// A7-2.
{
  const scores = students.map((student) => student.score);

  console.log(scores); // [45, 80, 90, 66, 88]
}
```

- `map(callbackfn: (value: number, index: number, array: Int8Array) => number, thisArg?: any): Int8Array;`
- Calls a defined callback function on each element of an array, and returns an array that contains the results.

<br>

### Q8. Check if there is a student with the score lower than 50.

```js
console.log(students.some((student) => student.score < 50)); // true
// score가 50보다 작은 학생이 1명 이상이면 true
// true를 찾으면 바로 => true 반환

console.log(students.every((student) => student.score >= 50)); // false
// 모든 학생이 score가 50이상 이면 true
// false를 찾으면 바로 => false 반환
```

<br>

### Q9. Compute student's average score.

```js
const scoreAverage =
  students.reduce((prev, curr) => prev + curr.score, 0) / students.length;

console.log(scoreAverage); // 73.8
```

- `reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;`

<br>

### Q10. Make a string containing all the scores.

```js
// result should be: '45, 80, 90, 66, 88'

const scoresString = students //
  .map((student) => student.score)
  .join();

console.log(scoresString);
// 45, 80, 90, 66, 88
```

<br>

### Q11. Do Q10 sorted in ascending order.

```js
// result should be: '45, 66, 80, 88, 90'

const scoresStringSort = students //
  .map((student) => student.score)
  .sort()
  .join();

console.log(scoresStringSort);
// 45, 80, 90, 66, 88
```

- `sort(compareFn?: (a: number, b: number) => number): this;`
- Sorts an array.
- `sort((a, b) => b - a)` => 반대로

<br><br>

## Only Questions

```js
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
}

// Q5 ~ Q11

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
}

// Q6. make an array of enrolled students
{
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Q11. do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
```

<br><br>

---

### **Reference**

- [MDN Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Next - JSON - Object to JSON, JSON to Object](/Javascript/basic/13_json.md)

##### [Prev - Array - Declaration, index, loop, addition, deletion, searching](/Javascript/basic/11_array.md)
