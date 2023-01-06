'use-strict';

// async & await
// 동기직으로 작동하는 것처럼 코드를 작성하게 해줌
// 프로미스 체이닝
// syntactic sugar
// clear style of using promise
// 무조건 좋은 거 아님

// 1. async
function fetchUser() {
  // do network request in 10 sec...
  return 'userName1';
}
const user = fetchUser(); // 비동기처리를 하지 않으면 user 가지고 오는데 10초 걸림. 여기서 멈춤
console.log(user);

// 2. promise
function fetchUser2() {
  // 비동기 처리
  return new Promise((resolve, reject) => {
    // do network request in 10 sec...
    resolve('userName2');
  });
}

const user2 = fetchUser2();
user2.then(console.log);

// 3. async
async function fetchUser3() {
  // do network request in 10 sec...
  return 'userName3';
}

const user3 = fetchUser3();
user3.then(console.log);

// 2. await
// async 붙은 함수 안에서만 사용
// delay는 정해진 시간 후 값을 호출하는 프로미스를 리턴함

var count = 1;
const countFunc = function () {
  console.log(count);
  if (++count > 10) clearInterval(timer);
};
const timer = setInterval(countFunc, 1000);

function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000); // delay가 끝날때까지 기다려!!
  return '🍎';
}

function getBanana() {
  return delay(2000).then(() => '🍌');
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

async function pickFruits2() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

//병렬실행
async function pickFruits3() {
  const applePromise = getApple(); // 만들자마자 실행
  const bananaPromise = getBanana(); // 만들자마자 실행
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

// useful promise apis
// all

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' - ')
  );
}

// race : pick one
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickFruits().then(console.log);
pickFruits2().then(console.log);
pickFruits3().then(console.log);
pickAllFruits().then(console.log);
pickOnlyOne().then(console.log);
