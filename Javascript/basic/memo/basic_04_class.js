'use-strict';

// Object-oriented programming (OOP)
// class: template
// object : instance of a class
// javascript class
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declaration

class Person {
  // constructor
  constructor(name, age) {
    // fields((
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const mansa = new Person('Heo', 30);

console.log(mansa.name); // print: Heo
console.log(mansa.age); // print: 30
mansa.speak(); // print: Heo: hello!

// 2. Getter & Setter

// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }

// const user1 = new User('Steve', 'Jobs', -1);
// console.log(user1.age);
// // print : -1
// // 객체지향적으로 맞지 않음. 사람의 나이가 -1이 될 수 없음
// // => 그래서 getter, setter 사용

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // getter, 값을 리턴
  get age() {
    //return this.age
    return this._age;
  }

  // setter, 값을 설정, 값을 받아와야함 value
  set age(value) {
    //this.age = value;
    this._age = value < 0 ? 0 : value; // 0 보다 작을 경우 0 출력
  }
}

const user1 = new User('Steve', 'Jobs', -1);
const user2 = new User('Steve', 'Jobs', 10);
console.log(user1.age); // getter, setter를 시용해서 _age가 아닌 age으로 호출 가능
console.log(user2.age);

// 3. Fields (public, private)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields

class Experiment {
  publicField = 5;
  #privateField = 0;
  publicMethod() {
    console.log('public');
  }
  #publicMethod() {
    console.log('private');
  }
}

const experiment = new Experiment();

console.log(experiment.publicField); // print: 5
console.log(experiment.privateField); // print: undefined
experiment.publicMethod(); // p Error: is not a function

// 4. Static property and method
// object마다 할당되어 지는게 아닌, class 자체에 부여
// object에 관계없이 들어오는 데이터에 상관없이 공통적으로 사용하는 것에 필요

class Article {
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  // static property
  static publisher = 'mansaout';

  // static method
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher);
console.log(Article.publisher);

// 상속 & 다양성

// 5. Inheritance 상속
// a way for one class to extend another class

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

const thing = new Shape(100, 200, 'blue');
thing.draw();
console.log(thing.getArea());

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    // 기존 내용 불러옴
    super.draw();
    console.log(`draw origin and plus new !!!`);
  }
  getArea() {
    //overiding
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 10, 'green');
const triangle = new Triangle(20, 20, 'red');
rectangle.draw();
triangle.draw();
console.log(triangle.getArea());

// 6. instanceOf operator
// class checking

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

console.log(triangle.toString());
//overide 가능
