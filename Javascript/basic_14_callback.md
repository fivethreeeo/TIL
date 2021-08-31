##### 최초작성일 : 2021. 8. 31.<br><br>

# Callback

[JavaScript is synchronous](#javascript-is-synchronous)  
[Callback](#callback)  
[Reference](#reference)

<br><br>

### JavaScript is synchronous

- Execute the code block in order after hoisting
- hoisting: var, function declaration (execution context)

<br>

### Callback

- 콜백 함수 :
  - 다른 코드의 인자로 넘겨주는 함수
  - call back - 되돌아 호출해달라
  - 적절한 시점에 실행

```js
console.log('synchronous 1');
setTimeout(() => console.log('Asynchronous'), 1000);
// 비동기적인 실행 방법 (Callback)
// 1000ms가 지난 후 실행
// 응답을 기다리지 않고 다음 줄로 넘어감. 1000ms가 지난 후 실행

console.log('synchronous 2');

/* print:

synchronous 1
Asynchronous
synchronous 1

*/
```

<br>

- Synchronous callback

```js
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello!'));
```

<br>

- Asynchronous callback

```js
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);
```

<br>

### Callback Hell example

- 콜백 체인의 문제점
  - 가독성 낮음

```js
// Callback Hell example
// UserStorage have 2 APIs - loginUser, getRoles
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    // loginUser()
    // 2000ms 이후
    // id, password가
    // - 조건에 맞으면 : id 반환
    // - 조건에 맞지 않으면 : error

    setTimeout(() => {
      if (
        (id === 'mansa' && password === 'out') ||
        (id === 'heo' && password === 'heo')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    // getRoles()
    // 1000ms 이후
    // user가
    // - 조건에 맞으면 : 오브젝트 반환

    setTimeout(() => {
      if (user === 'mansa') {
        onSuccess({ name: 'mansa', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();

const id = prompt('enter your id', 'mansa');
const password = prompt('enter your password', 'out');

userStorage.loginUser(
  id,
  password,
  (id) => {
    userStorage.getRoles(
      id,
      (idWithRole) => {
        alert(`${idWithRole.name} is ${idWithRole.role}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

## <br><br>

##### [Next - ]()

##### [Prev - Array - Declaration, index, loop, addition, deletion, searching](/Javascript/basic_11_array_api.md)

```

```
