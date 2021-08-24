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


## Data types


'use strict';

// 1. Variable
    // let
    // let who = 'mansaout'; //let으로 who를 선언, mansaout 값을 name1에 할당
    // console.log(who);
    // who = 'hello';
    // console.log(who);

    //Block scope
        // let globalName = 'sangbeom';
        // {
        //     let smallName = 'mansaout';
        //     console.log(smallName);
        //     smallName = 'hello';
        //     console.log(globalName);
        //     console.log(smallName);
        // }
        // console.log(globalName);


    // var (don't ever use this!!)
        // 1. var hoisting (move declaration from bottom to top) : 선언을 어느위치에 있건 제일 위로 올려줌
        // console.log(age);
        // age = 30;
        // var age;
        // console.log(age);

        // 2. has no block scope : 블록 스코프를 무시함
        // {
        //     age = 10;
        //     var age;
        // }
        // console.log(age);

// 2. Constants
        // 한 번 할당하면 값을 변경할 수 없음
        // favor immutable data type always for a few reasons :
        // - security 보안 -> 해커들이 값을 변경
        // - thread safety -> thread들이 동시에 돌아가는데 동시에 변수에 접근해서 값을 변경
        // - reduce human mistakes -> 변경될 이유가 없다면 const 사용
        // const daysInWeek = 7;
        // const hoursInDay = 24;

// 3. Variable types
    // prmitive type, single items, number, string, boolean, null, undefined, symbol
    // object type, box container
    // function, first-class function : function도 다른 데이터 타입 처럼 변수에 할당이 가능. 함수의 파라미터(인자)로도 전달이 되고 함수에서 리턴 타입으로도 function을 리턴하는 것이 가능하다.

        // 1. number 타입
        // 데이터 크기를 생각하고 선언을 안해도 됌 (c, java 등)
        // 타입이 다이나믹하게 결정되기 떄문에 number타입 선언 필요 없음
        const count = 20;
        const size = 5.5;
        console.log(`count's value: ${count}, count's type: ${typeof count}`);

        // special number value : infinity, -infinity, NaN
        const infinity = 1 / 0;
        const negativeInfinity = -1 / 0;
        const NaN1 = 0 / 0;
        const NaN2 = 'haha' / 0;

        console.log(infinity);
        console.log(negativeInfinity);
        console.log(NaN1);
        console.log(NaN2);

        // 2. string 타입
        const mansaout = 'mansaout';
        const greeting = 'hello ' + mansaout;
        console.log(`use template literals ${greeting}`)

        // 3. boolean
        // false: 0, null, undefined, NaN, ''
        // true: any other value
        const canRead = true;
        const test = 10 < 1;
        console.log(canRead, typeof canRead);
        console.log(test);

        // 4. null
        // 너는 null이다. 라고 지정을 해주는 것
        let nothing = null;
        console.log(nothing, typeof nothing);

        // 5. undefined
        // 선언은 되었지만, 아무것도 값이 지정되어있지 않음, 비었는지, 값이 있는지 등
        let x;
        console.log(x, typeof x);

        // 6. symbol, create unique identifiers for objects
        // 맵이나 다른 자료구조에서 고유한 식별자가 필요하거나, 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶을 때, 고유한 식별자가 필요할 때 사용. 동일한 string를 작성했어도 다른 것을 구분함
        // string을 식별자로 쓰는 경우 동일한 이름일 경우 문제가 생김
        const symbol1 = Symbol('id');
        const symbol2 = Symbol('id');
        console.log(symbol1 === symbol2);
        //string이 똑같다면, 동일한 symbol을 만들고 싶을 때
        const sameSymbol1 = Symbol.for('pw');
        const sameSymbol2 = Symbol.for('pw');
        console.log(sameSymbol1 === sameSymbol2);
        //symbol을 출력할 때
        console.log(symbol1.description)

    // object, real-life-object, data structure

// 4. Dynamic typing : dynamically typed language
// 선언할 때 어떤 타입인지 같이 선언하지 않음. 런타임에 할당된 값에 따라 타입이 변경될 수 있음
// 중간에 타입이 변경되어 턴타임으로 에러가 나는 경우가 있음 -> 타입스크립트가 나온 이유
let text = 'hello';
console.log(`값: ${text}, 타입: ${typeof text}`)
text = 10;
console.log(`값: ${text}, 타입: ${typeof text}`)
text = 10 + '10';
console.log(`값: ${text}, 타입: ${typeof text}`)
text = '10' * '10';
console.log(`값: ${text}, 타입: ${typeof text}`)


<br><br>
---
### **Reference**
- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>
---
##### [다음 02. ]()