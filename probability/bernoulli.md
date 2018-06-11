## Bernoulli Distribution
- 결과가 1(성공) 또는 0(실패) 두 가지의 경우만 나오는 것을 bernoulli trial이라 합니다.
- 확률변수가 1,0 두 가지이기 때문에 pmf(확률질량함수)로 정의할 수 있다.
- 1이 나올 확률을 theta, 0이 나올 확률을 1-theta


```python
import sympy
```


```python
sympy.init_printing(use_latex='mathjax')
```

$$
Bern(x;θ)=θ(1+x)/2(1−θ)(1−x)/2
$$

##### in Scipy


```python
%matplotlib inline
```


```python
mpl.rcParams["font.family"]
```




    ['sans-serif']




```python
import matplotlib.font_manager as fm
font_location = "C:\\Windows\Fonts\malgunbd.ttf"
font_name = fm.FontProperties(fname=font_location).get_name()
mpl.rc("font", family=font_name)
```


```python
# p = 0.6 설정
theta = 0.6
rv = sp.stats.bernoulli(theta)
```


```python
rv.pmf(xx)
```




    array([0.4, 0.6])




```python
# pmf로 시각화 표현

xx = [0,1]
plt.bar(xx, rv.pmf(xx))
plt.xlim(-1, 2)
plt.ylim(0, 1)
plt.xticks([0, 1], ["x=0", "x=1"])
plt.xlabel("표본값")
plt.ylabel("P(x)")
plt.title("베르누이 확률변수의 pmf")
plt.show()
```


![bernoulli (1)](/assets/bernoulli%20(1).png)



```python
# rvs 메서드로 시뮬레이션 하기
x = rv.rvs(100, random_state=0)
x
```




    array([1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0,
           1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1,
           0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1,
           0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
           1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1])




```python
sns.countplot(x)
plt.title("베르누이 확률변수의 시뮬레이션 결과")
plt.xlabel("표본값")
plt.show()
```


![bernoulli (2)](/assets/bernoulli%20(2).png)



```python
# 이론적 확률 분포와 샘플 확률분포 동시비교1
y = np.bincount(x, minlength=2) / float(len(x))
y
```




    array([0.38, 0.62])




```python
df = pd.DataFrame({"이론상":rv.pmf(xx), "샘플링 시뮬레이션결과":y})
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>샘플링 시뮬레이션결과</th>
      <th>이론상</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0.38</td>
      <td>0.4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0.62</td>
      <td>0.6</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 이론적 확률 분포와 샘플 확률분포 동시비교2
df2 = df.stack().reset_index()
df2.columns = ["표본값","유형","비율"]
df2
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>표본값</th>
      <th>유형</th>
      <th>비율</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>샘플링 시뮬레이션결과</td>
      <td>0.38</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0</td>
      <td>이론상</td>
      <td>0.40</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>샘플링 시뮬레이션결과</td>
      <td>0.62</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>이론상</td>
      <td>0.60</td>
    </tr>
  </tbody>
</table>
</div>




```python
sns.barplot(x="표본값", y="비율", hue="유형", data=df2)
plt.show()
```


![bernoulli (3)](/assets/bernoulli%20(3).png)

### Bernoulli 의 특징값(모멘트)

**확률변수가 1 또는 0일때에 아래와 같이 나타남

- 기댓값
$$
E[X]=∑xiP(xi)=1⋅θ+0⋅(1−θ)=θ
$$

- 분산
$$
Var[X]=∑(xi−μ)2P(xi)=(1−θ)2⋅θ+(0−θ)2⋅(1−θ)=θ(1−θ)
$$
