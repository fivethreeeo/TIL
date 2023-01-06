# HTTP - HyperText Transfer Protocol

[HTTP?](#http)  
[클라이언트 서버 구조](#클라이언트-서버-구조)  
[무상태 프로토콜(stateless)](#무상태-프로토콜stateless)  
[비연결성(connectionless)]()  
[HTTP 메시지](#http-메시지)

## HTTP?

- HTML, TEXT
- 이미지, 음성, 영상 파일
- JSON, XML(API)
- 서버간에 데이터를 주고 받을 때도 대부분 사용

<br>

### HTTP 버전

- HTTP/1.1 (1997) : 가장 많이 사용. 중요
- HTTP/2 (2015)
- HTTP/3 : TCP 대신 UDP 사용

<br>

- 2, 3은 성능 개선에 초점.

<br>

### 기반 프로토콜

- **`TCP`** : HTTP/1.1, HTTP/2
- **`UDP`** : HTTP/3

<br>

### HTTP 특징

- 클라이언트-서버 구조
- 무상태 프로토콜(스테이스리스), 비연결성
- HTTP 메시지
- 단순함, 확장 가능

<br>

## 클라이언트 서버 구조

### Request - Response 구조

- 클라이언트는 서버에 요청을 보내고, 응답을 대기
- 서버가 요청에 대한 결과를 만들어서 응답

<img width="600" src="https://user-images.githubusercontent.com/41741221/153723869-90759301-08ab-4741-9fc3-d12e2fc140cc.png">

<br>

- 클라이언트와 서버를 분리하는 것이 중요하다.
- 비지니스 로직, 복잡한 데이터는 전부 서버에서 처리하도록 하고 클라이언트는 UI 그리는 것에 집중
- 양쪽이 독립적으로 진화할 수 있다.

<br>

## 무상태 프로토콜(Stateless)

### Stateless

- 서버가 클라이언트의 상태를 보존하지 않음
- 장점 : 서버 확장성 높음(스케일 아웃)
- 단점 : 클라이언트의 전송 데이터가 추가됌

<br>

- 갑자기 클라이언트 요청이 증가해도 서버를 대거 투입할 수 있다.
  - 무상태는 응답 서버를 쉽게 바꿀 수 있다. -> 무한한 서버 증설 가능
- 대규모 이벤트 페이지 등

### Stateful

- 항상 같은 서버가 유지되어야 한다.
  - 상태를 가지고 있기 때문에, 서버가 죽거나 문제가 생길 경우 문제 생김

<br>

### 실무 한계

- 로그인 등
- 상태 유지는 최소한만 사용

<br>

## 비연결성(connectionless)

- **`HTTP`** 는 기본이 연결을 유지하지 않는 모델

<br>

## HTTP 메시지

<br>

<br><br>

---

### **Reference**

- [모든 개발자를 위한 HTTP 웹 기본 지식, 김영한](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/dashboard)

```

```
