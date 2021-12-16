## 2강. C언어

[1. C기초](#1-c기초)  
[2. 문자열](#2-문자열)  
[3. 조건문과 루프](#3-조건문과-루프)  
[4. 자료형, 형식 지정자, 연산자](#4-자료형-형식-지정자-연산자)  
[5. 사용자 정의 함수, 중첩 루프](#5-사용자-정의-함수-중첩-루프)  
[6. 하드위어의 한계](#6-하드웨어의-한계)  
[Reference](#reference)

##### 작성된 예제 코드는 [CS50 Sandbox](https://sandbox.cs50.io/)를 사용합니다.

<br><br>

### 1. C기초

```c
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
}

// clang -o hello hello.c
// ./hello
// print => hello, world
```

<br>

- `source code` => `compiler` => `machine code`
- 컴파일러는 작성한 "소스 코드"를 컴퓨터가 이해할 수 있는 2진수로 작성된 "머신 코드"로  
  변환하는 작업을 수행하는 프로그램이다.
- c언어에서 clang

<br>

### 2. 문자열

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string answer1 = get_string("What is your favorite animal?");
    string answer2 = get_string("What is your favorite color?");
    printf("I like %s and %s\n", answer1, answer2);
}

// clang -o string string.c -lcs50
// ./string

// make string
```

- 형식지정자 `string` : 변수의 데이터 종류를 정확하게 명시해야함.
- 출력시 인자로 문자열을 받기 때문에 `%s` 를 사용해 인자를 받아준다. stirng의 s
- `cs50.h` 파일 안에 string 문자열 형식과 get_string 이라는 함수가 저장되어 있기 때문에  
  컴파일 시 명령어에 입력해 줘야 한다. `-lcs50`

<br>

- `make` 명령어를 사용하면 간단하게 위의 내용을 처리할 수 있다.

<br>

### 3. 조건문과 루프

#### bool 연산자

- true, false를 판단하는 bool 연산식을 작성하는데 사용한다.

```c
bool a = 3 < 5; // true
bool b = 2 >= 9; // false
bool c = a && b; // false
bool d = a || b; // true
bool e = !d; // false
```

<br>

#### 조건문, 루프

- 자바스크립트와 문법이 거의 비슷함
- if, while, for

```c
// if문
if (x < y)
{
  printf("x is less than y\n");
}
else if (x > y)
{
  printf("x is greater than y\n");
}
else
{
  printf("x is equal to y\n");
}

// while문
while (true)
{
  printf("hello, world\n")
}

// for문
for( int i = 0; i < 10; i++)
{
  printf("개발공부는 재미있다!\n")
}
```

- int 는 정수 타입지정자

<br>

### 4. 자료형, 형식 지정자, 연산자

#### 자료형(Data Type)

- `bool`: 불리언 표현, (예) True, False, 1, 0, yes, no
- `char`: 문자 하나 (예) 'a', 'Z', '?'
- `string`: 문자열
- `int`: 특정 크기 또는 특정 비트까지의 정수 (예) 5, 28, -3, 0
- `long`: 더 큰 크기의 정수
- `float`: 부동소수점을 갖는 실수 (예) 3.14, 0.0, -28.56
- `double`: 부동소수점을 포함한 더 큰 실수

<br>

#### 형식 지정자

- `%c` : char
- `%f` : float, double
- `%i` : int
- `%li` : long
- `%s` : string

<br>

#### 코드 예시

```c
// 정수 사용

# include <cs50.h>
# include <stdio.h>

int main(void)
{
    int age = get_int("what's your age?\n");
    printf("Your are at least %i days old.\n", age * 365);
}
```

```c
// 실수 사용

# include <cs50.h>
# include <stdio.h>

int main(void)
{
    float price = get_float("What's the price?\n");
    printf("Your total is %f\n", price*1.0625);
}
```

```c
// 입력 값이 짝수인지 홀수인지 확인하는 코드

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int n = get_int("n: ");

    if (n % 2 == 0)
    {
        printf("even\n");
    }
    else
    {
        printf("odd\n");
    }
}
```

<br>

### 5. 사용자 정의 함수, 중첩 루프

#### 사용자 정의 함수

```c
#include <stdio.h>

void cough(int n);

int main(void)
{
    cough(3);
}

void cough(int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("cough\n");
    }
}

```

- main 함수보다 아래 있는 cough 함수를 불러오기 위해 상단에 `void cough(void);` 입력
- `(void)`는 인자를 받지 않는다는 의미

<br>

#### 예제

```c
#include <cs50.h>
#include <stdio.h>

int get_positive_int(void);

int main(void)
{
    int i = get_positive_int();
    printf("%i\n", i);
}

int get_positive_int(void)
{
    int n;
    do
    {
        n = get_int("Positive Integer: ");
    }
    while (n < 1);
    return n;
}
```

- `int get_positive_int(void);`
  - 앞의 `int` 는 출력의 종류
  - 뒤의 `void` 는 입력의 종류
- 양의 정수를 입력할 때까지 루프

<br>

#### 중첩 루프 예제

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int n;

    do
    {
        n = get_int("Size: ");
    }
    while (n < 1);

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}
```

<br>

### 6. 하드웨어의 한계

- 컴퓨터는 RAM(랜덤 엑세스 메모리)이라는 물리적 저장장치를 포함하고 있다.
- RAM은 유한한 크기의 비트만 저장할 수 있기 때문에 부정확한 결과를 내기도 한다.

<br>

#### 부동 소수점 부정확성

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // 사용자에게 x 값 받기
    float x = get_float("x: ");

    // 사용자에게 y 값 받기
    float y = get_float("y: ");

    // 나눗셈 후 출력
    printf("x / y = %.50f\n", x / y);
}

// x: 1
// y: 10
// x / y = 0.10000000149011611938476562500000000000000000000000
```

- 정확한 결과는 0.1이 되어야 하지만,  
  float 에서 저장 가능한 비트 수가 유한하기 때문에 부정확한 결과를 도출했다.

<br>

#### 정수 오버플로우

```c
#include <stdio.h>
#include <unistd.h>

int main(void)
{
    for (int i = 1; ; i *= 2)
    {
        printf("%i\n", i);
        sleep(1);
    }
}

// ...
// 1073741824
// overflow.c:6:25: runtime error: signed integer overflow: 1073741824 * 2 cannot be represented in type 'int'
// -2147483648
// 0
// 0
// ...
```

- int는 32개의 비트까지만 사용하기 때문에, 위 프로그램에서 10억을 넘어가자 앞으로 넘어갈 1의 자리가 없어졌다.

<br><br>

---

### **Reference**

[모두를 위한 컴퓨터 과학 (CS50 2019), David J. Malan](https://www.boostcourse.org/cs112)
