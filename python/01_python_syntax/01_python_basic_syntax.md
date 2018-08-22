
## python 기초 문법
- 기본, 식별자, 변수, 데이터 타입, 형변환, 연산자

comment, print


```python
# this is a function
def func():
    return 100
```


```python
print("data")
```

    data
    


```python
#기본적으로 '\n'이 default값으로 되어있음. 그래서 결과가 저런식으로 나옴.
print("data1")
print("data2")
print("data3")
```

    data1
    data2
    data3
    


```python
# print format1
s1 = "data1"
s2 = "data2"
print("this is a {}, {}.".format(s1, s2))
```

    this is a data1, data2.
    


```python
# print format2
s1 = "Andy"
s2 = "seoul"
print("this is a {name}, {address} ".format(name=s1, address=s2))
```

    this is a Andy, seoul 
    

## 식별자

- 변수, 함수, 클래스, 모듈, 패키지 등을 구분하기 위해서 사용되는 이름
- 규칙
    * 대소문자를 구분
    * 소문자(a-z), 대문자(A-Z), 숫자(0-9), 특수문자(_) 만 naming 가능
    * 가장앞에 '__' under bar 두번 지양
    * 가장앞에 숫자 사용은 불가
    * 예약어 사용불가 : def, print ....
    * syntax error발생시 앞뒷줄 다 확인해야함.

변수
- =은 대입을 의미


```python
a = 1
#여기서 a는 1을 가지고 있는 Ram안의 공간에서의 주소값을 참조함.
#print(a)를 하면 a의 주소값을 가져와서 그 안에 들어있는 값을 출력하는 방식(구조)임.
```


```python
b = 'python'
```


```python
a, b
```




    (1, 'python')




```python
# 다중할당 - 한줄에 여러개에 변수를 선언하고 값을 정해줄수 있음.
a, b = 1, "python"
```


```python
a, b
```




    (1, 'python')




```python
#여러변수에 한가지 값을 넣어줄 수도 있음.
c = d = e = "data"
```


```python
c,d,e
```




    ('data', 'data', 'data')



## 자료형
- Number : int, float, complex
- Boolean : True, False
- String
- Collection
    - List
    - Tuple
    - Dictionary
    - Set


```python
#Number - int
a, b, c, d = 0, 12345, -9993, 23844
type(a), type(b), type(c), type(d)
```




    (int, int, int, int)




```python
#Number - float
a, b, c, d = 0.0, 123.5678, -123.12, 0.12
a, b, c, d
```




    (0.0, 123.5678, -123.12, 0.12)




```python
#Number - complex(복소수)
a = 2 + 3j
b = complex(3, -4)
print(type(a), type(b))
```

    <class 'complex'> <class 'complex'>
    


```python
#실수부
a.real, b.real
```




    (2.0, 3.0)




```python
#허수부
a.imag
```




    3.0




```python
#켤레복소수
a.conjugate()
```




    (2-3j)




```python
# Boolean
a, b = True, False
a, b
```




    (True, False)




```python
type(a), type(b)
```




    (bool, bool)




```python
# String
a, b = "data", "science"
print(type(a), type(b))
```

    <class 'str'> <class 'str'>
    


```python
# " " 안에 ' ' 표현
c = "data 'science' is good"
c
```




    "data 'science' is good"




```python
# String - multi line
a = """fast campus
data science
good"""
print(a)
a
```

    fast campus
    data science
    good
    




    'fast campus\ndata science\ngood'




```python
# String - multiful string
s = "data " * 10
s
```




    'data data data data data data data data data data '




```python
# String - offset
#문자 하나하나에 넘버링을 해서 문자열의 특정 위치의 문자열을 선택할 수 있음.
a = "abcdefg"
a[1], a[-1]
```




    ('b', 'g')




```python
# 문자열의 볌위를 지정, 문자열 선택 가능
a[1:3], #마지막 3번째는 포함하지 않음
```




    ('bc',)




```python
a[:], a[:3], a[3:]
```




    ('abcdefg', 'abc', 'defg')




```python
# step - 띄어 출력
# inverse 가능
a[::2], a[::-1]
```




    ('aceg', 'gfedcba')




```python
# String methods
# upper()
a.upper()

#lower()
a.lower()

a.upper().lower()
```




    'abcdefg'




