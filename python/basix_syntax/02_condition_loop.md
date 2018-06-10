## Input, Output, Condition, Loop

#### Input
- (문자열 데이터타입만 가능)데이터를 받을때 사용


```python
s = input("insert string : ")
print(type(s),s)
```

    insert string : 123
    <class 'str'> 123



```python
n = int(input("insert number : "))
print(type(n), n)
```

    insert number : 1234
    <class 'int'> 1234



```python
ls = input("insert list (sep=' ') : ")
ls = ls.split(" ")
print(type(ls), ls)
```

    insert list (sep=' ') : 1 2 3 4 5
    <class 'list'> ['1', '2', '3', '4', '5', '']



```python
# 출력 - print
a , b = 0, 1
print(a, b)
```

    0 1



```python
# pprint : 딕셔너리 형태의 큰 데이터를 보기 편하게 출력(이거 안쓰면 더럽게 나옴)
from pprint import pprint

dic = {1: "one", 2: "two"}
pprint(dic)
```

    {1: 'one', 2: 'two'}



```python
dic = {"A":90, "B":70, "C":100, "D":90, "E":70, "F":100, "G":90, "H":70, "I":100}
print(dic)
pprint(dic)
```

    {'A': 90, 'B': 70, 'C': 100, 'D': 90, 'E': 70, 'F': 100, 'G': 90, 'H': 70, 'I': 100}
    {'A': 90,
     'B': 70,
     'C': 100,
     'D': 90,
     'E': 70,
     'F': 100,
     'G': 90,
     'H': 70,
     'I': 100}


# 조건 : if, elif, else

if <조건>:
    '< code >'



```python
star1 = 4
star2 = 2

if star1 > 3:
    print("good")
else:
    print("bad")
```

    good



```python
if star1 > 3:
    print("good")
if star1 <= 3:
    print("bad")
```

    good



```python
# elif
# 학점
# 60 이하 F, 61~70: D, 71~80: C, 81~90: B, 91~100: A
point = 74

if point > 90:
    print("A")
elif point > 80:
    print("B")
elif point > 70:
    print("C")
elif point > 60:
    print("D")
else:
    print("F")
```

    C



```python
# Quiz : 숫자를 입력받아서 짝수면 even,홀수면 odd를 출력하는 프로그램(형변환, 연산자 사용)
num = int(input("insert a number: "))

if num % 2 == 0:
    print("Even")
else:
    print("Odd")
```

    insert a number: 0
    Even



```python
# 삼항연산
# result = (Trun인 경우의 조건) if <조건> else (False인 경우)
```


```python
number = 12
result = "even" if number % 2 == 0 else "odd"
print(result)
```

    even


### 반복문
- while, for, break, continue, list comprehension

'''
while <조건>:
    code
    '''



```python
a = 3
while a > 0:
    print(a)
    a -= 1
a
```

    3
    2
    1





    0




```python
# break
a = 0
while True:
    print(a)
    if a == 3:
        break
    a += 1
```

    0
    1
    2
    3



```python
# continue : continue 아래를 실행하지 않고 반복문으로 올라감.
a = 5
while a > 0:
    a -= 1
    if a % 2 != 0:
        continue

    print("even", a)
```

    even 4
    even 2
    even 0



```python
a = [1,2,3,4,"q"]
idx = 0
while True:
    data = a[idx]
    idx += 1
    if data == "q":
        break
    elif data % 2 == 0:
        continue
    print(data)
idx
```

    1
    3





    5



#### for
'''
for <var> in <list>:
    <code>
'''


```python
ls = [1,2,3]
for value in ls:
    if value == 2:
        break
    print(value)
```

    1



```python
ls = [1,2,3]
for value in ls:
    if value % 2 == 0:
        continue
    print(value)
```

    1
    3



```python
##range
print(range(5))
range(5),list(range(5))
```

    range(0, 5)





    (range(0, 5), [0, 1, 2, 3, 4])




```python
list(range(0,5,2))
```




    [0, 2, 4]




```python
list(range(5,0,-1))
```




    [5, 4, 3, 2, 1]




