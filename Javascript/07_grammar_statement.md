##### 최초작성일 : 2021. 8. 19.<br><br>
# 07. 문장 - if, while, do-while, for, break, continue
[if 문](#if-문)  
[while 문](#while-문)  
[do-while 문](#do-while-문)  
[for 문](#for-문)  
[for 문 예제](#for문-예제)  
[break](#break)  
[continue](#continue)  
[Reference](#reference)

<br><br>

## **if 문**
- 형태 :
  - **`if (exp) 'statement1'`**
  - **`if (exp) 'statement1' else 'statement2'`**
- 처리 순서
  1. exp 평가
  2. 평가 결과를 **`true`, `false`** 반환
  3. **`true`** 면 statement1 실행
  4. **`false`** 면 statement2 실행

```js
var a = 1, b = 2;

if(a === b){
    console.log("'a === b'는 true");
}else{
    console.log("'a === b'는 false");
};

//--[실행결과]--
'a === b'는 false
```
```js
// block를 사용하지 않는 경우

var a = 1, b = 2;

if(a === b)
    console.log("'a === b'는 true");
else
    console.log("'a === b'는 false");
```

<br><br>

## **while 문**
- 형태 :
  - **`while (exp)`**
- 처리 방법
  - exp의 평가 결과가 **`false`** 가 될 때까지 실행
  - 반복이 종료되는 조건이 필요

```js
var i = 1;

while(i < 3){ //(i < 3)이 false가 될 때까지 반복 실행
    console.log(i);
    i++;
};

//--[실행결과]--

1
2
```

<br><br>

## **do-while 문**
- 형태 :
  - **`do 'statement' while (exp)`**
- 처리 순서
    1. do 의 'statement'를 실행
    2. exp의 평가 결과가 **`true`** 이면 다시 do 의 'statement'를 실행
    3. exp의 평가 결과가 **`false`** 이면 while 의 'statement'를 실행

```js
var i = 6;
do {
    console.log("do:",i);
    i--;
} while (i < 5){
    console.log("while:",i);
}

//--[실행결과]--

do: 6
do: 5
do: 4
while: 3
```

<br><br>

## **for 문**
- 형태 :
  - **`for(초깃값; 비교; 증감) 문장`**
  - **`for(var i = 0; i < 3; i++) 'statement'`**
  - 비교 표현식의 평가 결과가 **`false`** 가 될 때까지 실행

```js
for(var i=1; i<3; i++){
    console.log(i);
}

//--[실행결과]--

1
2
```

- for 문 안의 표현식은 생략 가능
`for( ; ; )`

## **for문 예제**
- 문제
    > 1. for() 문을 사용하여 1에서 50까지의 수를 반복해, 홀수 값들과 짝수 값들을 각각 누적합니다.
    > 2. 누적된 홀수 값, 누적된 짝수 값, 누적된 모든 값을 출력합니다.
- 풀이
```js
/*
    생각한 풀이 순서
    1. 먼저 홀수와 짝수들의 누적 값들을 저장할 변수를 세팅
    2. for()문으로 1~50까지 숫자 1씩 더하는 반복문 실행
    3. 실행된 값을 if()문으로 홀수, 짝수의 경우 각각의 세팅된 변수에 누적
*/

var odd = 0, // 홀수 값들의 누적
    even = 0, // 짝수 값들의 누적
    sum = 0; // 모든 값들의 누적

for(i = 1; i <51; i++) { // 1 ~ 50 실행
    if(i % 2 === 0){ // i를 2로 나눈 값이 0
        console.log(i, "짝수"); // i 값이 짝수가 맞는지 출력 & 체크
        even += i; // even에 짝수인 i값을 더함
        console.log(even, "짝수 누적 값"); // even에 누적이 되는지 체크
    } else {
        console.log(i, "홀수"); // i 값이 홀수가 맞는지 출력 & 체크
        odd += i; //odd에 홀수인 i값을 더함
        console.log(odd, "홀수 누적 값"); // odd에 누적이 되는지 체크
    }
}

//--[실행결과]--

1 "홀수"
1 "홀수 누적 값"
2 "짝수"
2 "짝수 누적 값"
3 "홀수"
4 "홀수 누적 값"
4 "짝수"
6 "짝수 누적 값"
.
.
.
49 "홀수"
625 "홀수 누적 값"
50 "짝수"
650 "짝수 누적 값"
```
```js
// 위의 풀이를 리팩토링

var odd = 0, even = 0, sum = 0;

for(i = 1; i < 51; i++) {
    (i % 2 === 0) ? (even += i) : (odd += i); //삼항연산자
}

sum = odd + even; //모든 수 누적 값 계산

console.log("홀수 누적 값 : "+odd);
console.log("짝수 누적 값 : "+even);
console.log("모든 수 누적 값 : "+sum);

//--[실행결과]--

홀수 누적 값 : 625
짝수 누적 값 : 650
모든 수 누적 값 : 1275
```


<br><br>

## **break**
- 형태 :
  - `break;`
- 반복문을 도중에 종료시킴

```js
var k = 0, i = 0;

while(k < 3){
    i++;
    if(i === 5){
        break; // break가 없다면 (k < 3)이 false가 될 수 없기 때문에 반복문이 종료되지 않음
    };
    console.log(i);
}

//--[실행결과]--

1
2
3
4
```
```js
for(var i = 0; i < 4; i++){
    if(i == 2){
        console.log(i, "i == 2");
        break;
        console.log(i, "i == 2"); // break; 때문에 출력되지 않음
    };
    console.log(i);
}

//--[실행결과]--

0
1
2 "i == 2"
```

<br><br>

## **continue**
- 형태 :
  - `continue;`
- 반복문의 처음으로 분기. **증감을 포함**

```js
for(var i = 0; i < 5; i++){
    if(i == 2 || i == 3){
        continue;
        console.log(i, "i == 2"); // continue; 때문에 출력되지 않음
    };
    console.log(i);
}

//--[실행결과]--

0
1
4
```


<br><br>
---
### **Reference**
- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)

<br><br>
---
##### [다음 08. 문장(Statement) - switch, try-catch(finally, throw)](https://github.com/mansaout/TIL/blob/main/Javascript/08_grammar_statement.md)
##### [이전 06. 연산자 - 논리 NOT/OR/AND 연산자, 조건 연산자, 연산자 우선순위](https://github.com/mansaout/TIL/blob/main/Javascript/06_grammar_operator.md)