```python
# find : 해당 문자열의 위치를 알려줌
a.find("c"), a.find("de")
```




    (2, 3)




```python
# find - 없는 문자열은 -1 반환
a.find("z")
```




    -1




```python
# index
a.index("c"), a.index("de")
```




    (2, 3)




```python
#find와의 차이: 없는 문자열은 에러뜸
a.index("z")
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-49-c178b27660bf> in <module>()
          1 #find와의 차이: 없는 문자열은 에러뜸
    ----> 2 a.index("z")
    

    ValueError: substring not found



```python
# count - 문자의 갯수 출력
b = "asgsagwrwawgwa"
c = "as"
b.count("a"), b.count("as"), b.count(c)
```




    (4, 1, 1)




```python
# strip - 띄어쓰기, 공백 제거
s = " data science "
s.lstrip(), s.rstrip(), s.strip()

```




    ('data science ', ' data science', 'data science')




```python
# replace
s.replace("data", "test")
```




    ' test science '




```python
# split - 특정 문자열을 기준에 의해 나눠서 List형태로 만들어줌
s.strip().split(" ")
```




    ['data', 'science']




```python
s = "data,science"
s.split(",")
```




    ['data', 'science']



### collection


```python
# List
# 순서가 있는 데이터의 집합을 가지는 데이터 타입
```


```python
# 리스트 선언
ls_1 = ["fast", "campus", "data", "science"]
# offset이 존재
ls_2 = [1, 2, [1, 2]] #리스트 안에 리스트 사용가능
ls_3 = [[1,2,3], [4,5,6], [7,8,9]] # 행렬로 사용가능
ls_4 = [1, True, "fast"] #여러 타입이 하나의 list로 구성될 수 있음.
print(type(ls_1), type(ls_2), type(ls_3), type(ls_4))
ls_1, ls_2, ls_3, ls_4
```

    <class 'list'> <class 'list'> <class 'list'> <class 'list'>
    




    (['fast', 'campus', 'data', 'science'],
     [1, 2, [1, 2]],
     [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
     [1, True, 'fast'])




```python
# List offset
ls = ["fast", "campus", "data", "science"]
ls[1], ls[-1], ls[1:3]
```




    ('campus', 'science', ['campus', 'data'])




```python
ls[::-1]
```




    ['science', 'data', 'campus', 'fast']




```python
# offset index를 이용해서 list 구성값 바꾸기
ls[0] = "data"
ls
```




    ['data', 'campus', 'data', 'science']




```python
# List - methods
# append, sort, reverse, index, insert, remove, pop
# insert는 특정 위치에 추가, append는 무조건 뒤에 추가
# pop은 마지막 값을 빼버리는 기능
```


```python
ls.append("dss8")
ls
```




    ['data', 'campus', 'data', 'science', 'dss8']




```python
ls.sort()
ls
```




    ['campus', 'data', 'data', 'dss8', 'science']




```python
ls.reverse()
ls
```




    ['science', 'dss8', 'data', 'data', 'campus']




```python
ls.index("dss8")
```




    1




```python
ls.index("data") #순서상 가장 먼저인 data index값 출력
```




    2




```python
# insert(데이터가 들어갈 위치, 들어갈 값)
ls.insert(2, "insert")
ls
```




    ['science', 'dss8', 'insert', 'data', 'data', 'campus']




```python
ls.remove("insert")
ls
```




    ['science', 'dss8', 'data', 'data', 'campus']




```python
ls.remove("data")
ls #한번에 하나만 지울 수 있음. 실수로 두 번 실행해서 "data"가 없음
```




    ['science', 'dss8', 'data', 'campus']




```python
ls.pop()
ls
```




    ['science', 'dss8', 'data']




```python
ls[1:3] = "fast"
ls
```




    ['science', 'f', 'a', 's', 't']




```python
# list copy
a = [1,2,3]
b = a
b
```




    [1, 2, 3]




```python
b[2] = 10
a, b # 같이 바뀜....
```




    ([1, 2, 10], [1, 2, 10])




```python
c = a.copy()
a, b, c
```




    ([1, 2, 10], [1, 2, 10], [1, 2, 10])




```python
a[2] = 100
a, b, c
```




    ([1, 2, 100], [1, 2, 100], [1, 2, 10])




```python
# Tuple
# 리스트와 같이 순서가 있는 데이터 타입. 단, 수정이 불가능
# 튜플의 사용 이유 - 리스트보다 메모리(컴퓨터 자원)를 적게 사용하기 때문에
```


```python
# 튜플 선언
t = 1, 2, 3, 4
t
```




    (1, 2, 3, 4)




```python
t1 = (1, 2, 3, 4)
t2 = (1, "dss8", True, [1, 2, 3])
```


```python
t2[2] = 0 # 수정 불가
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-78-68eeef1f0ff6> in <module>()
    ----> 1 t2[2] = 0 # 수정 불가
    

    TypeError: 'tuple' object does not support item assignment



