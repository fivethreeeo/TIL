### Window Load

## Window Size

```js
// DOM 구성이 완료되었을 때 document 객체에서 실행
window.addEventListener('DOMContentLoaded', () => {});

// 페이지를 비롯한 이미지 등의 자원 전부가 모두 불러와졌을 때 window 객체에서 실행
window.addEventListener('load', () => {});
window.onload = () => {};

// 사용자가 페이지를 떠나려 할 때 window 객체에서 발생
// beforeunload 핸들러에서 추가 확인을 요청할 수 있음
window.addEventListener('beforeunload', () => {});
window.onbeforeunload = () => {};

// 사용자가 최종적으로 사이트를 떠날 때 window 객체에서 발생
// 사용자와의 상호작용은 할 수 없음
window.addEventListener('unload', () => {});
window.unload = () => {};
```

<br><br>

---

### **Reference**

- [프론트엔드 필수 브라우저 101, 드림코딩 by 엘리](https://academy.dream-coding.com/courses/browser101)
