'use-strict';

// // // 1. 동기와 비동기

// // JS is synchronous.
// // Execute the code block in order after hoisting.
// console.log(1);
// setTimeout(() => console.log(2), 1000);
// console.log(3);

// // Synchronous callback
// function printImmediately(print) {
//   print();
// }
// printImmediately(() => console.log('hello!'));

// // Asynchronous callback (비동기식)
// function printWithDelay(print, timeout) {
//   setTimeout(print, timeout);
// }
// printWithDelay(() => console.log('async callback'), 2000);

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
    }, 1000);
  }

  getRoles(user, onSuccess, onError) {
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
        console.log(idWithRole);
        //alert(`${idWithRole.name} is ${idWithRole.role}`);
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