```python
t2[1:3], t2[1:], t2[:3]
```




    (('dss8', True), ('dss8', True, [1, 2, 3]), (1, 'dss8', True))




```python
import sys

#getsizeof : byte 단위로 변수에 사용하는 메모리 공간을 알려줌
ls = [1,2,3,4,5]
tu = (1,2,3,4,5)
sys.getsizeof(ls), sys.getsizeof(tu)
```




    (104, 88)




```python
# Dictionary
# 데이터의 순서가 없음. 대신에 key, value가 쌍으로 모여있는 데이터 타입
```


```python
# Dictionary 선언
dic = {
    1:"one",
    "a":["data","science"],
    "숫자": 1234, #","붙여서 끝내는 걸 지향
}
type(dic), dic
```




    (dict, {1: 'one', 'a': ['data', 'science'], '숫자': 1234})




```python
# 수정
dic[1] = "하나"
dic
```




    {1: '하나', 'a': ['data', 'science'], '숫자': 1234}




```python
# methods
# keys, values, items(key, value를 같이), clear, get, copy, update(두개의 dic을 합칠때, 중복된다면 뒤에 있는 dic의 값 적용)
```


```python
dic.keys(), dic.values()
```




    (dict_keys([1, 'a', '숫자']), dict_values(['하나', ['data', 'science'], 1234]))




```python
dic.items()
```




    dict_items([(1, '하나'), ('a', ['data', 'science']), ('숫자', 1234)])




```python
dic.clear()
dic
```




    {}




```python
dic = {1:"one", 2:"two", 3:"three"}
dic.get(3)
```




    'three'




```python
dic.get(4, "no data") # 해당 키의 value가 없을때 "no data"를 반환해라!
```




    'no data'




```python
dic2 = {3:"삼", 4:"사", 5:"오"}
dic, dic2
```




    ({1: 'one', 2: 'two', 3: 'three'}, {3: '삼', 4: '사', 5: '오'})




```python
dic.update(dic2)#두개의 dic을 합칠때, key가 중복된다면 뒤에 있는 dic의 value값 적용
dic
```




    {1: 'one', 2: 'two', 3: '삼', 4: '사', 5: '오'}




```python
del dic[1]
dic
```




    {2: 'two', 3: '삼', 4: '사', 5: '오'}



##### Set
- 중복되는 데이터가 없는 집합 형태의 데이터 타입.
- 합집합, 차집합, 교집합과 같은 연산이 가능합니다.
- 순서가 없음.


```python
# 선언
s = set([1,2,3,4,5,1,2,3])
type(s), s
```




    (set, {1, 2, 3, 4, 5})




```python
s[0] =  100 #error
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-94-f744d4b3eac7> in <module>()
    ----> 1 s[0] =  100 #error
    

    TypeError: 'set' object does not support item assignment



```python
# 값 변경 #순서가 없기 때문에 list로 바꾸고 변경 but 웬만하면 수정안됨(list로 해도 원하는대로 변경안될 수 있음....set이 순서가 없어서!!)
s = list(s)
s[0] = 100
s = set(s)
s
```




    {2, 3, 4, 5, 100}




```python
# set 연산
s1 = set([1,2,3,4])
s2 = set([3,4,5,6])

# 교집합
print(s1 & s2)
print(s1.intersection(s2))

# 합집합
print(s1 | s2)
print(s1.union(s2))

