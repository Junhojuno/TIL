### Function
- 선언, 호출
- parameter, argument 개념
- return 개념
- `*args`, `**kargs`
- docstring (shift + tab 키) : 만들어놓은 함수에 대한 설명...이것을 쓰는 방법에 대해
- scope (glbal, local)
- inner function : 함수안에 함수 사용하는 법
- lambda function
- map, filter, reduce 함수 : list 수정시 간단하게 하는 방법
- decorlator

#### 선언
```
def <function_name>():
    code
```
#### 호출
```
<function_name>()
```


```python
#선언
def test():
    print("this is test function!")
test()
```

    this is test function!


#### parameter & argument


```python
# parameter(받는 값)
def sum_func(a, b):
    print(a+b)
# argument(넘겨주는 값)
sum_func(2, 5)
num1, num2 = 2, 5
sum_func(num1, num2)
```

    7
    7



```python
# keyword argument : 순서에 상관없이 집어 넣기
def div_func(a, b):
    print(a / b)

div_func(b = 10, a = 2)
```

    0.2



```python
# default parameter :  default parameter가 아닌 parameter를 default parameter앞쪽에 써줘야함
def sum_func(num1, num2=0):
    print(num1 + num2)

sum_func(3)
sum_func(3, 5)
```

    3
    8



```python
#default로 설정되어있는 parameter는 항상 뒤쪽으로!!
#아래 코드는 앞에 있어서 error
def minus(num1=3, num2=2, num3):
    print(num1 - num2 - num3)
minus(5)
```


      File "<ipython-input-5-8d78485696fe>", line 3
        def minus(num1=3, num2=2, num3):
                 ^
    SyntaxError: non-default argument follows default argument




```python
#이렇게 해야 error 안남!!
def minus(num3, num1=3, num2=2):
    print(num1 - num2 - num3)
minus(5)
```

    -4



```python
def sum_func(num1=0, num2):
    print(num1 + num2)
sum_func(3) # error뜸, num2를 num1앞에 써줘야함.
```


      File "<ipython-input-7-d41df0486078>", line 1
        def sum_func(num1=0, num2):
                    ^
    SyntaxError: non-default argument follows default argument



##### Return
- 함수를 호출했을 때 결과를 반환하는 용도로 사용.


```python
def sum_func(num1, num2):
    return num1 + num2
```


```python
result = sum_func(1,2)
result
```




    3




```python
def calc_func(num1, num2):
    return num1 + num2, num1 - num2
```


```python
calc_func(5, 2) #Tuple 형태로 return
```




    (7, 3)




```python
result_1, result_2 = calc_func(5, 2) # 나누어 넣을 수도 있음.
print(result_1, result_2)
```

    7 3


##### ```*args, **kwargs```
- `*` : 전부, 모두, All 의미


```python
# *args : 하나로 parameter를 뭉쳐서 tuple로 봄, 몇개의 parameter를 받을지 모를때 사용.
def sum_func(*args):
    print(args)
    print(*args)
    print(type(args))
    print(args[0], args[1])
    return sum(args)

sum_func(1, 3, 4, 5)
```

    (1, 3, 4, 5)
    1 3 4 5
    <class 'tuple'>
    1 3





    13




```python
def sum_func2(a, *args):
    print(a)
    print(args)
    print(*args)
    print(type(a) ,type(args))
    return sum(args)

sum_func2(1,2,3,4,5)
```

    1
    (2, 3, 4, 5)
    2 3 4 5
    <class 'int'> <class 'tuple'>





    14




```python
# *args로 평균구하기
def avg_func(*args):
    return sum(args)/len(args)

a = avg_func(100,70,80,99,85,60,80)
print("avg: {}".format(round(a,2)))
```

    avg: 82.0



```python
# *args로 평균구하기-argument에 *넣기
def avg_func(*args):
    return sum(args)/len(args)

ls = [100,70,80,99,85,60,80]
print(*ls) # argument에 *를 넣으면 괄호가 벗겨진다
a = avg_func(*ls)
print("avg: {}".format(round(a,2)))
dict.get
```

    100 70 80 99 85 60 80
    avg: 82.0





    <method 'get' of 'dict' objects>




```python
# **kwargs : dict타입으로 받는다. *args는 tuple이었다는..!
def sum_func(**kwargs):
    print(kwargs)
    print(type(kwargs))
    print(kwargs["num1"], kwargs["num2"])

sum_func(num1=1, num2=3)
```

    {'num1': 1, 'num2': 3}
    <class 'dict'>
    1 3



