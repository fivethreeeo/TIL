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
  //.then(console.log) // 로그인 성공 : 성공한 아이디 출력
  .catch(console.log) // 로그인 에러 : 에러 출력
  .then(userStorage.getRoles)
  .then(console.log) // 어드민 체크 성공 : 오브젝트 출력
  .catch(console.log); // 어드민 체크 에러 : 에러 출력

// userStorage.loginUser(
//   id,
//   password,
//   (id) => {
//     userStorage.getRoles(
//       id,
//       (idWithRole) => {
//         console.log(idWithRole);
//         //alert(`${idWithRole.name} is ${idWithRole.role}`);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );
