##### 최초작성일 : 2021. 9. 6.<br><br>

# Study Note

[Project Link](#project-link)  
[Note](#note)  
[- Html Tag Selector](#html-tag-selector)  
[- Event Listener](#event-listener)  
[- 리스너 함수의 매개 변수로 event 객체 제공](#리스너함수의-매개변수로-event-객체-제공)  
[- Tag의 값 가져오기 ](#tag의-값-가져오기)  
[- Tag focus](#tag-focus)  
[- if 중첩 제거하기](#if-중첩-제거하기)  
[- 무작위로 숫자 뽑기](#무작위로-숫자-뽑기)  
[- indexOf(), includes - 배열 속 값 찾기](#indexof-includes--배열-속의-원하는-값-찾기)  
[- document.createElement, document.createTextNode](#documentcreateelement-documentcreatetextnode)  
[- append, appendChild](#append-와-appendchild)  
[- var Scope vs let Scope](#var-스코프-vs-let-스코프)  
[- Fisher-Yates-Shuffle Algorithm](#fisher-yates-shuffle-algorithm-피셔-예이츠-셔플-알고리즘)  
[- clearInterval, clearTimeout](#clearinterval-cleartimeout)  
[- removeEventListener](#removeeventlistener)  
[- classList](#classlist)  
[- date()](#date)  
[- 구조분해 할당](#구조분해-할당)  
[- 이벤트 버블링](#이벤트-버블링-event-bubbling)  
[- parentNode, children](#parentnode-children)  
[- 유사 배열 객체, Array.from](#유사-배열-객체-arrayfrom)  
[- rowIndex, celIndex](#rowindex-cellindex)  
[- flat()](#flat)  
[- window]()  
[- this]()  
[- 참조, 깊은 복사, 얕은 복사]()  
[- 클래스]()  
[- 클래스 상속]()  
[- ]()  
[Reference](#reference)

<br><br>

### Project Link

1. 끝말잇기 [Github](https://github.com/mansaout/word-relay), [Go To Game](https://mansaout.github.io/word-relay/)
2. 계산기 [Github](https://github.com/mansaout/calculator), [Go To Game](https://mansaout.github.io/calculator/)
3. 숫자야구 게임 [Github](https://github.com/mansaout/number-baseball), [Go To Game](https://mansaout.github.io/number-baseball/)
4. 로또추첨기 [Github](https://github.com/mansaout/lotto), [Go To Game](https://mansaout.github.io/lotto/)
5. 가위바위보 [Github](https://github.com/mansaout/scissors-rock-spaper), [Go To Game](https://mansaout.github.io/scissors-rock-spaper/)
6. 반응속도 테스트 [Github](https://github.com/mansaout/response-check), [Go To Game](https://mansaout.github.io/response-check/)
7. 틱택토 게임 [Github](https://github.com/mansaout/tictactoe), [Go To Game](https://mansaout.github.io/tictactoe/)

<br>

### Note

#### Html Tag Selector

```js
document.querySelector('선택자'); // 단일, 제일 처음 선택되는 태그
document.querySelectorAll('선택자'); // 다중, 선택자로 선택되는 모든 태그
```

<br>

#### Event Listener

```js
태그.addEventListener('이벤트 이름', 리스너함수);

$button.addEventListener('click', onClickButton);
// '$button' 태그에
// 'click' 이벤트 발생 시
// 'onClickButton' 함수 호출
```

<br>

#### 리스너함수의 매개변수로 event 객체 제공

```js
// 리스너 함수의 매개변수로 event 객체를 제공해서
// 이벤트와 관련된 정보를 얻을 수 있음

const 리스너함수 => (event) {
  console.log(event.target.value);
}

// event.target은 이벤트가 발생한 대상 태그를 가리킴
```

<br>

#### Tag의 값 가져오기

```js
// 입력태그 input, select, textarea => .value
const $input = document.querySelector('input');
console.log($input.value);

// 일반태그 => .textContent
const $div = document.querySelector('div');
console.log($div.textContent);
```

#### Tag Focus

`tag.focus()`

<br>

#### if 중첩 제거하기

1. 공통된 절차를 각 분기점 내부에 넣는다.
2. 분기점에서 짧은 절차부터 실행하게 `if문`을 작성한다.
3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for문 내부의 경우)로 중단한다.
4. else를 제거한다. (중첩 제거)
5. 반복.

<br>

#### 무작위로 숫자 뽑기

```js
Math.random(); // 0 <= n < 1
Math.random() * 9; // 0 <= n < 9
Math.random() * 9 + 1; // 1 <= n < 10

Math.floor(num); // 내림
Math.ceil(num); // 올림
Math.round(num); // 반올림
```

<br>

#### indexOf, includes => 배열 속의 원하는 값 찾기

```js
// indexOf
// => 원하는 값이 들어 있다면 해당 값의 인덱스 반환
// => 일치하는 값이 없다면 -1 반환
console.log('2345'.indexOf(4)); // 2
console.log('2345'.indexOf(8)); // -1
['2', '3', '4'].indexOf(3); // -1 , 자료형까지 같아야 함

// includes
// => true, false 반환
console.log('2345'.includes(2)); // true
console.log('2345'.includes(6)); // false
```

<br>

#### `document.createElement`, `document.createTextNode`

- 각각 Tag, Text를 만드는 메서드.
- 다른 태그에 `append` 나 `appendChild` 하기 전까지 화면에 보이지 않음

<br>

#### `append` 와 `appendChild`

- `document.createElement`, `document.createTextNode` 로 만든 태그나 텍스트를, 선택한 태그의 자식 태그로 넣는다.
- `appendChild`는 하나만, `append`는 다중

```js
let newDiv = document.createElement('div');
let newBr = document.createElement('br');
let newContent = document.createTextNode('환영합니다!');

document.querySelector('h3').append(newDiv, newBr);
newDiv.appendChild(newContent);
```

<br>

#### `var` 스코프 vs `let` 스코프

- `var`는 함수 스코프
- `let`은 블록 스코프

```js
// var는 함수 스코프
// 함수만 신경씀
// for, if 문 등의 안에 있어도 밖에서 접근 가능
for (var i = 0; i < 5; i++) {}
console.log(i); // 5

//let은 블록 스코프
for (let k = 0; k < 5; k++) {}
console.log(k); // Error: k is not defined
```

<br>

#### Fisher-Yates-Shuffle Algorithm (피셔-예이츠 셔플 알고리즘)

> 숫자를 무작위로 섞는 방법.  
> 먼저, 무작위 인덱스를 하나 뽑은 후, 그에 해당되는 요소를 새로운 배열로 옮깁니다. 이를 반복하다 보면 새 배열에 무작위로 섞인 숫자들이 들어갑니다.

<br>

#### `clearInterval`, `clearTimeout`

- 각각 `setInterval`, `setTimeout` 함수를 취소할 수 있음
- 단, `clearTimeout`은 `setTimeout`에 지정한 함수가 아직 실행되지 않았을 때만 취소할 수 있음

```js
let setTimeoutId = setTimeout(functionName, 1000);

clearTimeout(setTimeoutId);
```

<br>

#### `removeEventListener`

- `addEventListener`로 연결한 함수를 제거할 수 있음.
- 단, 연결할 때의 함수와 제거할 때의 함수가 같아야 함

```js
function printSomething(message) {
  console.log(message);
}

$tag.addEventListener('click', printSomething);
$tag.removeEventListener('click', printSomething);
```

<br>

- **고차함수 의 경우**

```js
const fun = (num) => () => {
  console.log('고차함수입니다', num);
};

const fun1 = fun(1);
$tag.addEventListener('click', fun1);
$tag.removeEventListener('click', fun1);

// 고차 함수 인 fun(1)은 항상 새로운 값을 반환
// fun(1) === fun(1) 은 false
```

<br>

#### `classList`

- `$tag.classList` 객체를 통해 태그에 붙은 클래스를 조작할 수 있음
- 클래스 존재 여부 : `contains`
- 클래스 추가 : `add`
- 클래스 제거 : `remove`
- 클래스 수정 : `replace`

```js
$tag.classList.contains('abc'); // return true or false

$tag.classList.add(`className`);
$tag.classList.remove(`className`);
$tag.classList.replace(`current`, 'new');
```

<br>

#### `Date()`

- 형식 : `new Date()`
- 현재 시각을 출력
- 시각을 직접 지정하고 싶을 때는 인수로 **연, 월, 일, 시, 분, 초**를 넣는다.
  - 월은 0부터 시작
- 두 값을 빼면 시간 차이가 밀리초 단위로 반환

```js
new Date();
// Sun Sep 19 2021 01:27:12 GMT+0900 (한국 표준시)

new Date(2002, 0, 31);
// Thu Jan 31 2002 00:00:00 GMT+0900 (한국 표준시)

new Date(2021, 2, 31, 18, 30, 5);
// Wed Mar 31 2021 18:30:05 GMT+0900 (한국 표준시)

const diff = new Date(2021, 9, 10) - new Date(2021, 9, 9);
// 86400000

console.log(diff / 1000 / 60 / 60 / 24); // 1 (day)
console.log(diff / 1000 / 60 / 60); // 24 (hours)
console.log(diff / 1000 / 60); // 1440 (minutes)
```

<br>

#### 구조분해 할당

- 객체 내부의 속성과 할당하는 변수명이 같을 때 줄여서 작성 가능

```js
const body = document.body;
// =>
const { body } = document;

const obj = { a: 1, b: 2 };
const a = obj.a;
const b = obj.b;
// =>
const { a, b } = obj;

// 배열도 가능
const array = [1, 2, 3];
const one = array[0];
const two = array[1];
const three = array[2];
// =>
const [one, two, three] = array;
```

<br>

#### 이벤트 버블링 (event bubbling)

- 이벤트가 발생할 때 부모 태그에도 동일한 이벤트가 발생하는 현상
- 자식 태그에서 발생한 이벤트가 부모 태그까지 전달
- 이벤트 버블링 현상이 일어나면 이벤트 리스너 콜백 함수의 `event.target`은 이벤트가 발생한 태그로 바뀜
- 이벤트가 발생한 태그가 아닌 이벤트를 연결한 태그에 접근하려면 `event.currentTarget` 을 사용

<br>

#### `parentNode`, `children`

- `parentNode` : 현재 태그의 부모 태그를 찾고 싶을 때
- `children` : 현재 태그의 자식 태그를 찾고 싶을 때

```html
<ul>
  <li class="li_1"></li>
  <li class="li_2"></li>
  <li class="li_3"></li>
</ul>
```

```js
document.querySelector('li_1').parentNode; // ul 태그

document.querySelector('ul').children; // {0 : li, 1: li, 2: li}
// 배열 모양의 객체
```

<br>

#### 유사 배열 객체, `Array.from`

- `children` 속성 같은 배열 모양의 객체를 유사 배열 객체라 함
- 배열이 아니므로 배열 메서드 사용할 수 없음
- 배열 메서드를 사용하려면 `Array.from` 메서드로 유사 배열 객체를 배열로 바꿈

```html
<ul>
  <li class="li_1"></li>
  <li class="li_2"></li>
  <li class="li_3"></li>
</ul>
```

```js
const $ul = document.querySelector('ul');
Array.from($ul.children); // [li, li, li]
```

<br>

#### `rowIndex`, `cellIndex`

- tr 태그의 몇 번 째 줄인지를 알려주는 `rowIndex`
- td 태그의 몇 번 째 칸인지 알려주는 `cellIndex`

```js
const rowIndex = $tr.rowIndex;
const cellIndex = $td.cellIndex;
```

<br>

#### `flat()`

- 배열의 차원을 한 단계 낮추는 method
- n차원 배열을 n-1차원 배열로 낮춤
- 1차원 배열은 flat해도 1차원

```js
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

array.flat();
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

<br><br>

---

### **Reference**

- [Let’s Get IT 자바스크립트 프로그래밍, 조현영](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791165215873&orderClick=LAG&Kc=)

<br><br>