```python
#키워드가 없는 argument들은 args로 받아지고,
#키워드가 있는 argument들은 kwargs로 받아짐.
#parameter의 순서를 고려해서 argument 배치해야함!
def func(*args, **kwargs):
    print(args)
    print(kwargs)

func(1,2,3,num1=4, num2=5)
```

    (1, 2, 3)
    {'num1': 4, 'num2': 5}



```python
# argument에 * 사용
def test(*args):
    print(args)

ls = [1,2,3]  
test(*ls) # 이건 test(1,2,3)과 같음
test(ls) # 이건 ([1,2,3],)이렇게 뜰걸?
```

    (1, 2, 3)
    ([1, 2, 3],)



```python
def avg_func(**kwargs):
    print(kwargs)
    print(type(kwargs))
    total, count = 0, 0
    for subject, point in kwargs.items():
        print(subject, point)
        total += point
        count += 1
    return total/count

a = avg_func(korean=100, english=90, math=80)
print(a)
```

    {'korean': 100, 'english': 90, 'math': 80}
    <class 'dict'>
    korean 100
    english 90
    math 80
    90.0


##### docstring
- 함수를 설명할 때 사용
```
def <function_name>():
    """
    description
    """
```
- PEP20 : Zen of python
 - readability counts : 가독성은 중요하다
- PEP8 : coding convention


```python
import this
```

    The Zen of Python, by Tim Peters

    Beautiful is better than ugly.
    Explicit is better than implicit.
    Simple is better than complex.
    Complex is better than complicated.
    Flat is better than nested.
    Sparse is better than dense.
    Readability counts.
    Special cases aren't special enough to break the rules.
    Although practicality beats purity.
    Errors should never pass silently.
    Unless explicitly silenced.
    In the face of ambiguity, refuse the temptation to guess.
    There should be one-- and preferably only one --obvious way to do it.
    Although that way may not be obvious at first unless you're Dutch.
    Now is better than never.
    Although never is often better than *right* now.
    If the implementation is hard to explain, it's a bad idea.
    If the implementation is easy to explain, it may be a good idea.
    Namespaces are one honking great idea -- let's do more of those!



```python
def echo(anything):
    """
    echo returns its input argument
    the operation is:
        1. print (anything)
        2. return (anything)
    """
    print(anything)

```


```python
#shift + tab
#docstring : 함수에 대한 설명, parameter에 대한 설명, 테스트 코드 등등
echo("dss")
```

    dss



```python
# only docstring
echo?
```


```python
## docstring with code
echo??
```


```python
# help()
help(echo)
```

    Help on function echo in module __main__:

    echo(anything)
        echo returns its input argument
        the operation is:
            1. print (anything)
            2. return (anything)



##### Scope
- global, local


```python
# global
gv = 10
def print_gv():
    print(gv)
print_gv()
```

    10



```python
gv = 10
def print_gv():
    gv = 100
    print(gv)
print_gv()
```

    100



```python
gv
```




    10




```python
# global영역의 변수 보기
gv = 10
gv2 = 20
def print_gv():
    gv = 100
    gv2 = 200
    print(globals()["gv"], globals()["gv2"])
print_gv()
```

    10 20



```python
# local영역의 변수 보기
gv = 10
gv2 = 20
def print_gv():
    def test():
        print(1)
    gv = 100
    gv2 = 200
    print(locals())
print_gv()
```

    {'gv2': 200, 'gv': 100, 'test': <function print_gv.<locals>.test at 0x0000020BE27A31E0>}



```python
#local 영역에서 global영역에서 선언된 변수를 사용하고 싶다면?
# global영역의 변수 보기
gv = 10
def change_gv():
    global gv
    gv = 100
    print(gv)
change_gv()
```

    100


#### inner function
- global : 전역 --> 전역함수, 전역변수
- local : 지역 --> 지역함수, 지역변수
- 지역함수, 익명함수(코드를 노출시키면 안될때)


```python
def outer(a, b):
    def inner(c, d):
        return c + d

    return inner(a, b)
```


```python
outer(1, 2)
```




    3




```python
def outer(a, b):
    def inner(c, d):
        return c + d

    return inner
```


```python
func = outer(1, 2)
type(func)
```




    function




```python
func(1,2)
```




    3



#### lambda function
- 간단한 함수를 선언하지 않고 함수처럼 사용하는 함수
- 메모리 절약할 수 있음.
- default parameter, 삼항연산 사용 가능
- ```lambda <parameters> : <return_value>```


```python
def sum_func(x, y):
    return x + y
sum_func(1, 2)
```




    3




```python
sum_func2 = lambda x, y : x + y
sum_func2(1, 2)
```




    3




```python
type(sum_func), type(sum_func2)
```




    (function, function)




```python
def test(func, num1, num2):
    return func(num1, num2)

test(sum_func, 1, 2), test(lambda x, y: x + y, 1,2)
```




    (3, 3)



