##### 최초작성일 : 2021. 9. 2.<br><br>

# Destructuring Assignment, Spread Syntax, Optional Chaining

[Destructuring Assignment, 분해 할당](#destructuring-assignment-분해-할당)

- [Object Destructuring](#object-destructuring)
- [Array Destructuring](#array-destructuring)

[Spread Syntax](#spread-syntax)  
[Optional Chaining](#optional-chaining)  
[Reference](#reference)

<br><br>

## Destructuring Assignment, 분해 할당

<br>

### Object Destructuring

```js
const student = { name: 'Heo', age: 50 };

// ❌ bad code
{
  const name = student.name;
  const age = student.age;
  console.log(name, age); // print: Heo 50
}

// ✅ good code
{
  const { name, age } = student;
  console.log(name, age); // print: Heo 50
}

// property key를 바꾸고 싶으면 ?
{
  const { name: studentName, age: studentAge } = student;
  console.log(studentName, studentAge); // print: Heo 50
}
```

- e.g

```js
const person = {
  name: 'Mansa',
  age: 20,
  number: '01011112222',
};

// ❌ bad code
{
  function displayPerson(person) {
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
  }
}

// ✅ good code
{
  function displayPerson(person) {
    const { name, age } = person;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
  }
}
```

<br>

### Array Destructuring

```js
const animals = ['dog', 'cat', 'lion'];

// ❌ bad code
console.log(animals[0], animals[1], animals[2]); // print: dog cat lion

// ✅ good code
const [frist, second, third] = animals;
console.log(frist, second, third); // print: dog cat lion
```

<br>

## Spread Syntax

- 기존의 배열을 수정하는 것은 좋지 않음
- 새로운 오브젝트, 배열을 만드는 것이 좋음

```js
const obj1 = { key: 'key1' };
const obj2 = { key: 'key2' };
const array = [obj1, obj2];

// ✅ array copy
{
  const arrayCopy = [...array];

  console.log(array); // print: (2) [{…}, {…}]
  console.log(arrayCopy); // print: (2) [{…}, {…}]
}

// ✅ array copy & add
{
  const arrayCopy2 = [...array, { key: 'key3' }];

  console.log(arrayCopy2); // print: (3) [{…}, {…}, {…}]
}

// ✅ object copy
//
// 주의사항 !!
// object 자체를 똑같이 새로 만들어 할당하는 것이 아닌 ref만 새로 만듬
{
  // ✅ obj1, obj2는 같은 오브젝트를 가리킴
  const obj3 = { ...obj1 };
}
```

<br>

- array concatenation, 배열 접합

```js
const fruit1 = ['apple', 'banana'];
const fruit2 = ['melon', 'blueberry'];
const fruitAll = [...fruit1, ...fruit2];

console.log(fruitAll);
// print: (4) ["apple", "banana", "melon", "blueberry"]
```

<br>

- object merge

```js
// key가 같은 objects를 merge하면 마지막의 value를 적용

const dog1 = { dog: 'dog1' };
const dog2 = { dog: 'dog2' };
const dogAll = { ...dog1, ...dog2 };

console.log(dogAll); // print: {dog: 'dog2'}
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Prev - async & await, all(), race()](/Javascript/basic_16_async_await.md)

```

```
