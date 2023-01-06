# Internet Network

[IP (Internet Protocol)](#ip-internet-protocol)  
[TCP](#tcp---전송-제어-프로토콜transmission-control-protocol)  
[UDP](#udp---사용자-데이터그램-프로토콜user-datagram-protocol)  
[PORT](#PORT)  
[DNS](#dns---도메인-네임-시스템domain-name-system)

## IP (Internet Protocol)

- 클라이언트와 서버는 복잡한 인터넷 망 속에서 통신한다.
- 복잡한 인터넷 망 속에서 통신하기 위한 최소한의 규칙이다.
- 인터넷 프로토콜, IP 프로토콜 이라고도 한다.

<br>

### IP의 역할

- 지정한 IP Address에 데이터 전달
  통신 단위로 데이터 전달

<br>

- **`IP Packet`** : 출발지IP, 목적지IP, 기타...
- 인터넷 망의 노드들이 IP Packet을 던지고 던지면 최종 목적지IP에 도달한다.
- 요청, 응답 시 출발지IP와 목적지IP가 같아도 서로 다른 노드들로 전달될 수 있다.

<br>

### IP 프로토콜의 한계

- **`비연결성`**: 패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷이 전송된다.(상대방 PC가 꺼짐 등)
- **`비신뢰성`**: 중간에 패킷이 사라지거나, 순서대로 오지 않을 수 있다.
- **`프로그램 구분`**: 같은 IP에서 여러가지 어플리케이션이 실행하는 경우 구분할 수 없다.
- 이런 문제들을 해결해주는 게 **`TCP 프로토콜`**이다.

<br>

## TCP - 전송 제어 프로토콜(Transmission Control Protocol)

### 인터넷 프로토콜 스택의 4계층

- **`애플리케이션 계층`** - HTTP, FTP
- **`전송 계층`** - TCP, UDP
- **`인터넷 계층`** - IP
- **`네크워크 인터페이스 계층`** - LAN 카드 등등

<br>

<img width="600" src="https://user-images.githubusercontent.com/41741221/153425652-b2e216fb-83d0-4d9e-ae80-1e1cc87872d8.png">

<br>

### TCP/IP 패킷 정보

- 출발지PORT, 목적지PORT, 전송제어, 순서, 검증 정보...
- IP만으로 해결되지 않은 문제를 해결할 수 있다.

<br>

### TCP 특징

- **`연결지항`**: TCP 3 way handshake(가상연결)

  - 연결을 먼저 한 다음에 전송한다.
  - 논리적으로 연결이 됐다는 것이지, 실제 물리적으로 연결이 된 것은 아니다.

- **`데이터 전달 보증`**

  - 데이터를 잘 받았다고 응답한다.
  - 중간에 누락됐을 경우 확인 가능

- **`순서 보장`**

  - 순서가 잘못되면 패킷을 다시 보내라고 서버가 클라이언트에게 요청

- 신뢰할 수 있는 프로토콜
- 대부분 TCP 사용

<br>

### TCP 3 way handshake

1. **`SYN`** - 클라이언트가 서버로 접속요청
2. **`SYN+ACK`** - 서버가 클라이언트로 접속요청+요청수락
3. **`ACK`** - 클라이언트가 요청수락 (ACK와 함께 데이터 전송 가능)

<br>

4. 데이터 전송 - 위의 3단계 이후에 데이터를 전송한다.

<img width="600" src="https://user-images.githubusercontent.com/41741221/153425670-b0ada370-d7f1-41af-8114-44af53aa7a46.png">

<br>

## UDP - 사용자 데이터그램 프로토콜(User Datagram Protocol)

- 기능이 거의 없다
- 최근에 각광받고 있다
  - HTTP3에서 3 way handshake도 최적화해보자고 해서 UDP를 사용

### UDP 특징

- **`연결지향`** X

- **`데이터 전달 보증`** X

- **`순서 보장`** X

- 데이터 전달 및 순서가 보장되지 않지만, 단순하고 빠르다.

- IP와 거의 같은데 **`PORT`**, `체크섬` 정도만 추가된 것

  - `PORT`는 하나의 IP에 여러 어플리케이션을 구분할 때 사용

- TCP 프로토콜은 건드릴 수가 없다. 새롭게 만들고 싶다면 UDP 활용

<br>

## PORT

- 같은 IP 내에서 프로세스를 구분
- PORT가 없으면 날라오는 패킷을 구분할 수 없음
- TCP/IP 패킷 안에 출발지IP, 목적지IP, 전송데이터 ...
- 예시) IP는 아파트, PORT는 동-호수

<br>

- 0 ~ 65535 할당 가능
- 0 ~ 1023: 잘 알려진 포트, 사용하지 않는 것이 좋음

<br>

- FTP - 20, 21
- TELNET - 23
- HTTP - 80
- HTTPS - 443

<br>

<img width="600" src="https://user-images.githubusercontent.com/41741221/153425686-b3d35c79-8bf0-430a-81f1-bc63b4b138c2.png">

<br>

## DNS - 도메인 네임 시스템(Domain Name System)

- IP는 기억하기 어렵다
- IP는 변경될 수 있다

<br>

- 위의 문제를 해결하기 위해 **`DNS`** 사용
- **`DNS`** : 도메인 명을 IP주소로 변환 (ex. 전화번호부)

<br><br>

---

### **Reference**

- [모든 개발자를 위한 HTTP 웹 기본 지식, 김영한](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/dashboard)
