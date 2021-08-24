##### 최초작성일 : 2021. 8. 20.<br><br>
# 08. 문장 - switch, try-catch(finally, throw)
[switch](#switch-문)  
[try-catch(finally, throw)](#try-catchfinally-throw-문)  
[Reference](#reference)

<br><br>

## **switch 문**
- 형태 :
    ```js
    switch (exp) {
        case exp1:
            문장 리스트opt
        case exp2:
            문장 리스트opt
        default :
            문장 리스트opt
    };

    //or 의 형태. exp1 or exp2 일 때 해당 문장 수행
    switch (exp) {
        case exp1 :
        case exp2 :
            문장 리스트opt
    }
    ```
- (exp) > switch 표현식의 평가 값과 일치하는 case 문 수행
- 일치하는 case가 없으면 default 수행
- break가 없으면 일치하는 값 또는 default 값 부터 모두 실행

```js
var exp = 3, result = 0;

switch(exp) {
    case 1:
    case 1+1:
        console.log("log");
        result = 500;
        //break; //break 넣어서 확인해보기
    default:
        console.log("default");
        //break; //break 넣어서 확인해보기
    case 4:
        console.log("normal");
        result = 1000;
}

console.log(result);

//--[실행결과]--

default
normal
1000
```

<br><br>

## **try-catch(finally, throw) 문**
- 형태 :
    ```js
        // try 블록 catch(식별자) 블록
        try {

        } catch(error) {

        }

        // try 블록 finally 블록
        try {

        } finally {
            
        }

        // try 블록 catch(식별자) 블록 finally 블록
        try {

        } catch(error) {

        } finally {

        }
    ```
- try 문에서 예외 발생을 인식
- **예외가 발생하면 -> catch 블록을 실행**
- **finally 블록은 예외 발생과 관계없이 실행**

```js
// try 블록 catch(식별자) 블록

var value1;

try {
    console.log("예외발생 전");
    value1 = value2; //원래라면 error: value2 is not defined
    console.log("예외발생"); //예외 발생 이후 문장은 실행되지 않음
} catch(error) {
    console.log("catch 실행");
}

//--[실행결과]--

예외발생 전
catch 실행
```

```js
// 형태: try 블록 finally 블록

var value1;

try {
    value1 = "100";
    console.log("error 없음"); //예외 발생 이후 문장은 실행되지 않음
} finally {
    console.log("finally 실행");
    console.log("value1 = "+value1)
}

//--[실행결과]--

error 없음
finally 실행
value1 = 100
```

```js
// try 블록 catch(식별자) 블록 finally 블록

var value1;

try{
    value1 = "200";
    console.log("error 없음");
}catch(e){
    console.log("error 발생, catch 실행");
}finally{
    console.log("finally");
}

//--[실행결과]--

error 없음
finally
```

<br>

- **`throw`**
    - 형태 : `throw (exp)`
    - 명시적으로 예외를 발생시킴
```js
try {
    throw "예외 발생 !!!!";
    var sports = "스포츠"; //throw 때문에 아래의 문장은 실행되지 않음
    console.log(sports);
} catch(error) {
    console.log("error!!");
}

//--[실행결과]--

예외 발생 !!!!
error!!
```

<br><br>
---
### **Reference**
- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)

<br><br>
---
##### [다음 09. 함수 - 구성, 규칙, 호출, return문](https://github.com/mansaout/TIL/blob/main/Javascript/09_grammar_function.md)
##### [이전 07. 문장 - if, while, do-while, for, break, continue](https://github.com/mansaout/TIL/blob/main/Javascript/07_grammar_statement.md)