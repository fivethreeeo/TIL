##### 최초작성일 : 2021. 8. 31.<br><br>

# Promise, Callback to Promise

[Promise](#promise)  
[Producer](#producer)  
[Consumer](#consumer)  
[Promise chaining](#promise-chaining)  
[Error Handing](#error-handling)  
[Callback to Promise](#callback-to-promise)  
[Reference](#reference)

<br><br>

## Promise

- Promise is a JavaScript object for asynchronous operation
- 비동기를 간편하게 처리할 수 있게 도와주는 오브젝트
- 성공/실패 시 값/에러를 반환
- state : pending -> funfilled or rejected
- producer(정보 제공자)
- consumer(정보 소비자) : then, catch, finally

<br>

### Producer

- When new promise is created, the executor runs automatically
- 프로미스가 만들어지는 순간 executor 콜백 함수가 바로 수행

```js
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...1');

  setTimeout(() => {
    resolve(console.log('doing something...2'));
    reject(new Error('no network'));
  }, 2000);
  console.log('doing something...3');
});

// print:
// doing something...1
// doing something...2
// doing something...3
```

<br>

### Consumer

- then 성공했을 때 (resolve)
- catch 에러상황일 때 (reject)
- finally 성공, 에러 상관없이 출력

```js
const promise = new Promise((resolve, reject) => {
  console.log('doing something...1');

  setTimeout(() => {
    resolve('sucess');
    reject(new Error('fail'));
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
  }) // then(console.log) 축약 가능
  .catch((error) => {
    console.log(error);
  }) // catch(console.log) 축약 가능
  .finally(() => {
    console.log('finally');
  }); // finally(console.log) 축약 가능

// print:
// doing something...1
// sucess
// finally
```

<br>

### Promise chaining

- then은 값 또는 promise 전달 가능

```js
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    // 프로미스 전달
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// print: 5
```

<br>

### Error Handling

```js
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error on '${hen} => 🥚'`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => '🌼') // Error일 경우 꽃 반환
  .then(cook)
  .then(console.log);
//.catch(console.log) // Error 출력
```

<br>

### Callback to Promise

```js
'use-strict';

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'mansa' && password === 'out') ||
          (id === 'heo' && password === 'heo')
        ) {
          resolve(id);
        } else {
          reject(new Error('user not found'));
        }
      }, 1000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'mansa') {
          resolve({ name: 'mansa', role: 'admin' });
        } else {
          reject(new Error('user have no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .catch(console.log); // 에러 출력
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Next - async & await, all(), race()](/Javascript/basic_16_async_await.md)

##### [Prev - Callback](/Javascript/basic_14_callback.md)
