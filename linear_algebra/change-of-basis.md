### <i class="fa fa-puzzle-piece" aria-hidden="true"></i> : Change of Basis

basis vector(기저벡터), basis를 바꾼다?


---
([a1, a2]는 column vector를 의미한다.)

**i = [1,0], j = [0,1]** 를 basis로 같는 vector 'v' = [3,2]가 있다고 하자.
만약 basis를 **[2, 1], [-1, 1]** 로 바꾼다면  **v**는 어떻게 될까?

**결론부터 말하자면 새로 바뀐 basis를 행렬로 만든후 v를 곱해주면된다.**

---
##### Why?
 **1. linear transformation되었기 때문이다.**
    - v = 3i + 2j 의 linear combination으로 표현가능하다.
    - 여기서 coordinate(좌표값) : [3,2]는 선형변환되었기 때문에
    - 기저가 변하더라도 coordinate은 그대로다.

 **2. 예를 들면..**
    - '안녕'이라는 한국어를 영어로 번역한다고 생각해보자
    - '안녕'이라는 말이 영어로 어떻게 표기될까?
    - 이때 번역된 'Hi'가 영어라는 새로운 basis의 안녕에 대한 좌표가 되고,
    - '안녕'이라는 의미는 coordinate이 된다.(한국어는 기존 basis!!)

---
#### Code in python
- (코드 표현)

---
## Reference
- [Change of Basis](https://youtu.be/P2LTAUO1TdA)