#### Map & Filter & Reduce
- 리스트(순서가 있는 타입을 대표해 말함) 형태의 데이터를 함수와 함께 가공해주기 위해서 사용되는 함수.
- map : 리스트 안의 모든 value에 함수를 적용해서 결과 데이터를 리스트 형태로 반환.
- filter : 리스트 안에 있는 value 데이터를 특정 함수로 필터링해주는 함수.
- reduce : 리스트 안에 있는 value 데이털를 하나씩 함수에 적용해서 하나의 결과를 얻는 함수. 내장함수가 아니어서 import 필요


```python
# map #shift + tab
ls = [1,2,3,4]
def sum_func(num):
    return num - 1
map(sum_func, ls), list(map(sum_func, ls))
```




    (<map at 0x20be99de208>, [0, 1, 2, 3])




```python
# quiz - map1 : 사람의 성만 출력
man_list = ["Kim kildong", "Lee jeawoo", "Park sangjin", "Kim kilsoo", "Lee sungsim"]

# def name_func(man):
#     return man.split(" ")[0]
# list(map(name_func, man_list))

list(map(lambda x : x.split(" ")[0], man_list))
```




    ['Kim', 'Lee', 'Park', 'Kim', 'Lee']




```python
# quiz - map2 : 1~10 홀짝나누고 dict타입으로 출력
num_list = list(range(1,11))
dict(map(lambda x: (x, "even") if x % 2 == 0 else (x,"odd"), num_list))
```




    {1: 'odd',
     2: 'even',
     3: 'odd',
     4: 'even',
     5: 'odd',
     6: 'even',
     7: 'odd',
     8: 'even',
     9: 'odd',
     10: 'even'}




```python
# quiz - map3 : map함수를 구현하세요.
ls_1 = [1,2,3]
ls_2 = [5,6,7,8]
ls_3 = [9,10,11,12]

# def sum_func1(*args):
#     result = [sum(i) for i in args]
#     return result

# def map_func(func, *args):
#     result = list(zip(*args))
#     return func(*result)

## 강사님 코드 - 리스트 안의 원소(?) 갯수까지 고려
def sum_func(*args):
    return sum(args)

def map_func(func, *args):
    result = []

    # TODO
    values_count = len(args[0]) # 4
    for idx in range(len(args)):
        values_count = values_count if values_count < len(args[idx]) else len(args[idx])

    params_count = len(args) # 3

    for idx1 in range(values_count):
        params = []
        for idx2 in range(params_count):
            params.append(args[idx2][idx1])
        result.append(func(*params))

    return result


map_func(sum_func, ls_1, ls_2, ls_3)
```




    [15, 18, 21]



#### Filter
- 리스트 데이터에서 조건에 맞는 value 데이터만 남기는 필터링 기능을 하는 함수
- filter의 아규먼트로 들어가는 함수는 항상 리턴값이 True 아니면 False로 리턴되어야함
- True 값인 데이터는 남기고 False 값인 데이터는 제거
- ```filter(<function>,<list(iterable)>)```


```python
# filter를 사용하여 리스트에서 짝수 데이터만 남기는 코드 작성
ls  = list(range(1,11))

list(filter(lambda num: num % 2 == 0, ls))
```




    [2, 4, 6, 8, 10]




```python
#filter #shift + tab
def is_even(num):
    return True if num % 2 == 0 else False
list(filter(is_even, ls))
```




    [2, 4, 6, 8, 10]




```python
# quiz - filter1 : 성이 "Lee"인 사람만 출력하기
name_list = ["Kim kildong", "Lee jeawoo", "Park sangjin", "Kim kilsoo", "Lee sungsim"]

# method 1
# family_name = "Lee"
# def family(name):
#     return name.split(" ")[0] == "Lee"
# list(filter(family, name_list))

#method 2
list(filter(lambda num: num.split()[0] == "Lee", name_list))


#method 3 - List comprehension으로 풀기
result = [name for name in name_list if name.split()[0] == "Lee"]
result
```




    ['Lee jeawoo', 'Lee sungsim']




```python
# quiz - filter2 : 홀짝 구분, filter 구현
ls_5 = list(range(1,11))
is_odd_even = {
    "odd": lambda num : num % 2 == 1,
    "even": lambda num : num % 2 == 0,
}
def filter_func(func, data_list):
    result = []
    for x in data_list:
        if func(x):
            result.append(x)
    return result




result_1 = filter_func(is_odd_even["odd"], ls_5)
result_2 = filter_func(is_odd_even["even"], ls_5)
result_1, result_2
```




    ([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])



#### Reduce
- 리스트 데이터를 처음부터 순서대로 특정 함수를 실행하여 나온 결과를 다음 데이터와 함께 또 다시 함수를 실행하여
- 마지막에 하나의 데이터를 남기는 함수
- ```reduce(<function>, <list(iterable)>)```


