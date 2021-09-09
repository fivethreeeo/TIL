##### 최초작성일 : 2021. 8. 31.<br><br>

# JSON - Object to JSON, JSON to Object

[JSON](#json)  
[Object to JSON](#object-to-json)  
[JSON to Object](#json-to-object)  
[Reference](#reference)

<br><br>

## HTTP, AJAX

- HTTP : HyperText Transfer Protocol
  - Client가 어떻게 Server와 어떻게 하이퍼테스트를 주고 받을 수 있는지 규약한 Protocol
  - Client : request >>
  - Server : << response
- AJAX : Asynchronous Javascript And XML
  - 동적으로 서버에서 데이터를 받아오기 위해 사용
  - 대표적으로 XHR : XMLHttpRequest (오브젝트)
  - 최근 fetch() API 추가
- XML을 사용하면 불필요한 태그들이 많이 들어가서 사이즈 커지고 가독성 문제로 대신 JSON 사용

<br>

## JSON

- Simplest data interchange format
- lightweight text-based structure
- easy to read
- key-value pair
- used for serializaton and transmission of data between the network nnection
- **independent programming language and platform**
- object <-> string (json)
- serialize
- deserialize

<br>

## Object to JSON

- `stringify(object)`
- `stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;`
- `stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;`

```js
// any type
let json = JSON.stringify(true);
console.log(true, typeof true); // print: true boolean
console.log(json, typeof json); // print: true string

// array
json = JSON.stringify(['lakers', 'nets']);
console.log(json, typeof json); // print: ["lakers","nets"] string

// object
const king = {
  name: 'james',
  team: 'lakers',
  roll: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} is flying from downtown!`);
  },
};

json = JSON.stringify(king);
json = JSON.stringify(king);
console.log(json);
// print: {"name":"james","team":"lakers","roll":null,"birthDate":"2021-08-31T01:34:42.305Z"}
// birthDate의 value가 string으로 변환
// jump() 는 포함 x

json = JSON.stringify(king, ['name', 'roll']);
console.log(json); // print: {"name":"james","roll":null}

json = JSON.stringify(king, (key, value) => {
  return key === 'name' ? 'changeName!!' : value;
});
console.log(json);
// print: {"name":"changeName!!","team":"lakers","roll":null,"birthDate":"2021-08-31T01:40:50.156Z"}
```

<br>

## JSON to Object

- `parse(json)`
- `parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;`

```js
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
console.log(obj.birthDate.getDate()); // Error -> json 변환 과정에서 birth가 stirng으로 됨

// reviver
const obj2 = JSON.parse(json, (key, value) => {
  return key === 'birthDate' ? new Date() : value;
});
console.log(obj2.birthDate.getDate()); // print: 31
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Next - Callback](/Javascript/basic/14_callback.md)

##### [Prev - Array APIs - join(), split(), reverse(), slice(), find(), filter(), map(), some(), every(), reduce()](/Javascript/basic/12_array_api.md)
