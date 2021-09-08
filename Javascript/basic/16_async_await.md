##### 최초작성일 : 2021. 9. 1.<br><br>

# async & await, all(), race()

[동기처리의 문제](#동기처리의-문제)  
[비동기 처리 using promise](#비동기-처리-using-promise)  
[Using async](#using-async)  
[Using await](#using-await)  
[promise 병렬 실행](#promise-병렬-실행)  
[promise APIs : all](#promise-apis--all)  
[promise APIs : race](#promise-apis--race)  
[Reference](#reference)

<br><br>

## async & await

- syntactic sugar
- clear style of using promise
- 동기적으로 작동하는 것처럼 코드를 작성하게 해줌
- 가독성 좋아짐

<br>

#### 동기처리의 문제

```js
function fetchUser() {
  // do network request in 10 sec...
  return 'userName';
}
const user = fetchUser(); // 비동기처리를 하지 않으면 user 가지고 오는데 10초 걸림. 여기서 멈춤
console.log(user);
```

<br>

#### 비동기 처리 using promise

```js
function fetchUser() {
  // 비동기 처리
  return new Promise((resolve) => {
    // do network request in 10 sec...
    resolve('userName');
  });
}

const user = fetchUser();
user.then(console.log);
```

<br><br>

#### Using async

```js
async function fetchUser() {
  // do network request in 10 sec...
  return 'userName';
}

const user = fetchUser();
user.then(console.log);
```

<br>

#### Using await

- async가 붙은 함수 안에서만 사용

```js
// 일정 시간이 지난 후 resolve 리턴 함수
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 1. getApple(), getBanana() 선언
// async & await 사용
async function getApple() {
  await delay(2000); // delay가 끝날때까지 기다려!!
  return '🍎';
}

// async & await 사용 안했을 때
function getBanana() {
  return delay(1000).then(() => '🍌');
}

// 2. pickFruits() 선언
// async & await 사용
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

// async & await 사용 안했을 때
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

// print
pickFruits().then(console.log); // print: 🍎 + 🍌 //3000ms
```

<br>

#### promise 병렬 실행

```js
// promise는 선언하자마자 실행
// getApple(), getBanana() 는 서로 영향을 받지 않음
// 따라서 먼저 실행시켜 놓음
// 시간 단축 : 2000ms -> 1000ms

async function pickFruits() {
  const applePromise = getApple(); // 만들자마자 실행
  const bananaPromise = getBanana(); // 만들자마자 실행
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

// print
pickFruits().then(console.log); // print: 🍎 + 🍌 //2000ms
```

#### promise APIs : all

```js
// 병렬 실행 api
// 값을 배열 형식으로 주고 받음

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}

// async & await 로 바꾸면
async function pickAllFruits() {
  const fruits = await Promise.all([getApple(), getBanana()]);
  return fruits.join(' + ');
}

// print
pickAllFruits().then(console.log); // print: 🍎 + 🍌 //2000ms
```

#### promise APIs : race

```js
// 실행되는 것들 중
// 제일 먼저 실행되는 값 반환

function pickOne() {
  return Promise.race([getApple(), getBanana()]);
}

// print
pickOne().then(console.log); // print: 🍌 //1000ms
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Next - Destructuring Assignment, Spread Syntax, Optional Chaining](/Javascript/basic_17_es6_es11.md)

##### [Prev - Promise, Callback to Promise](/Javascript/basic_15_promise.md)
