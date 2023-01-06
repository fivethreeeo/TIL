##### 최초작성일 : 2021. 8. 20.<br><br>

# 09. 함수 - 구성, 규칙, 호출, return

[함수 기본](#함수-function)  
[호출](#함수-호출)  
[return](#return)  
[Reference](#reference)

## **함수, function**

- 특정 기능을 처리하는 javascript 코드 묶음
- 형태 :

  ```js
  function name(parameters) {
      ...함수 본문...
  }

  //제일 기본 형태
  function makePasta() {
      var sauce = "basil";
  }

  //함수를 변수에 할당한 형태
  var makePasta = function(sauce, noodle) {
      var result = sauce + noodle;
  }
  ```

- 함수 이름 관례
  - 동사로 시작
  - 두 개 이상의 단어를 사용할 때
    - 두 번째 단어부터 명사 사용
  - camelCase
  ```js
  function setBookTitle();
  function makePasta();
  ```

## **함수 호출**

- 함수는 호출되어야 실행됨
- 호출 형태는 **`name()`**
- Parameter
  - 호출한 함수에서 넘겨준 값을 받음

```js
function sumValue(value1, value2) {
  var sum = value1 + value2;
  console.log(sum);
}

sumValue(1, 2);
sumValue(10, 20);

//--[실행결과]--

3;
30;
```

## **return**

- 함수를 호출했을 때 함수를 호출한 그곳에 특정 값(반환 값 = return value)을 반환하게 함
- 실행 흐름이 지시자 **`return`** 을 만나면 함수 실행은 `즉시 중단` 되고 함수를 호출한 곳에 값을 반환

```js
function sumValue(value1, value2) {
  return value1 + value2;
}

console.log(sumValue(20, 10));

//--[실행결과]--

30;
```

```js

function checkAge(age) {
    if(age > 19) {
        return console.log("성인");
        console.log("입니다");
    } else {
        console.log("일단, 성인은 아님");
    }
}

checkAge("30");
checkAge("-30");

//--[실행결과]--

성인
일단, 성인은 아님
```

- **`return`** 과 값 사이에 줄을 삽입 X
  - return문 끝에 세미콜론을 자동 삽입함
- return 문이 없거나 return 지시자만 있는 함수는 `undefined`를 반환

```js
function doNothing1() {} //empty
function doNothing2() {
  return;
} //alone return;
console.log(doNothing());

//--[실행결과]--
undefined;
undefined;
```

## <br><br>

### **Reference**

- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)
