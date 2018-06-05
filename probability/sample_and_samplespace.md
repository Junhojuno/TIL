## Sample & SampleSpace

#### 1. 확률은 함수다.
```
확률은 함수다.
* input: 사건(Event) ---> output: 숫자(확률값)

확률 표본(Sample), 표본공간(SampleSpace), 사건(Event, Ω의 부분집합)
```

#### 2. Kolmogorov's Axioms
```
1) P(A) ∈ R, P(A) ≥ 0
2) P(Ω) = 1
3) if AnB = Φ, P(AUB) = P(A) + P(B) # 단순사건이 대표적인 예
```

#### 3. 확률은 표본이 아닌 사건을 input으로 가지는 function이다.
```
주사위 던지는 행동을 예로 들면,
P(1) = 1/6 (X) ---> P({1}) = 1/6
```

#### 4. 추가적인 정보가 없다면, Fair한 경우로 본다.
```
Sample의 갯수가 유한하다면,
각 사건의 확률 P(A) = card(A) / card(Ω)

위에서 말했듯, 단순사건은 교집합이 없고, 이때 각 단순사건의 확률을 알면
모든 사건의 확률값을 계산할 수 있다.
ex) 주사위 각 눈의 확률값은 1/6, P({1,2}) = 1/6 + 1/6 = 1/3

이것을 함수로 표현하면 probability Mass Function(확률질량함수)!!
```

#### 5. Sample의 갯수가 무한하다면?
```
분침이 딱딱 끊어서 움직이는 경우(discrete한 경우)에는 시계의 시침과 분침의 각도 Sample수는 유한하다.

하지만, 연속적으로 움직인다면 소수점이하로 무한하게 표현이 가능하기 때문에 Sample수는 무한하다.
이때 P({각도 = 0도}) = card(0)/card(Ω) = 1 / ∞ = 0 이 된다.

즉, 단순사건에 대한 확률값은 0이 된다.

P({0<각도<30})라면 어떨까?
30도씩 구간이 쪼개진다는 것외에는 정보가 없기 때문에 30도마다의 확률값은 Fair한 경우로 본다.(P({0<각도<30}) = 1/12)
```