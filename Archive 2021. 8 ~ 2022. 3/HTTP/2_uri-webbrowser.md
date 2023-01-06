# URI

[URI?](#uri-uniform-resource-identifier)  
[URI 문법](#url-문법)  
[웹 브라우저 요청 흐름](#웹-브라우저-요청-흐름)

## URI (Uniform Resource Identifier)

- **`Uniform`**: 리소스를 식별하는 통일된 방식
- **`Resource`**: 자원. URI로 식별할 수 있는 모든 것
- **`Identifier`**: 다른 항목과 구분하는데 필요한 정보

<br>

### URL, URN

- URI는 로케이터(locator), 이름(name) 또는 둘 다 추가로 분류될 수 있다.

- **`URL`**: Uniform Resource Locator

  - 리소스가 있는 위치를 지정

- **`URN`**: Uniform Resource Name

  - 리소스에 이름을 부여

- 위치는 변할 수 있지만, 이름은 변하지 않는다.
- URN 이름만으로 실제 리소스를 찾을 수 있는 방법이 보편화 되지 않음

<img width="400" src="https://user-images.githubusercontent.com/41741221/153449040-65c7f06f-47af-4e94-b77c-8a33b1175667.png">

<br>

### URL 문법

```
scheme://[userinfo@]host[:port][/path][?query][#fragment]

https://www.google.com:443/search?q=hello&hl=ko

Protocol: https
Host: www.google.com
Port: 443
Path: /search
Query Parameter: q=hello&hl=ko
```

<br>

**`scheme`**

- 주로 프로토콜 사용
  - 프로토콜: 어떤 방식으로 자원에 접근할 것인가 하는 약속 규칙. 예) http, https, ftp 등
- http는 80, https는 443 포트를 주로 사용

<br>

**`userinfo`**

- URL에 사용자 정보를 포함해서 인증
- 거의 사용안함

<br>

**`host`**

- 도메인명이나 IP주소를 입력

<br>

**`port`**

- 접속 포트. 일반적으로 생략, 생략 시 80, 443 사용

<br>

**`path`**

- 리소스 경로, 주로 계층적 구조
- ex) `ing.com/account/order`

<br>

**`query`**

- **`key=value`** 형태
- `?`로 시작, `&`로 추가가능
- 쿼리 파라미터, 쿼리 스트링 등으로 불림. 웹서버에 제공하는 파라미터, 문자 형태
- ex) `?keyA=valueA&keyB=valueB`

<br>

**`fragment`**

- html 내부 북마크 등에 사용
- 서버에 전송하는 정보 X

<br>

## 웹 브라우저 요청 흐름

<img width="600" src="https://user-images.githubusercontent.com/41741221/153449059-1bf9f432-e215-447d-80a0-365a846a9861.png">

<br>

1. DNS 조회, Port 번호 구하기
2. HTTP 요청 메시지 작성
3. SOCKET 라이브러리를 통해 전달
   1. A: TCB/IP 연결(IP,PORT) - 3 way handshake
   2. B: 데이터 전달
4. TCP/IP 패킷 생성, HTTP 메시지 포함
5. 요청 패킷을 서버에 전달
6. 서버는 패킷을 열어 메시지를 확인
7. 서버는 HTTP 응답 메시지 작성
8. 응답 패킷을 만들어서 클라이언트로 전달
9. 클라이언트는 패킷을 열어서 응답 메시지 처리

<br>

<br><br>

---

### **Reference**

- [모든 개발자를 위한 HTTP 웹 기본 지식, 김영한](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/dashboard)

```

```
