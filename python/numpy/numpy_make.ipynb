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

import numpy as np

# 1차원 배열
array = np.array([0,1,2,3])
print(type(array), array)

# 2차원 배열
array = np.array([
    [0,1],
    [1,2],
    [2,3]
])
print(array)

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

#### reshape
- 행렬의 모양을 바꿀 수 있습니다.

na = np.array(range(1,9))
na

na.reshape(2,4)

rna = np.reshape(na, (4,2))

# 전치행렬
rna.T

#### index
- 행렬의 특정 위치값을 가져오기
- 행렬 자르기

array

print(array[1][1][2])

print(array[1,1,2]) # 위와 같음

# 행렬 자르기
result = array[1:,1:,2:]
result

array.ndim, array[0].ndim, array[0][1].ndim

# 데이터 수정
data = np.array(range(5))
data

data[2] = 0
data

data[3:] = 2
data

# 2차원 행렬 데이터 바꾸기
data = np.array([range(3),range(3,6)])
data

data[1:,1:] = 10
data

#### zeros
- 행렬을 만들고 안에 0으로 채워 넣습니다.

z = np.zeros(5) # float타입으로 생성
z

z = np.zeros(5, dtype=int)
z

# 2차원
z = np.zeros((2,3), dtype=int)
z

# 3차원
z = np.zeros((2,3,4), dtype=int)
z

#### ones
- 행렬을 만들고 1로 채웁니다.

one = np.ones((2,3,4), dtype=int)
one

#### eye
- 단위 행렬 데이터를 만듭니다.

np.eye(5)

#### like
- 행렬안에 있는 모든 데이터를 0이나 1로 바꿀 수 있습니다.

z

np.ones_like(z)

one

np.zeros_like(one)

#### empty
- 빈 행렬 데이터를 만듭니다.
- 안에 어떤 데이터가 들어갈지 알 수 없습니다.

np.empty((5,5))

#### arange
- range와 사용법은 같습니다.
- 하지만 큰 데이터를 만들 때 속도가 빠릅니다.

size = int(1E6)
size

%timeit for x in range(size): x ** 2
%timeit for x in np.arange(size): x ** 2

np.arange(5,10)

np.arange(5,10,2)

np.arange(10,-1, -1)

#### linspace, logspace

np.linspace(0,100,3)

np.linspace(0,100,5)

# log10(x1)=2, log10(x2)=3, log10(x3)=4
# x1:100, x2:1000, x3:10000
np.logspace(2,4,3)

# 2, 2.5, 3
# log10(x1)=2, log10(x2)=2.5, log10(x3)=3
# x1:10**2, x2:10**2.5, x3:10**3
np.logspace(2,3,3)

#### random
- seed : 랜덤값을 결정해주는 값입니다.
- rand : uniform(균등분포)하게 랜덤값을 뽑아줍니다. (뽑히는 숫자의 횟수가 균등분포 : 1을 20개, 2를 20개, 3을 20개....)
- randn : gaussian(정규분포)로 랜덤값을 뽑아줍니다. (뽑히는 숫자의 횟수가 정규분포)
- randint : 정수를 랜덤하게 뽑아줍니다.
- shuffle : 섞어주는 함수
- choice : 여러개에서 선택해주는 함수 입니다.

np.random.seed(0)
rd = np.random.rand(10)
rd

rd = np.random.rand(2,5)
rd

np.random.seed(1) # seed를 바꿔야 값이 바뀜.
rd = np.random.rand(10)
rd

rdn = np.random.randn(2,5)
rdn

# randint
np.random.randint(3) # 3보다 작은 정수 랜덤추출
np.random.randint(3,10) # 3~9까지의 수

np.random.randint(5, 11, (3,3))

data = np.random.randint(5, size=(3,3)) # size 안써주면 에러남
data

# shuffle로 데이터 순서를 바꿀 수 있습니다.
np.random.shuffle(data)
data

# choice
np.random.choice(5, 10, p=[0.1, 0, 0.3, 0.6 ,0]) #0: 10%, 1: 0%, 2: 30%, 3: 60%, 4: 0% 확률로 추출

# unique
data
index, count = np.unique(data, return_counts=True)

print(index)
print(count)

#### stack
- 행렬을 쌓는 것처럼 합치는 방법(두 행렬의 행을 하나씩 교차로 쌓는다)
- axis가 증가하면 차원이 안으로 들어감
    - 예를 들면 (2,3,4) 3차원 행렬이 있다고 한다면
    - axis=0 -> 2에 해당하는 부분들을 교차로 쌓음
    - axis=1 -> 3에 해당하는 부분들을 교차로 쌓음
    - axis=2 or -1 -> 4에 해당하는 부분들을 교차로 쌓음

na1 = np.arange(6)
na2 = np.arange(6,12)
print(na1)
print(na2)

# axis가 0이면 가로로 쌓습니다.
# axis가 0이 아니면 세로로 쌓습니다.
na3 = np.stack((na1,na2), axis=0) # axis : 축
print(na3)

na4 = np.stack((na1,na2), axis=1)
print(na4)

na1 = np.random.randint(10, size=(2,3))
na2 = np.random.randint(10, size=(2,3))
print(na1)
print(na2)

# axis가 0이면 가로로 쌓습니다.
na3 = np.stack((na1,na2))
na3

na4 = np.stack((na1,na2), axis=1)
print(na4)

# vstack
# [0,1,2], [1,2,3], [2,3,4], [3,4,5], [4,5,6]
ls = []
for idx in range(5):
    ls.append(range(7)[idx:idx+3])
ls

np.vstack(ls)

# hstack
np.hstack(ls)

# 묶어줘야할땐 list comprehension 사용해야함
ls = [list(range(7)[idx:idx+3]) for idx in range(5)]
ls

np.arange(5)[1:,np.newaxis]

#### concatenate 결합
- 가로결합 : 행의 갯수가 같아야 함.
- 세로결합 : 열의 갯수가 같아야 함.

r1 = np.random.randint(10, size=(2,3))
r1

r2 = np.random.randint(10, size=(3,2))
r2

r3 = np.random.randint(10, size=(3,3))
r3

np.concatenate([r1,r3])

np.concatenate([r2,r3], axis=1)

#### split

r = np.arange(10)
r

r1 = np.split(r, [5])

r2 = np.split(r, [2,4,6,8])

# vsplit - 행렬을 수평으로 나눠줍니다.(그냥 split과 같은 개념)

r = np.random.randint(10, size=(4,6))
r

r1, r2, r3 = np.vsplit(r, [2,3])
r1, r2, r3

# hsplit - 행렬을 수직으로 나눠줍니다.

r1, r2 = np.hsplit(r, [2])
r1, r2

#### sort

r1 = np.random.randint(10, size=(3,3))
r1

r1.sort() # 가로 sorting
r1

r1.sort(axis=0) # 세로 sorting
r1

np.c_[np.array([1,2,3]), np.array([4,5,6])]

np.r_[np.array([1,2,3]), np.array([4,5,6])]
