{
  // Q1. make a string out of an array
  const fruits = ['apple', 'banana', 'orange'];

  const result = fruits.join();

  console.log(result);
  // apple, banana, orange

  // Adds all the elements of an array separated by the specified separator string.
  // join(separator?: string): string;
}

{
  // Q2. make an array out of a string
  const fruits = 'apple, banana, orange';

  const result = fruits.split(', ', 3);

  console.log(result);
  // ['apple', 'banana', 'orange']

  //Split a string into substrings using the specified separator and return them as an array.
  // split(separator: string | RegExp, limit?: number): string[];
}

{
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  const array = [1, 2, 3, 4, 5];

  array.reverse();

  console.log(array);

  //Reverses the elements in an array in place.
  //This method mutates the array and returns a reference to the same array.
}

{
  // Q4. make new array without the first two elements
  const array = [1, 2, 3, 4, 5];

  const result = array.slice(2);

  console.log(result);

  //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  // splice(start: number, deleteCount?: number): T[];

  //Returns a copy of a section of an array.
  //For both start and end, a negative index can be used to indicate an offset from the end of the array.
  // slice(start?: number, end?: number): T[];
}

console.clear();

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

{
  //Q5. find a student with score 90

  const result = students.find((student) => student.score === 90);
  console.log(result);
  //console.log(students);
}

{
  // Q6. make an array of enrolled students
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
  //console.log(students);
}

{
  // Q7. make an array containing only the student's scores
  // result should be: [45, 80, 90, 66, 88]

  // my 풀이
  //const result = [];
  //students.forEach((student) => result.push(student.score));
  //console.log(result);

  // ellie 풀이
  const result = students.map((student) => student.score);
  console.log(result);
}

{
  // Q8. check if there is a student with the score lower than 50
  console.log(students.some((student) => student.score < 50));
  console.log(!students.every((student) => student.score >= 50));
}

{
  // Q9. compute student's average score
  console.clear();

  const scoreSum = students.reduce((prev, curr) => prev + curr.score, 0);
  const scoreAverage = scoreSum / students.length;

  console.log(scoreAverage);

  // students.reduce(function (prev, curr) {
  //   console.log('-----');
  //   console.log(prev);
  //   console.log(curr);
  //   console.log(`return: ${prev + curr.score}`);
  //   return prev + curr.score;
  // }, 0);
}

// const result = students.map((student) => student.score);

// const join = result.join(', ');
// console.log(join);

// const sortJoin = result.sort((a, b) => a - b).join(', ');
// console.log(sortJoin);

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

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
