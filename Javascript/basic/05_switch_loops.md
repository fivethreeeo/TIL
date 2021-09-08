##### 최초작성일 : 2021. 8. 24.<br><br>

# Switch, Loops

[Switch statement](#switch-statement)

Loops

- [while](#--while--while-the-condition-is-truthy-body-code-is-executed)
- [do while](#--do-while)
- [for](#--for--forbegin-condition-step)

[Quiz](#quiz---use-break-and-continue)  
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

  default:
    //일치하는 case가 없는 경우
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

- 1 - while the condition is truthy, Do 실행!
- 2 - the condition true to false, While 실행!

```js
let i = 6;
do {
  console.log(`do: ${i}`);
  i--;
} while (i > 2);
{
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

<br>

## Quiz

- Quiz 1

```js
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)

// 1.
for (i = 0; i < 11; i++) {
  if (i === 0 || i % 2 !== 0) {
    // i가 0 이거나 i의 나머지가 0이 아닐 때
    continue;
  }
  console.log(i);
}

// 2.
// 풀이 1을 Ternary 사용
for (i = 0; i < 11; i++) {
  i === 0 || i % 2 !== 0 ? undefined : console.log(i);
}

// 3.
// continue를 사용하지 않았을 경우
for (i = 0; i < 11; i++) {
  if (i !== 0 && i % 2 === 0) {
    // i가 0이 아니고 i의 나머지가 0일 때
    console.log(i);
  }
}

// print: 2 4 6 8 10
```

<br>

- Quiz 2

```js
// Q2. iterate from 0 to 10 and print numbers until reaching 8
// (use break)

for (i = 0; i < 11; i++) {
  console.log(i);
  if (i === 8) break;
}

// print: 0 1 2 3 4 5 6 7 8
```

<br>

- Quiz 3

```js
// hello 100번 출력 using while
{
  let i = 0;
  while (i < 100) {
    console.log('Hello');
    i++;
  }
}

// hello 100번 출력 using for
{
  for (let i = 0; i < 100; i++) {
    console.log('hello');
  }
}

// 1~100까지 출력 10을 찾으면 멈춤
{
  for (let i = 1; i < 100; i++) {
    console.log(i);
    if (i === 10) {
      break;
    }
  }
}
```

<br>

- Quiz 4. 구구단 출력

```js
// 함수형 1
{
  const gugudan = (dan) => {
    console.log(`${dan} 단`);
    for (let mult = 1; mult < 10; mult++) {
      console.log(`${dan} x ${mult} = ${dan * mult}`);
    }
  };
  gugudan(1);
}

// 함수형 2
{
  function gugudan(dan) {
    for (let mult = 1; mult < 10; mult++) {
      console.log(`${dan} x ${mult} = ${dan * mult}`);
    }
  }
}

// 바로 출력
for (let dan = 2; dan < 10; dan++) {
  console.log(`${dan} 단`);
  for (let mult = 1; mult < 10; mult++) {
    console.log(`${dan} x ${mult} = ${dan * mult}`);
  }
}

// 결과에 짝수가 안나오게
for (let dan = 2; dan < 10; dan++) {
  dan % 2 == 0 || console.log(`${dan} 단`);
  for (let mult = 1; mult < 10; mult++) {
    if (mult % 2 !== 0 && dan % 2 !== 0) {
      console.log(`${dan} x ${mult} = ${dan * mult}`);
    }
  }
}
```

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Next - Function declaration, Parameters](/Javascript/basic_06_function.md)

##### [Prev - Operator](/Javascript/basic_04_operator.md)
