##### 최초작성일 : 2021. 9. 6.<br><br>

# Study Note

[Project Link](#project-link)  
[Note](#note)  
[Reference](#reference)

<br><br>

### Project Link

1. 끝말잇기 [[Github]](https://github.com/mansaout/word-relay), [[Go To Game]](https://mansaout.github.io/word-relay/)
2. 계산기 [[Github]](https://github.com/mansaout/calculator), [[Go To Game]](https://mansaout.github.io/calculator/)

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

```js

```

<br><br>

---

### **Reference**

- [Let’s Get IT 자바스크립트 프로그래밍, 조현영](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791165215873&orderClick=LAG&Kc=)

<br><br>

##### [Next - ]()
