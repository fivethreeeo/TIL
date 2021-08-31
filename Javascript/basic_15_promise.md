##### 최초작성일 : 2021. 8. 31.<br><br>

#

[JavaScript is synchronous](#javascript-is-synchronous)  
[Callback](#callback)  
[Reference](#reference)

<br><br>

'use-strict';

// 프로미스 : 비동기 간편하게 처리할 수 있게 도와주는 오브젝트
// 성공/실패 시 값/에러를 반환해줌

// Promise is a JavaScript object for asynchronous operation

// 1. state (상태, 프로세스가 기능 수행 중인지 성공했는지 실패했는지)
// 2. producer(정보 제공자) & consumer(정보 소비자)

// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new promise is created, the executor runs automatically.
// 프로미스가 만들어지는 순간 excutor라는 콜백함수가 바로 수행한다. 주의!
const promise = new Promise((resolve, reject) => {
// doing some heavy work (network, read files)
console.log('doing something...');
setTimeout(() => {
resolve('mansa');
reject(new Error('no network'));
}, 2000);
});

// 2. Consumer : then, catch, finally
// then은 성공했을 때(resolve)
// catch는 에러상황 (reject)
// finally 성공 실패 상황 없이 출력
//
promise //
.then((value) => {
console.log(value);
})
.catch((error) => {
console.log(error);
})
.finally(() => {
console.log('finally');
});

// 3. Promise chaining
// then은 값 또는 promise 전달 가능
const fetchNumber = new Promise((resolve, reject) => {
setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then((num) => num _ 2)
.then((num) => num _ 3)
.then((num) => {
return new Promise((resolve, reject) => {
setTimeout(() => resolve(num - 1), 1000);
});
})
.then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
setTimeout(() => resolve('🐓'), 1000);
});

const getEgg = (hen) =>
new Promise((resolve, reject) => {
setTimeout(() => resolve(`${hen} => 🥚`), 1000);
});

const cook = (egg) =>
new Promise((resolve, reject) => {
setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen()
.then((hen) => getEgg(hen))
.then((egg) => cook(egg))
.then((meal) => console.log(meal));

getHen() //
.then(getEgg)
.then(cook)
.then(console.log);

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

## <br><br>

##### [Next - ]()

##### [Prev - Array - Declaration, index, loop, addition, deletion, searching](/Javascript/basic_11_array_api.md)

```

```
