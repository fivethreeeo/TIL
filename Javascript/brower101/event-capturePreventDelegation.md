# 이벤트 버블링 & 캡처 & 위임

[이벤트 버블링](#이벤트-버블링)  
[이벤트 캡처](#이벤트-캡처)  
[stopPropagation(), stopImmediatePropagation()](#eventstoppropagation-eventstopimmediatepropagation)  
[이벤트 위임](#이벤트-위임)

### 이벤트 버블링

- 특정 요소에서 이벤트가 발생했을 때, 해당 이벤트가 트리 구조상 상위(부모)의 요소로들로 전달되는 것
- click이벤트를 예로, 특정 요소에서 click이벤트가 발생하면

```js
const outer = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const button = document.querySelector('button');

outer.addEventListener('click', (event) => {
  // if (event.target !== event.currentTarget) return;
  console.log(`outer: ${event.currentTarget}, ${event.target}`);
});

middle.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget) return;
  console.log(`middle ${event.currentTarget}, ${event.target}`);
});

button.addEventListener('click', (event) => {
  console.log(`button1 ${event.currentTarget}, ${event.target}`);
});

// button 클릭 결과

// button1: [object HTMLButtonElement], [object HTMLButtonElement]
// outer: [object HTMLDivElement], [object HTMLButtonElement]
```

- `outer`가 버블링 되어 작동
- 거의 사용할 일 없음
- `addEventListener` 의 옵션 중 `capture : true` 해주면 동작

<br>

### 이벤트 캡처

- 이벤트 버블링과 반대 방향으로 이벤트가 전파 됨
- 자식 요소들에게 전파

<br>

### event.stopPropagation(), event.stopImmediatePropagation()

#### event.stopPropagation()

- 해당 요소 이벤트만 동작시키고 버블링, 캡처 하지로 이벤틀르 전달X

<br>

#### event.stopImmediatePropagation()

- 호출된 즉시 이벤트를 종료 시킴.

<br>

### 이벤트 위임

- 되도록 위임하자
- 중간에 요소를 추가할 경우 더 쉬움
- 성능 개선 효과

```js
// 직접 이벤트리스너 설정
const items = document.querySelectorAll('li');
items.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.add('selected');
  });
});

// 이벤트 버블링으로 이벤트 위임
const ul = document.querySelector('ul');
ul.addEventListener('click', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.classList.add('selected');
    const node = event.target;
    console.log(event);
  }
});
```

<br><br>

---

### **Reference**

- https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
- [프론트엔드 필수 브라우저 101, 드림코딩 by 엘리](https://academy.dream-coding.com/courses/browser101)
