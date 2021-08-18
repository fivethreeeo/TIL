##### 최초작성일 : 2021. 8. 13.<br><br>
# 04. 연산자 - 후치, 전치, 관계 연사자 그리고 유니코드/UTF
[후치 연산자](#후치-연산자)  
[전치 연산자](#전치-연산자)  
[유니코드, UTF](#유니코드utf)  
[관계연산자](#관계연산자)  
[Reference](#reference)

<br><br>

## **후치 연산자**

<br>

- **후치 `++`연산자**
  -  값을 자동으로 1 증가시킴
  -  표현식을 평가한 후에 1 증가

<br>

- **후치 `--`연산자**
  -  값을 자동으로 1 감소시킴
  -  표현식을 평가한 후에 1 감소

```js
var one = 1;
var two = 2;

console.log(one++, one);
console.log(two--, two);
console.log(one, two);

//--[실행결과]--

1 2
2 1
2 1
```

<br><br>

## **전치 연산자**

<br>

- **전치 `++`연산자**
  -  값을 자동으로 1 증가시킴
  -  표현식을 평가하기 전에 1 증가
     - => 표현식에서 증가된 값을 사용

<br>

- **전치 `--`연산자**
  -  값을 자동으로 1 감소시킴
  -  표현식을 평가하기 전에 1 감소
     - => 표현식에서 감소된 값을 사용

```js
var one = 1;
var two = 2;

console.log(++one, one);
console.log(++two, two);
console.log(one, two);

//--[실행결과]--

2 2
3 3
2 3
```

```js
//후치, 전치 연습!!

var one = 1, two = 2, thr = 3;

console.log(++one + two-- + two - --thr + one--);
console.log(one, two, thr);

//--[실행결과]--

5 // 2 + 2 + 1 - 2 + 2 = 5
1 1 2
```

<br><br>

## **유니코드/UTF**
- **유니코드**
  - 세계 모든 문자를 통합해 코드화
  - 언어, 이모지 등
  - 변환된 코드 값을 코드 포인트`code point` 라고 부름
  - 0000~FFFF, 10000~1FFFF 값에 문자 매핑
    - es6에서 5자리를 지원함
- **표기 방법**
  - u 와 숫자 형태 => `u0031`
  - js는 u앞에 역슬래시`\` 작성
- UTF
  - Unicode Transformation Format
  - 유니코드의 코드 포인트를 매핑하는 방법
  - UTF-8, UTF-16, UTF-32로 표기
  - `<meta charset="utf-8">`
  - UTF-8은 8비트로 코드 포인트 매핑
    - `8비트 인코딩`이라고 부름
```js
var one = "\u0031";

console.log(one);
console.log(typeof one);

//--[실행결과]--

1
string
```

<br><br>

## **관계연산자**
- Relational Operator
- instanceof, in 연산자
- **`<, >, <=, >=` 연산자**
  1. **양쪽이 Number Type**일 때
     - 왼쪽과 오른쪽을 비교해 **true, false 반환**
        ```js
        console.log(1 > 3);
        console.log(1 < 3);
        console.log(1 >= 3);
        console.log((1 + 1) <= 3);

        //--[실행결과]--

        false
        true
        false
        true
        ```

  2. **String Type**일 때
     - 한 쪽이 String Type 이면 => **`false` 반환**
     - 양 쪽이 String Type 이면
       - 유니코드 코드 포인트로 비교
       - 여러 개의 문자로 이루어진 문자열인 경우, 왼쪽부터 하나씩 비교<br>
       ```js
       //한 쪽이 String Type
       console.log(1 < "3");
       console.log(1 < "A");

       //--[실행결과]--

       true // String Type 안의 문자가 숫자일 경우 => 둘 다 Number Type으로 계산
       false
       ```

       ```js
       //양 쪽이 String Type
       var str1 = "\u0031"; // \u0031: 1
       var str3 = "\u0033"; // \u0033: 3

       console.log(str1, str3);
       console.log(str1 < str3);

       // A: \u0041, 1: \u0031: 1
       console.log("A" > "1");

       //--[실행결과]--

       1 3
       true
       true
       ```

       ```js
       //여러 개의 문자일 경우
       //왼쪽에서 오른쪽으로 문자 하나씩 비교
       //결정이 되면 멈추고 true, false 반환
       //다음 것은 비교하지 않음

       console.log("A07" > "A21");
       
       // 1. A와 A 같으므로 다음을 비교
       // 2. "0" 과 "2"을 비교 후 반환
       // 3. "7" 과 "1"은 비교하지 않음

       //--[실행결과]--

       false
       ```

<br><br>

---
### **Reference**
- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)

<br><br>
---
##### [다음 05. 연산자 - 동등, 일치, 부등, 불일치 연산자](https://github.com/mansaout/TIL/blob/main/Javascript/05_basic_operator.md)  
##### [이전 03. 연산자 - 연산자, 표현식, 해석/실행, 숫자변환, 할당 연산자(=), 산술 연산자(+,-,*,/,%), 단항 연산자(+,-)](https://github.com/mansaout/TIL/blob/main/Javascript/03_basic_operator.md)
