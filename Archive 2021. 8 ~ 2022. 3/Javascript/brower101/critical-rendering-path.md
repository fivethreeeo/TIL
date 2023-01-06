# Critical Rendering Path (브라우저 렌더링 과정)

## Critical Rendering Path 란?

- 브라우저가 페이지의 초기 출력을 위해 실행해야 하는 순서.
- 줄여서 `CRP`

<br>

## 브라우저 렌더링 순서

#### `Construction` : 브라우저 언어로 바꾸는 파트

1. 브라우저가 서버에 HTML파일 요청 `(requests/response)`
2. 파일을 받아서 로딩 `(loading)`
3. 파일을 읽으면서 DOM요소로 변환 `(scripting)`

- 최종적으로 `DOM > CSSOM > RenderTree` 를 만든다.

<br>

#### `Operation` : 브라우저에 그림을 그려 렌더링하는 파트

1. dom tree와 cssom tree를 묶어 render tree를 생성 `(rendering)`
2. render tree를 기반으로 layout 생성 `(layout)`
3. 실제 화면에 픽셀로 표현 `(painting)`

- `Layout > Paint > Composition` 과정을 통해 내용을 전달

<br>

## 최적화하는 이유

- 각 과정에서 불필요한 작업을 제거해 초기 렌더링 시간을 단축시켜 사용자 경험을 향상시키기 위함.

<br>

## CRP 최적화하기

### Construction 파트

- DOM, CSSDOM 요소가 작을수록 Tree가 작아져 더 빠르게 만들 수 있다.
  - 불필요한 태그, css클래스 남용하지 않기. ex) css만을 위한 중첩 div들, wrapping 요소

<br>

### Operation 파트

- 요소의 동적 움직임 필요시, 꼭 필요한 동작만 수행하게해 성능 개선할 수 있다.
  - `Layout > Paint > Composition` 과정에서 Paint가 자주 일어나지 않도록 만들기  
    ex) 요소 움직일 때 translate 등 이용, layout는 최대한 막게 설계
- 크롬 개발자 도구의 Layers 활용
- 크롬 개발자 도구의 퍼포먼스 > 로딩, 스크립팅, 렌더링 성능 확인하기
  - 녹화해서 프레임 확인해보기. layout이 발생하면 경고
- 크롬 팔레트에서 `Show layout shift region` 으로 실시간 변경 레이아웃 체크
- [CSS Triggers](https://csstriggers.com/)

<br><br>

---

### **Reference**

- https://ui.toast.com/fe-guide/ko_PERFORMANCE#%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%EC%97%90-%ED%95%84%EC%9A%94%ED%95%9C-%EC%9D%B4%EB%A1%A0%EA%B3%BC-%EC%B8%A1%EC%A0%95-%EB%8F%84%EA%B5%AC
- [프론트엔드 필수 브라우저 101, 드림코딩 by 엘리](https://academy.dream-coding.com/courses/browser101)