```python
from functools import reduce

ls = [1,2,3,4,5]
reduce(lambda num1, num2: num1 + num2, ls)
```




    15




```python
# reduce # shift + tab
from functools import reduce

def sum_func2(num1, num2):
    return num1 + num2

reduce(sum_func2, ls)
```




    15




```python
# 가장 큰 수를 구하는 코드 작성
ls = [1,3,5,7,2]
reduce(lambda num1, num2: num1 if num1 > num2 else num2, ls)
```




    7




```python
# quiz - reduce1 : 이름이 가장 긴 사람 출력.
name_list = ["Kim kildong", "Lee jeawoo", "Park sangjin", "Kim kilsoo", "Lee sungsim"]
reduce(lambda x,y: x if len(x) > len(y) else y, name_list)
```




    'Park sangjin'




```python
# quiz - reduce2 : reduce 함수 직접 구현하기.
ls = [1,2,3,4,5]
# total = 0
# def reduce_func(func, ls):
#     total = 0
#     for i in ls:
#         total += i
#     return total

def reduce_func(func, data_list):
    result = data_list[0]
    del data_list[0]

    for data in data_list:
        result = func(result,data)

    return result

reduce_func(lambda x,y: x+y, ls)
```




    15



#### Decolator
- 코드를 바꾸지 않고 함수의 기능을 추가할 때 사용.
- 여러개의 함수에서 공통된 기능을 뽑아서 하나의 함수로 만들어서 사용할 때 사용.
- inner function, ```*args, **kwargs```
- `@<function_name>`

```
def A():
    code1
    code2
    code3

def B():
    code1
    code4
    code3
```

```    
def C(func):
    def wrapper(*args, **kwargs):
        code1
        result = func(*args, **kwargs)
        code3
        return result
    return wrapper


@C
def A():
    result = code2
    return result

C(A)(params)로 실행!
A(params) 하면 code1, code2, code3, return result 순으로 실행됨

@C
def B():
    code4



```python
# display를 해주는 decolator 만들기

# 위의 C를 대표하는 함수 disp()
def disp(func):
    def wrapper(*args, **kwargs):
        # code1
        print("running function name:", func.__name__)
        print("args : ", args)
        print("kwargs : ", kwargs)

        #code2(A), code4(B)
        result = func(*args, **kwargs)

        #code3
        print("result : ", result)
        return result

    return wrapper
```


```python
# A
def sum_func(a,b):
    # code1  - print(function name, args, kwargs)
    print("{}+{}={}".format(a,b,a+b))

    #code3 - print("result :", a + b )
    return a + b
```


```python
sum_func(1,2)
```

    1+2=3





    3




```python
# B
def minus_func(a,b):
    # code1  - print(function name, args, kwargs)
    print("{}+{}={}".format(a,b,a+b))

    #code3 - print("result :", a - b )
    return a - b
```


```python
minus_func(1,2)
```

    1+2=3





    -1




```python
@disp
def sum_func(a,b):
    # code1  - print(function name, args, kwargs)
#     print("{}+{}={}".format(a,b,a+b))

    #code3 - print("result :", a + b )
    return a + b
```


```python
sum_func(2, b = 1)
```

    running function name: sum_func
    args :  (2,)
    kwargs :  {'b': 1}
    result :  3





    3




```python
# timer decolator - 함수가 실행되는 시간을 측정하는 데코레이터
import time
def timer(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print("running time:", end_time - start_time)
        return result
    return wrapper
```


```python
@timer
def pow_func(num1, num2):
#     start_time = time.time()
    result = num1 ** num2
#     end_time = time.time()
#     print("running time:", end_time - start_time)
    return result
```


```python
pow_func(2,10)
```

    running time: 0.0





    1024




```python
# decolator를 사용하여 관리자 계정이면 패스워드를 출력, 아니면 패스워드 출력하지 않는 코드 만들기
admin_ls = ["pdj", "dss"]
pw = "dss8"

def admin(func):
    def wrapper(*args, **kwargs):
        is_admin = False
        user_id = func(*args, **kwargs)
        if user_id in admin_ls:
            is_admin = True
        if is_admin:
            print("password : ", pw)
        else:
            print("you're not admin!")
        return is_admin

    return wrapper

```


```python
@admin
def input_user():
    return input("insert user id : ")
```


```python
input_user()
```

    insert user id :
    you're not admin!





    False




```python
user_id = {
    1:"dss",
    2:"data",
    3:"science",
}
@admin
def input_id(input_number):
    return user_id[input_number]
```


```python
input_id(1)
```

    password :  dss8





    True
