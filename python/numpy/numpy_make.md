#### Numpy - Make
- array 만드는 법
- reshape : 벡터를 2X4행렬로 바꾸는 것과 같이...
- index
- zeros
- ones
- eye
- like
- empty
- arange
- linspace, logspace : 데이터 분할
- random : rand, randn
- stack, concat : 배열을 합치기
- split
- sort

#### array
- ndim : 행렬의 차원
- shape : 행렬의 모양


```python
import numpy as np
```


```python
# 1차원 배열
array = np.array([0,1,2,3])
print(type(array), array)
```

    <class 'numpy.ndarray'> [0 1 2 3]



```python
# 2차원 배열
array = np.array([
    [0,1],
    [1,2],
    [2,3]
])
print(array)
```

    [[0 1]
     [1 2]
     [2 3]]



```python
# 3차원 배열
array = np.array([
    [[0,1,2,3],
    [3,4,5,6],
    [7,8,9,10]],

    [[0,1,2,3],
    [3,4,5,6],
    [7,8,9,10]]
])
print(array)
print(array.ndim, array.shape)
```

    [[[ 0  1  2  3]
      [ 3  4  5  6]
      [ 7  8  9 10]]

     [[ 0  1  2  3]
      [ 3  4  5  6]
      [ 7  8  9 10]]]
    3 (2, 3, 4)


#### reshape
- 행렬의 모양을 바꿀 수 있습니다.


```python
na = np.array(range(1,9))
na
```




    array([1, 2, 3, 4, 5, 6, 7, 8])




```python
na.reshape(2,4)
```




    array([[1, 2, 3, 4],
           [5, 6, 7, 8]])




```python
rna = np.reshape(na, (4,2))
```


```python
# 전치행렬
rna.T
```




    array([[1, 3, 5, 7],
           [2, 4, 6, 8]])



#### index
- 행렬의 특정 위치값을 가져오기
- 행렬 자르기


```python
array
```




    array([[[ 0,  1,  2,  3],
            [ 3,  4,  5,  6],
            [ 7,  8,  9, 10]],

           [[ 0,  1,  2,  3],
            [ 3,  4,  5,  6],
            [ 7,  8,  9, 10]]])




```python
print(array[1][1][2])
```

    5



```python
print(array[1,1,2]) # 위와 같음
```

    5



```python
# 행렬 자르기
result = array[1:,1:,2:]
result
```




    array([[[ 5,  6],
            [ 9, 10]]])




```python
array.ndim, array[0].ndim, array[0][1].ndim
```




    (3, 2, 1)




```python
# 데이터 수정
data = np.array(range(5))
data
```




    array([0, 1, 2, 3, 4])




```python
data[2] = 0
data
```




    array([0, 1, 0, 3, 4])




```python
data[3:] = 2
data
```




    array([0, 1, 0, 2, 2])




```python
# 2차원 행렬 데이터 바꾸기
data = np.array([range(3),range(3,6)])
data
```




    array([[0, 1, 2],
           [3, 4, 5]])




```python
data[1:,1:] = 10
data
```




    array([[ 0,  1,  2],
           [ 3, 10, 10]])



#### zeros
- 행렬을 만들고 안에 0으로 채워 넣습니다.


```python
z = np.zeros(5) # float타입으로 생성
z
```




    array([0., 0., 0., 0., 0.])




```python
z = np.zeros(5, dtype=int)
z
```




    array([0, 0, 0, 0, 0])




```python
# 2차원
z = np.zeros((2,3), dtype=int)
z
```




    array([[0, 0, 0],
           [0, 0, 0]])




```python
# 3차원
z = np.zeros((2,3,4), dtype=int)
z
```




    array([[[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]],

           [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]])



#### ones
- 행렬을 만들고 1로 채웁니다.


```python
one = np.ones((2,3,4), dtype=int)
one
```




    array([[[1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]],

           [[1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]]])



#### eye
- 단위 행렬 데이터를 만듭니다.


```python
np.eye(5)
```




    array([[1., 0., 0., 0., 0.],
           [0., 1., 0., 0., 0.],
           [0., 0., 1., 0., 0.],
           [0., 0., 0., 1., 0.],
           [0., 0., 0., 0., 1.]])



#### like
- 행렬안에 있는 모든 데이터를 0이나 1로 바꿀 수 있습니다.


```python
z
```




    array([[[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]],

           [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]])




```python
np.ones_like(z)
```




    array([[[1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]],

           [[1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]]])




```python
one
```




    array([[[1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]],

           [[1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]]])




```python
np.zeros_like(one)
```




    array([[[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]],

           [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]])



#### empty
- 빈 행렬 데이터를 만듭니다.
- 안에 어떤 데이터가 들어갈지 알 수 없습니다.


```python
np.empty((5,5))
```




    array([[1., 0., 0., 0., 0.],
           [0., 1., 0., 0., 0.],
           [0., 0., 1., 0., 0.],
           [0., 0., 0., 1., 0.],
           [0., 0., 0., 0., 1.]])



