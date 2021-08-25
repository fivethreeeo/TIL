##### 최초작성일 : 2021. 8. 24.<br><br>
# Switch, Loops
[Switch statement](#switch-statement)  
Loops
- [while](#--while--while-the-condition-is-truthy-body-code-is-executed)  
- [do while](#--do-while)  
- [for](#--for--forbegin-condition-step)  

[Reference](#reference)

<br><br>

## Switch statement
- use for multiple if checks
- use for enum(열거형)-like value checks
- use for multiple type checks in TS

```js
const browser = 'Whale';

switch (browser) {
  case 'IE':
    console.log('go away!');
    break; // 종료, 없으면 하단의 내용이 전부 출력

  case 'Chrome': // or 의 경우 붙여 씀
  case 'Whale':
    console.log('come here!');
    break;

  default: //일치하는 case가 없는 경우
    console.log('what!?');
    break;
}

// print: come here!
```

<br>

## Loops
#### - **`while`** : while the condition is truthy, body code is executed.
```js
let i = 3;
while (i > 0) {
    console.log(i);
    i--;
}

/* print :

3
2
1

*/
```

<br>

#### - **`do while`**
  -  1 - while the condition is truthy, Do 실행!
  -  2 - the condition true to false, While 실행!

```js
let i = 6;
do {
    console.log(`do: ${i}`);
    i--;
} while (i > 2){
    console.log(`while: ${i}`);
}

/* print :

do: 6
do: 5
do: 4
do: 3
while: 2

*/
```

<br>

#### - **`for`** : for(begin; condition; step)

```js
// executed 1 ~ 5
for (i = 1; i < 6; i++) {
    console.log(i); // print: 1 2 3 4 5
}
console.log(i); // print: 6

for (let k = 6; k > 0; k -= 2) {
    // inline variable declaration
    console.log(k); // print: 6 4 2
}
console.log(k); // Error: k is not defined
```

<br><br>
---
### **Reference**
- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>
---
##### [Next - ]()
##### [Prev - Operator]()