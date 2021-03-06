## Joint & Conditional Probability

#### 1. 확률의 의미
 - **빈도주의 관점** : **"반복"** 을 통해 얻어진 경향을 확률로 본다.
 - **베이지안 관점** : 가설에 대한 **신뢰도** like 객관식 풀 때 선지배제하는 상황

#### 2. 확률의 성질(4가지)
```
1) P(Φ) = 0
2) P(A의 여집합) = 1 - P(A)
3) P(AUB) = P(A) + P(B) - P(AnB) ** 포함배제의 원리
4) 전체확률의 법칙
```

#### 3. Joint Probability(결합확률)
 - **P(AnB) = P(A,B)** ** P(A), P(B) : marginal probability(주변확률)

#### 4. Conditional Probability(조건부 확률)
```
고학번 12명, 새내기 8명 총 20명이 동아리 소모임 MT를 갔고,
이 날밤, 술을 왕창 먹고 누군가 이불위에 토사물을 뿌려놓은 상황이다.
'고학번이 범인이다.'라는 주장(가설)의 신뢰도는 P(A) = 0.6,
'긴머리를 한사람이 범인이다'라는 주장의 신뢰도는 P(B) = 0.5

이때 토사물 근처에서 긴 머리카락이 발견되었다면, 과연 '고학번이 범인이다.'라는 주장의 신뢰도는 어떻게 변화했을까?

즉, '머리카락이 길다'라는 정보가 추가되면서 P(B) = 1로 변했을 때 P(A)의 값을 구하는 게 '조건부 확률'이다
```