#### arange
- range와 사용법은 같습니다.
- 하지만 큰 데이터를 만들 때 속도가 빠릅니다.


```python
size = int(1E6)
size
```




    1000000




```python
%timeit for x in range(size): x ** 2
%timeit for x in np.arange(size): x ** 2    
```

    697 ms ± 31.1 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
    373 ms ± 3.18 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)



```python
np.arange(5,10)
```




    array([5, 6, 7, 8, 9])




```python
np.arange(5,10,2)
```




    array([5, 7, 9])




```python
np.arange(10,-1, -1)
```




    array([10,  9,  8,  7,  6,  5,  4,  3,  2,  1,  0])



#### linspace, logspace


```python
np.linspace(0,100,3)
```




    array([  0.,  50., 100.])




```python
np.linspace(0,100,5)
```




    array([  0.,  25.,  50.,  75., 100.])




```python
# log10(x1)=2, log10(x2)=3, log10(x3)=4
# x1:100, x2:1000, x3:10000
np.logspace(2,4,3)
```




    array([  100.,  1000., 10000.])




```python
# 2, 2.5, 3
# log10(x1)=2, log10(x2)=2.5, log10(x3)=3
# x1:10**2, x2:10**2.5, x3:10**3
np.logspace(2,3,3)
```




    array([ 100.        ,  316.22776602, 1000.        ])



#### random
- seed : 랜덤값을 결정해주는 값입니다.
- rand : uniform(균등분포)하게 랜덤값을 뽑아줍니다. (뽑히는 숫자의 횟수가 균등분포 : 1을 20개, 2를 20개, 3을 20개....)
- randn : gaussian(정규분포)로 랜덤값을 뽑아줍니다. (뽑히는 숫자의 횟수가 정규분포)
- randint : 정수를 랜덤하게 뽑아줍니다.
- shuffle : 섞어주는 함수
- choice : 여러개에서 선택해주는 함수 입니다.


```python
np.random.seed(0)
rd = np.random.rand(10)
rd
```




    array([0.5488135 , 0.71518937, 0.60276338, 0.54488318, 0.4236548 ,
           0.64589411, 0.43758721, 0.891773  , 0.96366276, 0.38344152])




```python
rd = np.random.rand(2,5)
rd
```




    array([[0.79172504, 0.52889492, 0.56804456, 0.92559664, 0.07103606],
           [0.0871293 , 0.0202184 , 0.83261985, 0.77815675, 0.87001215]])




```python
np.random.seed(1) # seed를 바꿔야 값이 바뀜.
rd = np.random.rand(10)
rd
```




    array([4.17022005e-01, 7.20324493e-01, 1.14374817e-04, 3.02332573e-01,
           1.46755891e-01, 9.23385948e-02, 1.86260211e-01, 3.45560727e-01,
           3.96767474e-01, 5.38816734e-01])




```python
rdn = np.random.randn(2,5)
rdn
```




    array([[ 1.74481176, -0.7612069 ,  0.3190391 , -0.24937038,  1.46210794],
           [-2.06014071, -0.3224172 , -0.38405435,  1.13376944, -1.09989127]])




```python
# randint
np.random.randint(3) # 3보다 작은 정수 랜덤추출
np.random.randint(3,10) # 3~9까지의 수
```




    4




```python
np.random.randint(5, 11, (3,3))
```




    array([[8, 9, 5],
           [6, 8, 9],
           [7, 9, 5]])




```python
data = np.random.randint(5, size=(3,3)) # size 안써주면 에러남
data
```




    array([[2, 2, 1],
           [3, 4, 2],
           [0, 0, 1]])




```python
# shuffle로 데이터 순서를 바꿀 수 있습니다.
np.random.shuffle(data)
data
```




    array([[2, 2, 1],
           [0, 0, 1],
           [3, 4, 2]])




```python
# choice
np.random.choice(5, 10, p=[0.1, 0, 0.3, 0.6 ,0]) #0: 10%, 1: 0%, 2: 30%, 3: 60%, 4: 0% 확률로 추출
```




    array([2, 2, 3, 0, 3, 3, 0, 2, 2, 2], dtype=int64)




```python
# unique
data
index, count = np.unique(data, return_counts=True)

print(index)
print(count)
```

    [0 1 2 3 4]
    [2 2 3 1 1]


#### stack
- 행렬을 쌓는 것처럼 합치는 방법(두 행렬의 행을 하나씩 교차로 쌓는다)
- axis가 증가하면 차원이 안으로 들어감
    - 예를 들면 (2,3,4) 3차원 행렬이 있다고 한다면
    - axis=0 -> 2에 해당하는 부분들을 교차로 쌓음
    - axis=1 -> 3에 해당하는 부분들을 교차로 쌓음
    - axis=2 or -1 -> 4에 해당하는 부분들을 교차로 쌓음


```python
na1 = np.arange(6)
na2 = np.arange(6,12)
print(na1)
print(na2)
```

    [0 1 2 3 4 5]
    [ 6  7  8  9 10 11]



