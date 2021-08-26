##### 최초작성일 : 2021. 8. 26.<br><br>

# Object - in operator, for..in, for..of, cloning

[in operator](#in-operator)
[for..in](#forin)
[for..of](#forof)
[Cloning](#cloning)

[Reference](#reference)

<br><br>

## in operator

- property existence check (key in obj)
- true, false 반환

```js
const mansaout = { name: 'heo', age: 30 };

console.log('name' in mansaout); // print: true
console.log('size' in mansaout); // print: false
```

<br>

## for..in

- `for (key in object)`
- object 안의 key 값을 하나씩 반환

```js
const mansaout = { name: 'heo', age: 30 };

for (key in mansaout) {
  console.log(key);
}

// print:
// name
// age
```

<br>

## for..of

- `for (value of iterable)`
- 반복되는 형태의 값을 반환

```js
const array = [1, 2, 3, 4, 5];

for (value of array) {
  console.log(value);
}

// print:
// 1
// 2
// 3
// 4
// 5
```

```js
// 위와 동일
for (let m = 0; m < array.length; m++) {
  console.log(array[m]);
}
```

<br>

## Cloning

- `Object.assign(dest, [obj1, obj2, obj3...])`

```js
const people1 = { title: 'he', count: '100' };
const people2 = people1;

// people1 과 people2는 각기 다른 ref(ref1, ref2)를 가리키지만
// ref1와 ref2는 같은 object를 가리킨다.
// 따라서 ref2의 오브젝트 값을 수정하면 ref1의 오브젝트 값도 수정된다.

people1.count = 50;
console.log(people2.count); / print: 50
```

<br>

- 같은 오브젝트 값으로 clone 하는 방법

```js
// old way

const people1 = { title: 'he', count: '100' };

const people3 = {}; // 1. 빈 people3 오브젝트 생성

for (key in people1) {
  // 2. people3 에 people1의 값을 하나씩 할당
  people3[key] = people1[key];
}

console.log(people3); // print: {title: "he", count: "100"}
people1.count = 50;
console.log(people1); // print: {title: "he", count: 50}
console.log(people3); // print: {title: "he", count: 100}
```

```js
// Object.assign(dest, [obj1, obj2, obj3...])
// (상속받을 object, 상속할 obj)
// 자바스크립트의 모든 object는 Object 상속

const people1 = { title: 'he', count: '100' };

// 방법 1
const people4 = {};
Object.assign(people4, people1); // people1을 people4에 상속한다

// 방법 2
const people4 = Object.assign({}, people1);
```

```js
//another example
// 나중 소스로 overide 함
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'small' };

const mix = Object.assign({}, fruit1, fruit2);

console.log(mix.color); // print: blue
console.log(mix.size); // size: small
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

## <br><br>

##### [Next - ]()

##### [Prev - Object - literals and properties, computed properties, property value shorthand, constructor function](/Javascript/basic_09_object_1.md)