```python
for _ in range(5):
    print("dss")
```

    dss
    dss
    dss
    dss
    dss



```python
# zip : 2개의 리스트를 key, value 형태로 묶어주는 함수
```


```python
subs = ["math", "korean", "science"]
points = [100, 80, 90]

dic = {}
for idx in range(len(subs)):
    dic[subs[idx]] = points[idx]
dic
```




    {'korean': 80, 'math': 100, 'science': 90}




```python
for sub, point in zip(subs, points): #subs의 0번째와 points의 0번째가 같이 첨에 나옴(이후에도 1번째, 2번째)
    dic[subs[idx]] = points[idx]
dic
```




    {'korean': 80, 'math': 100, 'science': 90}




```python
zip(subs,points), dict(zip(subs, points))
```




    (<zip at 0x2615ed49688>, {'korean': 80, 'math': 100, 'science': 90})




```python
# enumerate : list 형태의 데이터를 index와 value를 동시에 사용하고 싶을 때 사용
ls = ["data", "dss", "science", "dss"]
i = 0
for idx, value in enumerate(ls):
    print(idx, value)
```

    0 data
    1 dss
    2 science
    3 dss



```python
dss_index = []
for idx, value in enumerate(ls):
    if value == "dss":
        dss_index.append(idx)
    print(idx, value)
dss_index
```

    0 data
    1 dss
    2 science
    3 dss





    [1, 3]




```python
# for 문을 이용해서 리스트안에 있는 모든 숫자를 더하는 코딩
ls = [1,3,5,7,9]
result = 0

for i in ls:
    result += i
result
```




    25



### List Comprehension
- 반복문의 리스트 결과를 한줄로 코딩하여 바로 만들어주는 방법.
- 리스트 데이터를 만들때 for문보다 속도가 빠름.
```
ls = [<value>+1 for <value> in <list> (if <condition>)] ****if문은 선택사항
```


```python
# method 1
ls = []
ls = [1,2,3,4,5]
print(ls)

# method 2
ls = []
ls.append(1)
ls.append(2)
ls.append(3)
print(ls)

# method 3
ls = []
for num in range(1,6):
    ls.append(num)
print(ls)

# method 4
ls = [num for num in range(1,6)]
print(ls)
```

    [1, 2, 3, 4, 5]
    [1, 2, 3]
    [1, 2, 3, 4, 5]
    [1, 2, 3, 4, 5]



```python
%%timeit
ls = []
for num in range(1,10000):
    ls.append(num)
len(ls)
```

    671 µs ± 8.89 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)



```python
%%timeit
ls = [num for num in range(1,10000)]
len(ls)
```

    268 µs ± 2.26 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)



```python
# 0~10까지 숫자를 출력, 출력되는 숫자 뒤에 홀수인지 짝수인지 문자열을 붙여서 출력하는 코드 by 삼항연산
ls = [str(num) + ":even" if num % 2 == 0 else str(num)+ ":odd" for num in range(11)]
print(ls)
```

    ['0:even', '1:odd', '2:even', '3:odd', '4:even', '5:odd', '6:even', '7:odd', '8:even', '9:odd', '10:even']



```python
# 0~10까지 홀수만 출력
ls = [num for num in range(11) if num % 2 != 0]
ls
```




    [1, 3, 5, 7, 9]




```python
# 0~10까지 짝수만 출력
ls = [num for num in range(11) if num % 2 == 0]
ls
```




    [0, 2, 4, 6, 8, 10]




```python
# Quiz 이씨성을 가진 사람 제거
names = ["kim dss", "park python", "lee data", "lee school", "jung science"]
result1 = [i[3:] if "lee" in i else i for i in names ]
result1

# result1(강사님 코드)
result1 = [
    name.split(" ")[1] if name.split(" ")[0] == "lee" else name
    for name in names
]

#park씨 성 데이터 삭제
result2 = [name for name in result1 if "park" not in name]
result2

#result2(강사님 코드)
result2 = [
    name.split(" ")[1] if name.split(" ")[0] == "lee" else name
    for name in names
    if name.split(" ")[0] != "park"
]
result2
```




    ['kim dss', 'data', 'school', 'jung science']
