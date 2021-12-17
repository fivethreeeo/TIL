## 3강. 배열

[1. 컴파일링](#1-컴파일링)  
[2. 배열](#2-배열)  
[3. 문자열과 배열](#3-문자열과-배열)  
[4. 문자열의 활용](#4-문자열의-활용)  
[5. 명령행 인자]()  
[Reference](#reference)

##### 작성된 예제 코드는 [CS50 Sandbox](https://ide.cs50.io/)를 사용합니다.

<br><br>

### 1. 컴파일링

- 아래의 전체 과정을 포함해서 컴파일이라고도 한다.

- 4단계
  - `전처리(Precompile)`
    - 전처리기에 의해 수행. 실질적인 컴파일이 이루어지기 전에 무언가를 실행.
    - 예를 들어 `#include <stdio.h>` 는 stdio.h 파일을 포함하라고 알려 준다.
  - `컴파일(Compile)`
    - 컴파일러라 불리는 프로그램은 C코드를 `어셈블리어`라는 저수준 프로그래밍 언어로 컴파일한다.
    - 컴퓨터가 이해할 수 있는 언어와 최대한 가까운 프로그램으로 만들어 준다.
  - `어셈블(Assemble)`
    - 어셈블리 코드를 오브젝트 코드로 변환시키는 것이다.
    - CPU가 프로그램을 어떻게 수행해야하는지 알 수 있는 명령어 형태인 `연속된 0과 1`로 바꿔주는 작업
    - 오브젝트 코드로 변환해야할 파일이 1개라면, 컴파일 작업은 여기서 종료
  - `링크(Link)`
    - 프로그램이 여러 개의 파일로 이루어져 있어 하나의 오브젝트 파일로 합쳐야 한다면 링크
    - 실행 가능한 하나의 오브젝트 파일로 합쳐준다.

<br>

### 2. 배열

#### 메모리

- C에는 여러 자료형이 있고, 각각의 자료형은 서로 다른 크기의 메모리를 차지한다
  - `bool`: 불리언, 1바이트
  - `char`: 문자, 1바이트
  - `int`: 정수, 4바이트
  - `float`: 실수, 4바이트
  - `long`: (더 큰) 정수, 8바이트
  - `double`: (더 큰) 실수, 8바이트
  - `string`: 문자열, ?바이트

<br>

#### 배열 만들기

```c
#include <cs50.h>
#include <stdio.h>

float average(int length, int array[]);

int main(void)
{
    int n = get_int("Number of scores: ");
    int scores[n];

    for(int i = 0; i < n; i++)
    {
        scores[i] = get_int("Score %i: ", i + 1);
    }

    printf("Average: %.1f\n", average(n, scores));
}

float average(int length, int array[])
{
    int sum = 0;
    for(int i = 0; i < length; i++)
    {
        sum = sum + array[i];
    }

    return (float) sum / (float) length;
}
```

- `(float) sum`: 형변환 하는 방법 중 하나

<br>

### 3. 문자열과 배열

- 지금까지 사용한 string 의 데이터는 사실 char 데이터들의 배열이다.
- `string s = "Hi!"` 의 s는 메모리에 아래와 같이 저장된다.
  - `s[0] = H`
  - `s[1] = i`
  - `s[2] = !`
  - `s[3] = \0`
  - 가장 끝의 `\0`은 문자열의 끝을 나타내는 널 종단 문자

```c
#include <cs50.h>
#include <stdio.h>

string names[4];

names[0] = "EMMA";
names[1] = "RODRIGO";
names[2] = "BRIAN";
names[3] = "DAVID";

printf("%s\n", names[0]);
printf("%c%c%c%c\n", names[0][0], names[0][1], names[0][2], names[0][3]);

// EMMA
// EMMA
```

<br>

### 4. 문자열의 활용

- 문자열의 길이를 얻는 `strlen()`
- `<string.h>`

```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("Input: ");
    int n = strlen(s);

    printf("Output:\n");

    for (int i = 0; i < n; i++)
    {
        printf("%c\n", s[i]);
    }

    printf("s's length: %i\n", n);
}
```

<br>

- 소문자를 대문자로 변환하는 `toupper()`
- `<ctype.h>`

```c
#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("Before: ");
    printf("After:  ");
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        printf("%c", toupper(s[i]));
    }
    printf("\n");
}
```

<br>

### 5. 명령행 인자

```c
// name.c

#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[])
{
    if (argc == 2)
    {
        printf("hello, %s\n", argv[1]);
    }
    else
    {
        printf("hello, world\n");
    }
}

// ./name Heo
// => Hello, Heo
```

- `argc` : main 함수가 받게 될 입력의 개수
- `argv[]` : 입력을 포함한 배열
  - `argv[]`의 첫 번째 인자는 파일 이름이다.

<br>

- main 함수의 리턴 값은 0이다.
- 아무 문제 없을 때 0을 반환.
- 만약 문제가 생겼을 때는 다른 숫자를 반환하는데 우리가 평소에 보던 에러코드가 이것이다.

<br><br>

---

### **Reference**

[모두를 위한 컴퓨터 과학 (CS50 2019), David J. Malan](https://www.boostcourse.org/cs112)
