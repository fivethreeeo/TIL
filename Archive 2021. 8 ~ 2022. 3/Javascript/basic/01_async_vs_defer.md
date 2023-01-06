##### 최초작성일 : 2021. 8. 24.<br><br>
# async vs deter
[](#)  
[Reference](#reference)

<br><br>

## **async vs defer**
- parsing HTML > 한줄씩 읽으면서 DOM 요소로 변환
- script 태그가 보이면 parsing을 멈추고 필요한 js 파일을 다운받거나 읽음 : fetching js, executing js
- 단점: js파일이 크거나 인터넷이 느리다면 속도가 느려진다.
- parsing HTML 완료 후 fetching, executing js 할 수있음
- 단점: 만약에 js에 의존적이면 사용자가 의미있는 컨텐츠를 보기까지 오래걸림.

- asyn
  - asyn은 병렬로 받음 fetching완료후 parsing을 멈추고 executing 후에 다시 parsing.
  - js 다운로드 시간 졀약 but, parsing 전에 js가 실행됨

- defer
  - parsing 중 병렬로 받음 -> parsing이 끝난 후 executing




<br><br>
---
### **Reference**
- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>
---
##### [Next - Variable, Constant, Variable Types, Dynamic typing]()