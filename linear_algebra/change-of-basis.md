## Change of basis

([a1, a2]는 column vector를 의미한다.)

**i = [1,0], j = [0,1]** 를 basis로 같는 vector 'v' = [3,2]가 있다고 하자.
만약 basis를 **[2, 1], [-1, 1]** 로 바꾼다면  **v**는 어떻게 될까?

**결론부터 말하자면 새로 바뀐 basis를 행렬로 만든후 v를 곱해주면된다.**

---
#### Why?
 **1. linear transformation되었기 때문이다.**
    - v = 3i + 2j 의 linear combination으로 표현가능하다.
    - 여기서 coordinate(좌표값) : [3,2]는 linear transform되었기 때문에
    - 기저가 변하더라도 coordinate은 그대로다.

 **2. 예를 들면..**
    - '안녕'이라는 한국어를 영어로 번역한다고 생각해보자
    - '안녕'이라는 말이 영어로 어떻게 표기될까?
    - 이때 번역된 'Hi'가 영어라는 새로운 basis의 안녕에 대한 좌표가 되고,
    - '안녕'이라는 의미는 coordinate이 된다.(한국어는 기존 basis!!)

---
#### Code in python
```python
# basis & coordinate(input vector)
e1 = np.array([1,0])
e2 = np.array([0,1])
a = np.array([3,2])

# [g1, g2] : transformation Matrix
# b : output vector
g1 = np.array([2, 1])
g2 = np.array([-1, 1])
b = np.dot(np.array([g1,g2]).T, a)

# arrow
plt.annotate('', xy=e1, xytext=(0, 0), arrowprops=dict(facecolor='lightgreen'))
plt.annotate('', xy=e2, xytext=(0, 0), arrowprops=dict(facecolor='lightgreen'))
plt.annotate('', xy=a, xytext=(0, 0), arrowprops=dict(facecolor='lightgray'))
plt.annotate('', xy=g1, xytext=(0, 0), arrowprops=dict(facecolor='green'))
plt.annotate('', xy=g2, xytext=(0, 0), arrowprops=dict(facecolor='green'))
plt.annotate('', xy=b, xytext=(0, 0), arrowprops=dict(facecolor='gray'))



plt.text(1.5, 1.3, "$a$", fontdict={"size": 18})
plt.text(-0.3, 0.5, "$e_2$", fontdict={"size": 18})
plt.text(0.5, -0.2, "$e_1$", fontdict={"size": 18})
plt.text(0.2, 0.5, "$g_1$", fontdict={"size": 18})
plt.text(-0.6, 0.2, "$g_2$", fontdict={"size": 18})
plt.text(1.2, 0.3, "$b$", fontdict={"size": 18})



plt.xticks(np.arange(-2, 4))
plt.yticks(np.arange(-1, 4))
plt.xlim(-1.5, 3.5)
plt.ylim(-0.5, 3)
plt.show()
```
### Visualization
![change_basis](/assets/change_basis.png)

##### by Juno
---
## Reference
- [Change of Basis](https://youtu.be/P2LTAUO1TdA)