# 차집합
print(s1 - s2)
print(s1.difference(s2))
```

    {3, 4}
    {3, 4}
    {1, 2, 3, 4, 5, 6}
    {1, 2, 3, 4, 5, 6}
    {1, 2}
    {1, 2}
    


```python
# 전체 지정 한칸 앞 이동 : shift + tab 
def test(num1, num2):
    print(num1)
    print(num2)
```

##### 데이터 형변환
- 변수의 데이터 타입을 변경
- 데이터의 값과 변경하려는 데이터의 타입에 따라서 변경이 불가능할 수도 있음. a = "a", int(a)는 불가


```python
# 문자열과 숫자형 형변환
s = "1234"
n = int(s)
type(n),  n
```




    (int, 1234)




```python
int(s) + 1
```




    1235




```python
str(n) + "abc"
```




    '1234abc'




```python
# Boolean 데이터 타입의 형변환 #값이 없으면 or '0'이면 False
bool(""), bool("abcd")
```




    (False, True)




```python
bool(-1), bool(0), bool(1)
```




    (True, False, True)




```python
bool([]), bool([1,2,3,4])
```




    (False, True)




```python
# 문자열 리스트 형변환
s = "data"
s = list(s)
s
```




    ['d', 'a', 't', 'a']




```python
# 튜플과 딕셔너리 데이터의 형변환
# 튜플 -> 딕셔너리 : 튜플데이터가 (key, value) 형태로 선언이 되어야 함.
t = ((1,"one"), ("A", "two"))
d = dict(t)
d
```




    {1: 'one', 'A': 'two'}




```python
# 딕셔너리 -> 튜플
tuple(d) # key값만 변환됨.
```




    (1, 'A')




```python
tuple(d.items())
```




    ((1, 'one'), ('A', 'two'))



##### 연산자
- 산술연산자, 비교연산자, 할당(대입)연산자, 비트연산자, 논리연산자, 멤버연산자, 식별연산자


```python
# 산술연산자 : +, -, /, *, //(몫), %(나머지), **(제곱)
print(2 + 4)
print(2 - 4)
print(5 / 3)
print(5 * 3)
```

    6
    -2
    1.6666666666666667
    15
    


```python
print(10 // 3)
print(10 % 3)
print(3 ** 4)
print(2 ** 0.5) #제곱근도 가능
```

    3
    1
    81
    1.4142135623730951
    


```python
# 비교연산자 : a == b, a != b, a < b, a > b, a <= b, a >= b
a, b, c = 10, 20, 10
print(a, b, c)
print(a == b)
print(a != b)
print(a < b)
print(a > b)
print(a <= b)
```

    10 20 10
    False
    True
    True
    False
    True
    


```python
# 할당(대입)연산자 : =, (= + 할당연산자 : +=, -=, /=, //=, *=, **=)
a = 5
print(a)

a += 10
print(a)

a //= 4
print(a)

a **= 4
print(a)
```

    5
    15
    3
    81
    


```python
# 비트연산자 : &(and), |(or), ^(XOR), 보수(~), shift연산(<<, >>)
a = 3 # 011
b = 5 # 101

print(a & b, bin(a & b))
print(a | b, bin(a | b))
print(a ^ b, bin(a ^ b))
print(~a, bin(~a))
print(a<<2, bin(a<<2)) # * 2**n 의 의미
print(b>>2, bin(b>>2)) # // 2**n
```

    1 0b1
    7 0b111
    6 0b110
    -4 -0b100
    12 0b1100
    1 0b1
    


```python
# 논리연산자 : and, or, not
print(True and True)
print(False and False)

print(True or True)
print(True or False)

a,b,c,d = 1,2,3,4
print(a > b and c < d)
print(not(a > b) and c < d)
```

    True
    False
    True
    True
    False
    True
    


```python
# 멤버연산자 : in, not in
ls = [1,2,3,4,5]

print(1 in ls)
print(6 in ls)

print(1 not in ls)
print(6 not in ls)
```

    True
    False
    False
    True
    


```python
# 식별연산자 : is, is not

# collection이 아닌 데이터 타입은 값을 비교!!
a = "a"
b = a
print(a is b)

c = "a"
print(a is c)
```

    True
    True
    


```python
# collection인 데이터 타입은 주소를 비교!!
a = [1,2,3]
b = a
print(a is b)

c = [1,2,3]
print(a is c) # 그래서 False뜸
```

    True
    False
    
