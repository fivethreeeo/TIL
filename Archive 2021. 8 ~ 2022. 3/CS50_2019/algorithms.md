## 4강. 알고리즘

[Big O & Big Ω](#big-o--big-ω)  
[선형 검색](#선형-검색)  
[이진 검색](#이진-검색)  
[버블 정렬](#버블-정렬)  
[선택 정렬](#선택-정렬)  
[병합 정렬](#병합-정렬)  
[Reference](#reference)

##### 작성된 예제 코드는 [CS50 Sandbox](https://ide.cs50.io/)를 사용합니다.

<br><br>

### Big O & Big Ω

#### `Big O` : 알고리즘 실행 시간의 상한

- `O(n^2)` : 선택 정렬, 버블 정렬
- `O(n log n)`
- `O(n)` : 선형 검색
- `O(log n)` : 이진 검색
- `O(1)`

<br>

#### `Big Ω` : 알고리즘 실행 시간의 하한

- `Ω(n^2)` : 선택 정렬, 버블 정렬
- `Ω(n log n)`
- `Ω(n)` : 배열 안에 존재하는 값의 개수 세기
- `Ω(log n)`
- `Ω(1)`: 선형 검색, 이진 검색

<br>

### 선형 검색

- 원하는 원소가 발견될 때까지 처음부터 마지막 자료까지 차례대로 검색
- 리스트의 길이가 n이면 최대 n번만큼 실행된다.
- 자료가 정렬되어 있지 않거나 어떤 정보도 없는 경우에 유용
  - 정렬을 해야하는 이유 : 한 번 정렬을 하고 나면, 이후의 검색에서 시간을 크게 단축할 수 있다.

```c
// 선형검색, 구조체 예시

// typedef struct

// strcmp : 문자열 비교 함수
// str1 < str2 인 경우에는 음수 반환
// str1 > str2 인 경우에는 양수 반환
// str1 == str2 인 경우에는 0을 반환 합니다.

#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
    string name;
    string number;
}
person;

int main(void)
{
    person people[4];

    people[0].name = "EMMA";
    people[0].number = "617–555–0100";
    people[1].name = "RODRIGO";
    people[1].number = "617–555–0101";
    people[2].name = "BRIAN";
    people[2].number = "617–555–0102";
    people[3].name = "DAVID";
    people[3].number = "617–555–0103";

    for (int i = 0; i < 4; i++)
    {
        if (strcmp(people[i].name, "EMMA") == 0)
        {
            printf("Found %s\n", people[i].number);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}
```

<br>

### 이진 검색

- 만약 배열이 정렬되어 있다면, 배열 중간 인덱스부터 시작하여 찾고자 하는 값과 비교하며 그보다 작은(작은 값이 저장되어 있는) 인덱스 또는 큰 (큰 값이 저장되어 있는) 인덱스로 이동을 반복하면 됩니다.

```c
// 50을 찾는 이진검색 수도코드

If no items

    Return false

If middle item is 50

    Return true

Else if 50 < middle item

    Search left half

Else if 50 > middle item

    Search right half
```

<br>

### 버블 정렬

#### `bubble sort` : 두 개의 인접한 자료 값을 비교하면서 위치를 교환하는 방식으로 정렬하는 방법

- 실행시간: `(n-1) * (n-2)`, 따라서 `n^2`
- 상한, 하한 실행 시간 전부 `n^2`

```c
Repeat n–1 times

    For i from 0 to n–2

        If i'th and i+1'th elements out of order

            Swap them
```

<br>

- 버블 정렬을 효율적으로 변환하는 법
- 만약 교환이 0번 발생하면 -> 정렬이 다 된 상태 -> 종료시키자!
- 이렇게하면 하한이 `Ω(n)`

```c
Repeat until no swaps

    For i from 0 to n–2

        If i'th and i+1'th elements out of order

            Swap them
```

<br>

### 선택 정렬

#### `selection sort` : 가장 작은 수(혹은 가장 큰 수)를 찾아 첫 번째 위치(혹은 가장 마지막 위치)의 수와 교환해주는 방법

- 실행시간: `(n-1) * (n-2)`, 따라서 `n^2`
- 상한, 하한 실행 시간 전부 `n^2`

```c
For i from 0 to n–1

    Find smallest item between i'th item and last item

    Swap smallest item with i'th item
```

<br>

### 재귀

- `Recursion` : 함수가 본인 스스로를 호출해서 사용하는 것

- 사용자 입력을 받아 높이가 n인 피라미드를 출력하는 함수

```c
#include <cs50.h>
#include <stdio.h>

void draw(int h);

int main(void)
{
    int height = get_int("Height: ");

    draw(height);
}

void draw(int h)
{
    // 높이가 0이라면 (그릴 필요가 없다면)
    if (h == 0)
    {
        return;
    }

    // 높이가 h-1인 피라미드 그리기
    draw(h - 1);

    // 피라미드에서 폭이 h인 한 층 그리기
    for (int i = 0; i < h; i++)
    {
        printf("#");
    }
    printf("\n");
}
```

<br>

### 병합 정렬

- `merge sort` : 원소가 한 개가 될 때까지 계속해서 반으로 나누다가 다시 합쳐나가며 정렬을 하는 방식
- - 상한, 하한 실행 시간 전부 `n log n`

```c
7   4   5   2   6   3   8   1 -> 다음 숫자들을 병합 정렬로 오름차순 정렬 하자.

------------------------------------------------------------------------

7 | 4 | 5 | 2 | 6 | 3 | 8 | 1 → 가장 작은 부분 (숫자 1개)으로 나눠진 결과입니다.

4   7 | 2   5 | 3   6 | 1   8 → 숫자 1개씩을 정렬하여 병합한 결과입니다.

2   4   5   7 | 1   3   6   8 → 숫자 2개씩을 정렬하여 병합한 결과입니다.

1   2   3   4   5   6   7   8 → 마지막으로 숫자 4개씩을 정렬하여 병합한 결과입니다.
```

<br><br>

---

### **Reference**

[모두를 위한 컴퓨터 과학 (CS50 2019), David J. Malan](https://www.boostcourse.org/cs112)
