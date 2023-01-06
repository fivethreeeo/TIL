// 2. JSON to Object
// parse(json)

// json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
// console.log(obj);
// rabbit.jump();
// // obj.jump();

// console.log(rabbit.birthDate.getDate());
// // console.log(obj.birthDate.getDate());birthDdate가 스트링이다

// const objReviver = JSON.parse(json, (key, value) => {
//   console.log(`key: ${key}, value: ${value}`);
//   return key === 'birthDate' ? new Date() : value;
// });
// console.log(objReviver);

// console.log(objReviver.birthDate.getDate());
const king = {
  name: 'james',
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} is flying from downtown!`);
  },
};

const json = JSON.stringify(king); // ojbect to JSON
const obj = JSON.parse(json); // JSON to object

console.log(obj);
// print: {name: "james", birthDate: "2021-08-31T01:44:12.691Z"}

console.log(king.birthDate.getDate()); // print: 31
//console.log(obj.birthDate.getDate());
// Error -> json 변환 과정에서 birth가 stirng으로 됨

const obj2 = JSON.parse(json, (key, value) => {
  return key === 'birthDate' ? new Date() : value;
});
console.log(obj2.birthDate.getDate());
