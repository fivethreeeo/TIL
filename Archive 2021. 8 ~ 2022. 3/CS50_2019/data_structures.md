## 6강. 자료구조

[배열의 크기 조정하기](#배열의-크기-조정하기)  
[연결 리스트 (Linked List)](#연결-리스트-linked-list)  
[연결 리스트 : 트리](#연결-리스트--트리-tree)  
[해시 테이블](#해시-테이블)  
[트라이](#트라이)  
[스택](#스택)  
[큐](#큐)  
[딕셔너리](#딕셔너리)  
[Reference](#reference)

##### 작성된 예제 코드는 [CS50 IDE](https://ide.cs50.io/)를 사용합니다.

<br><br>

### 배열의 크기 조정하기

#### 16진수

- 현재 배열이 저장되어 있는 메모리 위치의 바로 옆에 일정 크기의 메모리를 더 덧붙이면 되겠지만, 실제로는 다른 데이터가 저장되어 있을 확률이 높다.
- 안전하게 새로운 공간에 큰 크기의 메모리를 다시 할당하고 기존 배열의 값들을 하나씩 옮겨줘야 합니다.
- 이 경우 실행시간은 `O(n)`, 배열의 크기 n

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    //int 자료형 3개로 이루어진 list 라는 포인터를 선언하고 메모리 할당
    int *list = malloc(3 * sizeof(int));

    // 포인터가 잘 선언되었는지 확인
    if (list == NULL)
    {
        return 1;
    }

    // list 배열의 각 인덱스에 값 저장
    list[0] = 1;
    list[1] = 2;
    list[2] = 3;

    //int 자료형 4개 크기의 tmp 라는 포인터를 선언하고 메모리 할당
    int *tmp = malloc(4 * sizeof(int));

    if (tmp == NULL)
    {
        return 1;
    }

    // list의 값을 tmp로 복사
    for (int i = 0; i < 3; i++)
    {
        tmp[i] = list[i];
    }

    // tmp배열의 네 번째 값도 저장
    tmp[3] = 4;

    // list의 메모리를 초기화
    free(list);

    // list가 tmp와 같은 곳을 가리키도록 지정
    list = tmp;

    // 새로운 배열 list의 값 확인
    for (int i = 0; i < 4; i++)
    {
        printf("%i\n", list[i]);
    }

    // list의 메모리 초기화
    free(list);
}
```

<br>

- `realloc` : 새로운 메모리에 입력한 값을 복사

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *list = malloc(3 * sizeof(int));
    if (list == NULL)
    {
        return 1;
    }

    list[0] = 1;
    list[1] = 2;
    list[2] = 3;

    // tmp 포인터에 메모리를 할당하고 list의 값 복사
    int *tmp = realloc(list, 4 * sizeof(int));
    if (tmp == NULL)
    {
        return 1;
    }

    // list가 tmp와 같은 곳을 가리키도록 지정
    list = tmp;

    // 새로운 list의 네 번째 값 저장
    list[3] = 4;

    // list의 값 확인
    for (int i = 0; i < 4; i++)
    {
        printf("%i\n", list[i]);
    }

    //list 의 메모리 초기화
    free(list);
}
```

<br>

### 연결 리스트 (Linked List)

- `Linked List`
- 각 값이 메모리상 여러 군데 나뉘어져 있고, 메모리 주소를 기억하고 있어 배열처럼 값을 연이어서 읽을 수 있는 데이터 구조
- 장점 : 메모리를 추가, 삭제, 변경할 때 효율적
- 단점 : 주소를 추가로 저장해 메모리를 2배 이상 사용

<br>

- 배열과 달리 연결 리스트에서는 임의 접근이 불가능하다.
- 연결 리스트에서 임의의 값을 검색할 경우, 해당하는 위치까지 node들을 따라 이동해야한다.
- 따라서 실행시간은 `O(n)`
- 정렬된 배열의 경우 이진 검색을 하면 `O(log n)`

<br>

- 값과, 다음 값의 메모리 주소를 가지고 있는 연결 리스트 구조체

```c
typedef struct node
{
    int number;
    struct node *next;
}
node;
```

<br>

- 연결 리스트 사용하기

```c
#include <stdio.h>
#include <stdlib.h>

//연결 리스트의 기본 단위가 되는 node 구조체를 정의합니다.
typedef struct node
{
    //node 안에서 정수형 값이 저장되는 변수를 name으로 지정합니다.
    int number;

    //다음 node의 주소를 가리키는 포인터를  *next로 지정합니다.
    struct node *next;
}
node;

int main(void)
{
    // list라는 이름의 node 포인터를 정의합니다. 연결 리스트의 가장 첫 번째 node를 가리킬 것입니다.
    // 이 포인터는 현재 아무 것도 가리키고 있지 않기 때문에 NULL 로 초기화합니다.
    node *list = NULL;

    // 새로운 node를 위해 메모리를 할당하고 포인터 *n으로 가리킵니다.
    node *n = malloc(sizeof(node));
    if (n == NULL)
    {
        return 1;
    }

    // n의 number 필드에 1의 값을 저장합니다. “n->number”는 “(*n).numer”와 동일한 의미입니다.
    // 즉, n이 가리키는 node의 number 필드를 의미하는 것입니다.
    // 간단하게 화살표 표시 ‘->’로 쓸 수 있습니다. n의 number의 값을 1로 저장합니다.
    n->number = 1;

    // n 다음에 정의된 node가 없으므로 NULL로 초기화합니다.
    n->next = NULL;

    // 이제 첫번째 node를 정의했기 떄문에 list 포인터를 n 포인터로 바꿔 줍니다.
    list = n;

    // 이제 list에 다른 node를 더 연결하기 위해 n에 새로운 메모리를 다시 할당합니다.
    n = malloc(sizeof(node));
    if (n == NULL)
    {
        return 1;
    }

    // n의 number와 next의 값을 각각 저장합니다.
    n->number = 2;
    n->next = NULL;

    // list가 가리키는 것은 첫 번째 node입니다.
    //이 node의 다음 node를 n 포인터로 지정합니다.
    list->next = n;

    // 다시 한 번 n 포인터에 새로운 메모리를 할당하고 number과 next의 값을 저장합니다.
    n = malloc(sizeof(node));
    if (n == NULL)
    {
        return 1;
    }

    n->number = 3;
    n->next = NULL;

    // 현재 list는 첫번째 node를 가리키고, 이는 두번째 node와 연결되어 있습니다.
    // 따라서 세 번째 node를 더 연결하기 위해 첫 번째 node (list)의
    // 다음 node(list->next)의 다음 node(list->next->next)를 n 포인터로 지정합니다.
    list->next->next = n;

    // 이제 list에 연결된 node를 처음부터 방문하면서 각 number 값을 출력합니다.
    // 마지막 node의 next에는 NULL이 저장되어 있을 것이기 때문에 이 것이 for 루프의 종료 조건이 됩니다.
    for (node *tmp = list; tmp != NULL; tmp = tmp->next)
    {
        printf("%i\n", tmp->number);
    }

    // 메모리를 해제해주기 위해 list에 연결된 node들을 처음부터 방문하면서 free 해줍니다.
    while (list != NULL)
    {
        node *tmp = list->next;
        free(list);
        list = tmp;
    }
}
```

<br>

### 연결 리스트 : 트리 (Tree)

- 연결 리스트에서는 각 요소가 다른 요소를 하나씩만 가리키고 있음
- 가리키는 요소를 여러개로 할 수 있다.
- 연결리스트에서 각 노드들의 연결이 1차원 구성이라면, 트리에서는 2차원 구성

<br>

- <img src="images/binary_search_tree.png">
- 예시: 이진 검색 트리
- 하나의 노드는 두 개의 자식을 가진다.
- 왼쪽 자식 노드는 자신의 값보다 작고, 오른쪽 자식 노드는 자신의 값보다 크다.

<br>

- 이진 검색 트리의 노드 구조체와 "50"을 검색하는 이진 검색 함수
- 이진 검색 트리를 활용하였을 때 검색 실행 시간과 노드 삽입 시간은 모두 O(log n)

```c
//이진 검색 트리의 노드 구조체
typedef struct node
{
    // 노드의 값
    int number;

    // 왼쪽 자식 노드
    struct node *left;

   // 오른쪽 자식 노드
    struct node *right;
} node;

// 이진 검색 함수 (*tree는 이진 검색 트리를 가리키는 포인터)
bool search(node *tree)
{
    // 트리가 비어있는 경우 ‘false’를 반환하고 함수 종료
    if (tree == NULL)
    {
        return false;
    }
    // 현재 노드의 값이 50보다 크면 왼쪽 노드 검색
    else if (50 < tree->number)
    {
        return search(tree->left);
    }
    // 현재 노드의 값이 50보다 작으면 오른쪽 노드 검색
    else if (50 > tree->number)
    {
        return search(tree->right);
    }
    // 위 모든 조건이 만족하지 않으면 노드의 값이 50이므로 ‘true’ 반환
    else {
        return true;
    }
}
```

<br>

### 해시 테이블

- 해시 테이블은 `연결 리스트의 배열`
- 해시 함수로 들어갈 배열을 정하고, 그 안에서 연결리스트로 데이터 저장
- 해시 함수가 이상적이라면 검색 시간은 `O(1)`
- 최악의 경우 하나의 배열에 모든 값이 저장된다면, 검색 시간은 `O(n)`
- <img src="images/hash_table.png">

<br>

### 트라이

- 기본적으로 `트리 형태`의 자료 구조
- 각 노드가 `배열`로 이루어져 있음
- 예를 들어 영어 알파벳으로 이루어진 문자열의 값을 저장한다면, 노드는 a-z의 값을 가지는 배열이다.
- 그리고 배열의 각 요소, 즉 알파벳은 다음 층의 노드를 가리킨다.

<br>

- 예시) Hermione, Harry, Hagrid 세 문자열을 트라이에 저장
- <img src="images/trie.png">
- 위와 같은 트라이에서 값을 검색하는데 걸리는 시간은 ‘문자열의 길이’에 의해 한정됩니다.
- 단순히 문자열의 각 문자를 보며 트리를 탐색해나가기만 하면 되니까요.
- 일반적인 영어 이름의 길이를 n이라고 했을 때, 검색 시간은 O(n)이 되지만, 대부분의 이름은 그리 크지 않은 상수값(예, 20자 이내)이기 때문에 O(1)이나 마찬가지라고 볼 수 있습니다.

<br>

### 스택

- `LIFO`
- 가장 나중에 들어온 값이 가장 먼저 나가는 것
- 예) 뷔페 접시

<br>

### 큐

- `FIFO`
- 가장 먼저 들어온 값이 가장 먼저 나가는 것
- 예) 은행 줄서기

<br>

### 딕셔너리

- `키: 값`
- 키와 값으로 이루어져 있음
- 키에 해당하는 값을 저장
- 해시 테이블과 동일한 개념

<br><br>

---

### **Reference**

[모두를 위한 컴퓨터 과학 (CS50 2019), David J. Malan](https://www.boostcourse.org/cs112)
