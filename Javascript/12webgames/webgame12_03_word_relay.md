##### 최초작성일 : 2021. 9. 6.<br><br>

# 3. DOM 객체 다루기 - 끝말잇기 게임

[Project Link](#project-link)  
[Go to Game](#go-to-game)  
[Note](#note)  
[Reference](#reference)

<br><br>

### Project Link

- [Github](https://github.com/mansaout/word-relay)
- [Go To Game](https://mansaout.github.io/word-relay/)

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

- ### Tag의 값 가져오기

```js
// 입력태그 input, select, textarea => .value
const $input = document.querySelector('input');
console.log($input.value);

// 일반태그 => .textContent
const $div = document.querySelector('div');
console.log($div.textContent);
```

- ### Tag Focus
  `tag.focus()`

<br><br>

---

### **Reference**

- [Let’s Get IT 자바스크립트 프로그래밍, 조현영](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791165215873&orderClick=LAG&Kc=)

<br><br>

##### [Next - ]()
