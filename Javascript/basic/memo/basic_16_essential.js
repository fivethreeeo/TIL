'use strict';
const dog1 = { dog: 'dog1' };
const dog2 = { dog: 'dog2' };
const dogAll = { ...dog1, ...dog2 };

console.log(dogAll);

// // ES6

// // 1. Shorthand property names
// {
//   const mansa1 = {
//     name: 'heo',
//     age: 20,
//   };

//   //만약 value가 미리 정해져 있다면
//   const name = 'mansa';
//   const age = '30';

//   const mansa2 = {
//     //name: name,
//     name,
//     //age: age,
//     age,
//   };

//   console.log(mansa2.name);
// }

// // 2. 분해 할당, Destructuring Assignment
// // Object Destructuring
// {
//   const student = {
//     name: 'Heo',
//     age: 50,
//   };

//   // 👎
//   {
//     const name = student.name;
//     const age = student.age;
//     console.log(name, age);
//   }

//   // 👍
//   {
//     const { name, age } = student;
//     console.log(name, age);

//     // 이름을 바꾸고 싶으면 ?
//     const { name: studentName, age: studentAge } = student;
//     console.log(studentName, studentAge);
//   }

//   //
//   {
//     const person = {
//       name: 'Mansa',
//       age: 20,
//       number: '01011112222',
//     };

//     // 👎
//     {
//       function displayPerson(person) {
//         displayAvatar(person.name);
//         displayName(person.name);
//         displayProfile(person.name, person.age);
//       }
//     }

//     // 👍
//     {
//       function displayPerson(person) {
//         const { name, age } = person;
//         displayAvatar(name);
//         displayName(name);
//         displayProfile(name, age);
//       }
//     }
//   }
//   // 배열에서도 동일하게 사용
//   {
//     const animals = ['dog', 'cat', 'lion'];
//     console.log(animals[0], animals[1], animals[2]);

//     const [frist, second, third] = animals;
//     console.log(frist, second, third);
//   }
// }

// // 3. Spread Syntax
// // 기존의 배열을 수정하는 것은 좋지 않음
// // 새로운 오브젝트, 배열을 만드는 것이 좋음
// {
//   const obj1 = { key: 'key1' };
//   const obj2 = { key: 'key2' };
//   const array = [obj1, obj2];

//   // array copy
//   // 기존 : map, forEach 이용
//   const arrayCopy = [...array];

//   console.log(array);
//   console.log(arrayCopy);

//   // array copy & add
//   // 복사하고 추가하고 싶다면 ?
//   const arrayCopy2 = [...array, { key: 'key3' }];

//   console.log(arrayCopy2);

//   // * object 자체를 똑같이 새로 만들어 할당하는 것이 아닌
//   // * ref만 복사하는 것이기 때문에
//   // * 기존, 복사된 array의 obj1, obj2는 모두 동일한 데이터
//   // * 수정하면 전부 적용

//   // object copy
//   const obj3 = { ...obj1 };
//   console.log(obj3);

//   // array concatenation
//   // 배열 접합
//   const fruit1 = ['apple', 'banana'];
//   const fruit2 = ['melon', 'blueberry'];
//   const fruitAll = [...fruit1, ...fruit2];
//   console.log(fruitAll);

//   // object merge
//   // * key가 같은 objects를 merge하면 마지막의 value를 적용
//   const dog1 = { dog: 'dog1' };
//   const dog2 = { dog: 'dog2' };
//   const dogAll = { ...dog1, ...dog2 };
//   console.log(dogAll);
// }
// console.clear();
// // 4. Default parameters
// // 디폴트 파라미터는 언디파이드인 경우만
// {
//   // 👎
//   {
//     function printMessage(message) {
//       if (message == null) {
//         message = 'default message';
//       }
//       console.log(message);
//     }

//     printMessage();
//   }

//   // 👍
//   {
//     function printMessage(message = 'default message') {
//       console.log(message);
//     }
//     printMessage(null);
//   }
// }

// // 5. Ternary Operator
// {
//   const isCat = true;
//   let checkIsCat;

//   // 👎
//   {
//     if (isCat) {
//       checkIsCat = 'cat!!';
//     } else {
//       checkIsCat = 'no cat!!';
//     }
//     console.log(checkIsCat);
//   }

//   // 👍
//   {
//     isCat ? 'cat!!' : 'no cat!!';
//     console.log(checkIsCat);
//   }
// }

// // 6. Template Literals
// {
//   const weather = '⛅️';
//   const temperature = '10';

//   // 👎
//   console.log(
//     "Today's weather is " + weather + ' and temperature is ' + temperature
//   );

//   //👍
//   console.log(
//     `Today's weather is ${weather} and temperature is ${temperature}`
//   );
// }

// // ES11

// // 1. Optional Chaining
// {
//   const person1 = {
//     name: 'Mansa',
//     job: {
//       title: 'Engineer',
//       manager: {
//         name: 'Heo',
//       },
//     },
//   };

//   const person2 = {
//     name: 'Bob',
//   };

//   //👎
//   {
//     function printManager(person) {
//       //console.log(person.job.manager.name); // person2에서 오류남
//       console.log(person.job && person.job.manager && person.job.manager.name);
//     }

//     printManager(person1);
//     printManager(person2);
//   }

//   //👍
//   {
//     function printManager(person) {
//       console.log(person.job?.manager?.name);
//     }

//     printManager(person1);
//     printManager(person2);
//   }
// }

// // 2. Nullish Coalescing Operator
// // null, undefined 인 경우만 오른쪽으로 이동
// {
//   // Logical OR operator
//   {
//     const name = 'Mansa';
//     const userName = name || 'Guest';
//     console.log(userName);
//   }

//   {
//     // Problem
//     // null 또는 undefined 에만 적용시키고 싶은데
//     // 0, -1, '' 문자열에도 적용됨
//     const name = '';
//     const userName = name || 'Guest';
//     console.log(userName);
//   }
//   // 👍
//   {
//     const name = '';
//     const name2 = null;
//     const name3 = 0;

//     const userName = name ?? 'Guest';
//     const userName2 = name2 ?? 'Guest';
//     const userName3 = name3 ?? 'Guest';

//     console.log(userName);
//     console.log(userName2);
//     console.log(userName3);
//   }

//   // 실행된 값을 할당할 때도 사용
//   const getSomething1 = () => null;
//   const getSomething2 = () => 'something!';

//   const result = getSomething1() ?? getSomething2();
//   console.log(result);
// }
