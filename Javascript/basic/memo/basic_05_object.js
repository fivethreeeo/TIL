'use-strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionalty.
// Nearly all objects in Javascript are instances of Object
// object = { key : value } 키와 벨류의 집합체

// 1. Literals and properties

// - 기본 형태
const mansaout = { name: 'heo', age: 30 };

function print(person) {
  console.log(mansaout.name);
  console.log(mansaout.age);
}

print(mansaout);

// - object 생성 방법

// 1. 'object literal' syntax
const obj1 = {};

// 2. 'object constructor' syntax
const obj2 = new Object();

// - 나중에 property 추가 가능
// dynamically typed language
// can add properies later
// type이 Runtime에 결정되기 때문
// Runtime : 프로그램이 동작하고 있을 때
// 가능하면 피하자. 유지보수를 어렵게 만듬
const iMac = { maker: 'apple', color: 'silver' };
iMac.price = 'bad';
console.log(iMac);

// - 삭제 가능
delete iMac.price;
console.log(iMac);

// 2. Computed properties 계산된 프로퍼티
// key should be always string!!
// [string] 사용

console.log(mansaout.name);
console.log(mansaout['name']);

//const mansaout = { name: 'heo', age: 30 };
mansaout['height'] = 200;
console.log(mansaout.height);

// 언제 사용?
// 정확하게 어떤 키가 필요한지 모를 때, 런타임에서 결정될 때 사용 한다.
// 동적으로 key에 대한 value를 받아와야할 경우.

//const mansaout = { name: 'heo', age: 30 };
function printValue(obj, key) {
  console.log(obj.key);
  console.log(obj[key]);
}
printValue(mansaout, 'age');

// 3. Property value shorthand
// key와 value가 동일하다면 생략 가능
const person1 = { name: 'name1', age: 1 };
const person2 = { name: 'name2', age: 2 };
const person3 = { name: 'name3', age: 3 };
const person4 = makePerson('name4', 4);
const person5 = new Person('name5', 5);

console.log(person4);
console.log(person5);

function makePerson(name, age) {
  return {
    name, // name: name,
    age, // age: age,
  };
}

// 4. Constructor Function
// Class와 비슷한 성격
// 함수 이름에 대문자 사용
// 호출할 때도 new 사용
function Person(name, age) {
  // this ={};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator
// property existence check (key in obj)

//const mansaout = { name: 'heo', age: 30 };
console.log('name' in mansaout); // print: true
console.log('size' in mansaout); // print: true

// 6. for..in vs for..of
// for (key in obj)
for (key in mansaout) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5];

for (value of array) {
  console.log(value);
}
// for (let m = 0; m < array.length; m++) {
//   console.log(array[m]);
// }

// 7. cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const people1 = { title: 'he', count: '100' };
const people2 = people1;
// people1 과 people2는 다른 ref를 가리키지만, ref 들은 같은 object를 가리킨다.

people1.count = 50;
console.log(people2.count); //둘이 같은 object를 바라봐서 변경됨

// old way
const people3 = {};
for (key in people1) {
  people3[key] = people1[key];
}
console.log(people3);
people1.count = 100;
console.log(people1);
console.log(people3);
console.log(people2);

// Object.assign(dest, [obj1, obj2, obj3...])
// 자바스크립트의 모든 object는 Object 상속
const people4 = {};
Object.assign(people4, people1);

const people5 = Object.assign({}, people1);

//another example
// 나중 소스를 overide 함
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'small' };
const mix = Object.assign({}, fruit1, fruit2);
console.log(mix.color);
console.log(mix.size);
