##### 최초작성일 : 2021. 8. 12.<br><br>

# 03. 연산자 - 연산자, 표현식, 해석/실행, 숫자변환, 할당(=), 산술(+,-,\*,/,%), 단항(+,-) 연산자

[연산자, 표현식](#연산자-표현식)  
[할당 연산자](#할당-연산자)  
[해석/실행순서](#해석실행-순서)  
[숫자로 변환](#숫자로-변환)  
[산술연산자](#산술-연산자------)  
[단항연산자](#단항-연산자)  
[Reference](#reference)

<br><br>

## **연산자, 표현식**

- 연산자 형태
  - `+`, `-`, `*`, `/`, `%`
  - `>`, `>=`, `<`, `<=`
  - `==`, `!=`, `===`, `!==`
  - `,`, `typeof`, `delete`, `void`
  - `instanceof`, `in`, `new` 등
- 표현식
  - 1 + 2
  - var total;
  - total / (2 + 3)
  - **"표현식을 평가"** 한다고 함
  - 표현식을 평가하면 **"결과가 반환"** => 이를 **"평가결과"** 라고 함
  - 자바스크립트는 표현식의 연결

<br><br>

## **할당 연산자**

- 단일 할당 연산자
  - `=` 하나만 사용
  - `var result = 1 + 1;`
- 복합 할당 연산자
  - `=` 앞에 연산자 작성
  - `+=`, `-=`, `*=`, `/=`, `%=`
  - `<<=`, `>>=`
  - `>>>=`, `&=`, `^=`, `|=`
  - 먼저 `=` 앞을 연산 => 할당

```js
var result1 = 7,
  result2 = 7,
  result3 = 7,
  result4 = 7;

console.log((result1 += 7));
console.log((result2 -= 7));
console.log((result3 *= 7));
console.log((result4 /= 7));

//--[실행결과]--

14;
0;
49;
1;
```

<br><br>

## **해석/실행 순서**

- 해석/실행 순서
- 1. `=` 왼쪽 표현식 평가
- 2. `=` 오른쪽 표현식 평가 (왼쪽 -> 오른쪽으로 평가)
- 3. `=` 오른쪽 표현식의 평가 결과를 왼쪽 표현식 평과 결과에 할당

```js
var result = 7 + 10 + 20;
// 1. var result - result 변수 선언
// 2. 7 + 10 - 오른쪽 표현식 평가 (왼쪽에서 오른쪽으로)
// 3. 17 + 20
// 4. 오른쪽 표현식의 평과 결과 37을
// 왼쪽 표현식의 평가 결과 result에 할당

console.log('result');

//--[실행결과]--

37;
```

<br><br>

## 숫자로 변환

- 연산하기 전에 우선 숫자로 변환
- 변환된 값으로 연산

| 값 타입   | 변환 값                                            |
| --------- | -------------------------------------------------- |
| Undefined | `NaN`                                              |
| Null      | `0`                                                |
| Boolean   | true: `1`<br> false: `0`                           |
| Number    | 변환 전/후 같음                                    |
| String    | 값이 숫자이면 숫자로 연산<br> 단, `+`연산자는 연결 |

```js
var unde;
console.log(10 + unde);
console.log(10 + null);
console.log(10 + true);
console.log(10 + false);
console.log(10 + '10');
console.log(10 * '10');

//--[실행결과]--

NaN;
10;
11;
10;
1010; //string type
100; //number type
```

<br><br>

## **산술 연산자 `+, -, *, /, %`**

<br>

### **`+` 연산자**

- **`+`** 양쪽의 표현식을 평가
  - 평가 결과를 더함
  - 왼쪽에서 오른쪽으로 연산
- **평가 결과 연결**
  - **한 쪽이라도 숫자가 아니면 연결**

```js
console.log(1 + 2 + "string");
console.log(1 + null);// null 0
console.log(1 + true);// true 1
console.log(1 + false);// false 0
//--[실행결과]--

3string
1
2
1
```

<br>

### **`-` 연산자**

- **`-`** 양쪽의 표현식을 평가
  - 평가 결과를 뺌
  - 왼쪽에서 오른쪽으로 연산
- **`NaN` 반환**
  - 양쪽의 평가 결과가 하나라도 숫자가 아닐 때
- String Type이지만, 값이 숫자이면 Number Type으로 변환하여 계산

```js
console.log(2 - 'string');
console.log(2 - '1');
console.log(2 - null);
console.log(2 - true);
console.log(2 - false);

//--[실행결과]--

NaN;
1;
2;
1;
2;
```

<br>

### **`*`연산자**

- `*` 양쪽의 표현식을 평가
  - 평가 결과를 곱함
- **`NaN` 반환**
  - 양쪽의 평가 결과가 하나라도 숫자가 아닐 때
- String Type이지만, 값이 숫자이면 Number Type으로 변환하여 계산

```js
console.log(10 * 'string');
console.log(10 * '20');
console.log(10 * null);
console.log(10 * true);
console.log(10 * false);

//--[실행결과]--

NaN;
100;
0;
10;
0;
```

```js
//소수 값이 생기는 경우 처리 (IEEE 754 유동 소수점)

console.log(2.3 * 3);

//실수를 정수로 변환하여 값을 구한 후
//정수를 다시 실수로 변환
console.log((2.3 * 10 * 3) / 10);

//--[실행결과]--

6.8999999999999995;
6.9;
```

### **`/`연산자**

- `/` 양쪽의 표현식을 평가
  - 왼쪽 표현식의 평가 결과를 오른쪽 표현식의 평가 결과로 나눔
- **`NaN` 반환**
  - 양쪽의 평가 결과가 하나라도 숫자가 아닐 때
  - 분모, 분자가 모두 0일 때
- 분모가 0일 때 => `Infinity` 반환
- 분자가 0일 때 => `0` 반환
- String Type이지만, 값이 숫자이면 Number Type으로 변환하여 계산

```js
console.log(10 / 'string');
console.log(10 / '10');
console.log(10 / 10);
console.log(0 / 0);
console.log(10 / 0);
console.log(0 / 10);
console.log(10 / null);
console.log(0 / true);
console.log(0 / false);

//--[실행결과]--
NaN;
1;
1;
NaN;
Infinity;
0;
Infinity;
0;
NaN;
```

<br><br>

### **`%`연산자**

- 왼쪽 표현식 평가 결과를 오른쪽 표현식 평가 결과로 나누어 나머지를 구함

```js
console.log(5 % 2);

//--[실행결과]--
1;
```

```js
//소수 값이 생기는 경우 처리 (IEEE 754 유동 소수점)

console.log(5 % 2.3);

//실수를 정수로 변환하여 값을 구한 후
//정수를 다시 실수로 변환
console.log(((5 * 10) % (2.3 * 10)) / 10);

//--[실행결과]--

0.40000000000000036;
0.4;
```

<br><br>

## **단항 연산자**

- **단항 `+`연산자**
  - 형태 : **`+value`**
  - 값을 Number Type으로 변환
  - 코드 가독성
    - +를 +연산자(더하기)로 착각할 수 있음
    - 같은 기능의 Number() 활용

```js
var value = '5';

console.log(typeof value);
console.log(typeof +value);
console.log(typeof Number(value));

//--[실행결과]--

string;
number;
number;
```

- **단항 `-`연산자**
  - 형태 : **`-value`**
  - 값을 Number Type으로 변환
  - 값의 부호를 바꿈
    - `+`는 `-`로, `-`는 `+`로

```js
var value = "5";

console.log(value, typeof value);
console.log(-value, typeof -value);

//--[실행결과]--

5 string
-5 number
```

## <br><br>

### **Reference**

- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)
