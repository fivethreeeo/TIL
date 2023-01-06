'use-strict';

function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000); // delay가 끝날때까지 기다려!!
  return '🍎';
}

class UserStorage {
  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  async loginUser1(id, password) {
    await delay(1000);
    try {
      (id === 'mansa' && password === 'out') ||
        (id === 'heo' && password === 'heo');
    } catch (error) {
      return new Error('user not found');
    }
    return id;
  }

  async getRoles1(user) {
    await delay(1000);
    if (user === 'mansa') {
      return { name: 'mansa', role: 'admin' };
    } else {
      return new Error('user have no access');
    }
  }

  // getRoles(user) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (user === 'mansa') {
  //         resolve({ name: 'mansa', role: 'admin' });
  //       } else {
  //         reject(new Error('user have no access'));
  //       }
  //     }, 1000);
  //   });
  // }
}

const userStorage = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser1(id, password)
  .then(userStorage.getRoles1)
  .then(console.log);

// 'use-strict';

// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (
//           (id === 'mansa' && password === 'out') ||
//           (id === 'heo' && password === 'heo')
//         ) {
//           resolve(id);
//         } else {
//           reject(new Error('user not found'));
//         }
//       }, 1000);
//     });
//   }

//   getRoles(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user === 'mansa') {
//           resolve({ name: 'mansa', role: 'admin' });
//         } else {
//           reject(new Error('user have no access'));
//         }
//       }, 1000);
//     });
//   }
// }

// const userStorage = new UserStorage();

// const id = prompt('enter your id');
// const password = prompt('enter your password');

// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then(console.log)
//   .catch(console.log);
