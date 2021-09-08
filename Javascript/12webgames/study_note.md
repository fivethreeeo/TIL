##### 최초작성일 : 2021. 9. 6.<br><br>

# Study Note

[Project Link](#project-link)  
[Note](#note)  
[Reference](#reference)

<br><br>

### Project Link

1. 끝말잇기 [Github](https://github.com/mansaout/word-relay), [Go To Game](https://mansaout.github.io/word-relay/)
2. 계산기 [Github](https://github.com/mansaout/calculator), [Go To Game](https://mansaout.github.io/calculator/)
3. 숫자야구 게임 [Github](https://github.com/mansaout/number-baseball), [Go To Game](https://mansaout.github.io/number-baseball/)

<br>

### Note

- #### Html Tag Selector

```js
document.querySelector('선택자'); // 단일, 제일 처음 선택되는 태그
document.querySelectorAll('선택자'); // 다중, 선택자로 선택되는 모든 태그
```

<br>

- #### Event Listener

```js
태그.addEventListener('이벤트 이름', 리스너함수);

$button.addEventListener('click', onClickButton);
// '$button' 태그에
// 'click' 이벤트 발생 시
// 'onClickButton' 함수 호출
```

<br>

- #### 리스너함수의 매개변수로 event 객체 제공

```js
// 리스너 함수의 매개변수로 event 객체를 제공해서
// 이벤트와 관련된 정보를 얻을 수 있음

const 리스너함수 => (event) {
  console.log(event.target.value);
}

// event.target은 이벤트가 발생한 대상 태그를 가리킴
```

<br>

- #### Tag의 값 가져오기

```js
// 입력태그 input, select, textarea => .value
const $input = document.querySelector('input');
console.log($input.value);

// 일반태그 => .textContent
const $div = document.querySelector('div');
console.log($div.textContent);
```

- #### Tag Focus
  `tag.focus()`

<br>

- #### if 중첩 제거하기
  1. 공통된 절차를 각 분기점 내부에 넣는다.
  2. 분기점에서 짧은 절차부터 실행하게 `if문`을 작성한다.
  3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for문 내부의 경우)로 중단한다.
  4. else를 제거한다. (중첩 제거)
  5. 반복.

<br>

- #### 무작위로 숫자 뽑기

```js
Math.random(); // 0 <= n < 1
Math.random() * 9; // 0 <= n < 9
Math.random() * 9 + 1; // 1 <= n < 10

Math.floor(num); // 내림
Math.ceil(num); // 올림
Math.round(num); // 반올림
```

<br>

- #### indexOf, includes => 배열 속의 원하는 값 찾기

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

- #### `document.createElement`, `document.createTextNode`

  - 각각 Tag, Text를 만드는 메서드.
  - 다른 태그에 `append` 나 `appendChild` 하기 전까지 화면에 보이지 않음

- #### `append` 와 `appendChild`
  - `document.createElement`, `document.createTextNode` 로 만든 태그나 텍스트를, 선택한 태그의 자식 태그로 넣는다.
  - `appendChild`는 하나만, `append`는 다중

```js
let newDiv = document.createElement('div');
let newBr = document.createElement('br');
let newContent = document.createTextNode('환영합니다!');

document.querySelector('h3').append(newDiv, newBr);
newDiv.appendChild(newContent);
```

<br><br>

---

### **Reference**

- [Let’s Get IT 자바스크립트 프로그래밍, 조현영](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791165215873&orderClick=LAG&Kc=)

<br><br>