```python
# axis가 0이면 가로로 쌓습니다.
# axis가 0이 아니면 세로로 쌓습니다.
na3 = np.stack((na1,na2), axis=0) # axis : 축
print(na3)
```

    [[ 0  1  2  3  4  5]
     [ 6  7  8  9 10 11]]



```python
na4 = np.stack((na1,na2), axis=1)
print(na4)
```

    [[ 0  6]
     [ 1  7]
     [ 2  8]
     [ 3  9]
     [ 4 10]
     [ 5 11]]



```python
na1 = np.random.randint(10, size=(2,3))
na2 = np.random.randint(10, size=(2,3))
print(na1)
print(na2)
```

    [[1 2 0]
     [4 7 0]]
    [[6 2 4]
     [3 6 7]]



```python
# axis가 0이면 가로로 쌓습니다.
na3 = np.stack((na1,na2))
na3
```




    array([[[1, 2, 0],
            [4, 7, 0]],

           [[6, 2, 4],
            [3, 6, 7]]])




```python
na4 = np.stack((na1,na2), axis=1)
print(na4)
```

    [[[1 2 0]
      [6 2 4]]

     [[4 7 0]
      [3 6 7]]]



```python
# vstack
# [0,1,2], [1,2,3], [2,3,4], [3,4,5], [4,5,6]
ls = []
for idx in range(5):
    ls.append(range(7)[idx:idx+3])
ls
```




    [range(0, 3), range(1, 4), range(2, 5), range(3, 6), range(4, 7)]




```python
np.vstack(ls)
```




    array([[0, 1, 2],
           [1, 2, 3],
           [2, 3, 4],
           [3, 4, 5],
           [4, 5, 6]])




```python
# hstack
np.hstack(ls)
```




    array([0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6])




```python
# 묶어줘야할땐 list comprehension 사용해야함
ls = [list(range(7)[idx:idx+3]) for idx in range(5)]
ls
```




    [[0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]]




```python
np.arange(5)[1:,np.newaxis]
```




    array([[1],
           [2],
           [3],
           [4]])



#### concatenate 결합
- 가로결합 : 행의 갯수가 같아야 함.
- 세로결합 : 열의 갯수가 같아야 함.


```python
r1 = np.random.randint(10, size=(2,3))
r1
```




    array([[5, 9, 9],
           [9, 8, 6]])




```python
r2 = np.random.randint(10, size=(3,2))
r2
```




    array([[4, 2],
           [9, 4],
           [0, 0]])




```python
r3 = np.random.randint(10, size=(3,3))
r3
```




    array([[6, 3, 0],
           [6, 4, 7],
           [6, 2, 9]])




```python
np.concatenate([r1,r3])
```




    array([[5, 9, 9],
           [9, 8, 6],
           [6, 3, 0],
           [6, 4, 7],
           [6, 2, 9]])




```python
np.concatenate([r2,r3], axis=1)
```




    array([[4, 2, 6, 3, 0],
           [9, 4, 6, 4, 7],
           [0, 0, 6, 2, 9]])



#### split


```python
r = np.arange(10)
r
```




    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])




```python
r1 = np.split(r, [5])
```


```python
r2 = np.split(r, [2,4,6,8])
```


```python
# vsplit - 행렬을 수평으로 나눠줍니다.(그냥 split과 같은 개념)
```


```python
r = np.random.randint(10, size=(4,6))
r
```




    array([[7, 0, 5, 2, 2, 8],
           [5, 0, 5, 9, 8, 6],
           [6, 0, 4, 7, 3, 0],
           [1, 6, 0, 6, 1, 6]])




```python
r1, r2, r3 = np.vsplit(r, [2,3])
r1, r2, r3
```




    (array([[7, 0, 5, 2, 2, 8],
            [5, 0, 5, 9, 8, 6]]),
     array([[6, 0, 4, 7, 3, 0]]),
     array([[1, 6, 0, 6, 1, 6]]))




```python
# hsplit - 행렬을 수직으로 나눠줍니다.
```


```python
r1, r2 = np.hsplit(r, [2])
r1, r2
```




    (array([[7, 0],
            [5, 0],
            [6, 0],
            [1, 6]]), array([[5, 2, 2, 8],
            [5, 9, 8, 6],
            [4, 7, 3, 0],
            [0, 6, 1, 6]]))



#### sort


```python
r1 = np.random.randint(10, size=(3,3))
r1
```




    array([[5, 0, 7],
           [8, 8, 8],
           [0, 7, 2]])




```python
r1.sort() # 가로 sorting
r1
```




    array([[0, 5, 7],
           [8, 8, 8],
           [0, 2, 7]])




```python
r1.sort(axis=0) # 세로 sorting
r1
```




    array([[0, 2, 7],
           [0, 5, 7],
           [8, 8, 8]])




```python
np.c_[np.array([1,2,3]), np.array([4,5,6])]
```




    array([[1, 4],
           [2, 5],
           [3, 6]])




```python
np.r_[np.array([1,2,3]), np.array([4,5,6])]
```




    array([1, 2, 3, 4, 5, 6])
