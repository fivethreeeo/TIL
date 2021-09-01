##### 최초작성일 : 2021. 8. 26.<br><br>

# Class declaration, getter & setter, fields, static, inheritance, instanceOf

[Object-oriented programming ?](#object-oriented-programming)  
[Class Declaration](#class-declaration)  
[Getter & Setter](#getter--setter)  
[Fields (public, private)](#fields-public-private)  
[Static property and method](#static-property-and-method)  
[Inheritance](#inheritance)  
[instanceOf operator](#instanceof-operator)  
[Reference](#reference)

<br><br>

## Object-oriented programming

- class: template
- object: instance of a class
- javascript class
  - introduced in ES6
  - syntactical sugar over prototype-based inheritance

<br>

## Class Declaration

```js
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: Hello!`);
  }
}

// new ClassName(param)
const mansa = new Person('Heo', 30);

console.log(mansa.name, mansa.age); // print: Heo 30
console.log(mansa.speak()); // print: Heo: Hello!
```

<br>

## Getter & Setter

- 사용자가 잘못된 값을 입력했을 때, 올바른 값으로 바꿔줌
- 객체지향적

```js
class User {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  // getter, return value
  get age() {
    // return this.age;
    // 위의 this.age와 구분하기 위해 '_'
    return this._age;
  }

  // setter , set value, 값을 받아와야함 (value)
  set age(value) {
    // this.age = value;
    // 받아온 value와 구분하기 위해 '_'
    this._age = value < 0 ? 0 : value; // 0 보다 작을 경우 0 출력
  }
}

const user1 = new User('Heo', 'm', -20); // 사람이 -20살 ?? 바꿔주자
const user2 = new User('Jinny', 'w', 20);

console.log(user1.age); // print: 0
console.log(user2.age); // print: 20
```

<br>

## Fields (public, private)

- class 내부에서만 확인, 사용 가능
- **`#`**

```js
class Building {
  publicField = 5;
  #privateField = 0;

  publicMethod() {
    console.log('public');
  }

  #privateMethod() {
    console.log('private');
  }
}

const building = new Building();

console.log(building.publicField); // print: 5
console.log(building.privateField); // print: undefined
console.log(building.publicMethod()); // print: public
console.log(building.privateMethod()); // Error: ...is not a function
```

<br>

## Static property and method

- object마다 할당하지 않음, class 자체에 할당
- object에 관계없이, 들어오는 데이터에 상관없이 공통적으로 사용하는데 쓰임

```js
class Article {
  constructor(number) {
    this.number = number;
  }

  // static property
  static publisher = 'mansaout';

  // static method
  static printPublisher() {
    console.log(`Publisher: ${Article.publisher}`);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher); // print: mansaout
console.log(Article.printPublisher()); // print: Publisher: mansaout

console.log(article1.publisher); // print: undefined
console.log(article1.printPublisher()); // Error: ...is not a function
```

<br>

## Inheritance

- 상속
- a way for one class to extend another class
- **`extends`**, **`super`**

```js
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing by ${this.color} color`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// basic
const thing = new Shape(10, 10, 'black');

// extends
class Rectangle extends Shape {}

// add & override
class Triangle extends Shape {
  draw() {
    super.draw(); // 기존 내용 불러옴
    console.log('drawing again');
  }

  getArea() {
    // overriding before
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 10, 'green');
const triangle = new Triangle(20, 20, 'red');

rectangle.draw(); // print: drawing by green color
triangle.draw();
// print:
// drawing by red color
// drawing again

console.log(triangle.getArea()); // print: 200
```

<br>

## instanceOf operator

- class checking
- boolean 값 반환

```js
console.log(rectangle instanceof Rectangle); // print: true
console.log(triangle instanceof Rectangle); // print: false
console.log(triangle instanceof Triangle); // print: true
console.log(triangle instanceof Shape); // print: true
console.log(triangle instanceof Object); // print: true
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Next - Object - literals and properties, computed properties, property value shorthand, constructor function](/Javascript/basic_09_object_1.md)

##### [Prev - Function expression, CallBack, Arrow, IIFE](/Javascript/basic_07_first_class_function.md)
