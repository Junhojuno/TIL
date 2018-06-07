## Optimization

#### what is Optimization?

```python
## 1차원 목적함수 시각화
x1 = np.linspace(-1, 4, 100)
plt.plot(x1, f1(x1))
plt.plot(2, 2, 'ro', markersize=10)
plt.ylim(0,10)
plt.show()
```
![optimization1](/assets/optimization1_4uwchom9u.png)

```python
### 2차원 목적함수 시각화
def f2(x,y):
    return (1 - x)**2 + 100.0 * (y - x**2)**2

x1 = np.linspace(-4, 4, 800)
x2 = np.linspace(-3, 3, 600)
X1, X2 = np.meshgrid(x1,x2)

Z = f2(X1,X2)

plt.contour(X1, X2, Z, colors='k', levels=[0.4, 3, 15, 50, 150, 500,1500,5000, 15000])
plt.plot(1, 1, 'ro', markersize=10)

# plt.xlim(-4, 4)
# plt.ylim(-3, 3)
# plt.xticks(np.linspace(-4, 4, 9))
# plt.yticks(np.linspace(-3, 3, 7))
plt.show()

```
![optimization2](/assets/optimization2_km2tcn1fw.png)

### Steepest Gradient Descent
```python
# SGD 1차원
def f1d(x):
    return 2 * (x - 2.0)

x1 = np.linspace(-1, 4, 100)
plt.plot(x1, f1(x1), 'k-')

mu = 0.4

x = 0
plt.plot(x, f1(x), 'go', markersize=10)
plt.plot(x1, f1d(x) * (x1 - x) + f1(x), 'c--') # 접선의 방정식
print("x = {}, g = {}".format(x, f1d(x)))

x = x - mu*f1d(x)
plt.plot(x, f1(x), 'go', markersize=10)
plt.plot(x1, f1d(x) * (x1 - x) + f1(x), 'c--') # 접선의 방정식
print("x = {}, g = {}".format(x, f1d(x)))

x = x - mu*f1d(x)
plt.plot(x, f1(x), 'go', markersize=10)
plt.plot(x1, f1d(x) * (x1 - x) + f1(x), 'c--') # 접선의 방정식
print("x = {}, g = {}".format(x, f1d(x)))

x = x - mu*f1d(x)
plt.plot(x, f1(x), 'go', markersize=10)
plt.plot(x1, f1d(x) * (x1 - x) + f1(x), 'c--') # 접선의 방정식
print("x = {}, g = {}".format(x, f1d(x)))
```
x = 0, g = -4.0
x = 1.6, g = -0.7999999999999998
x = 1.92, g = -0.16000000000000014
x = 1.984, g = -0.03200000000000003
![optimization3](/assets/optimization3.png)

```python
# SGD 2차원
def f2g(x, y):
    return np.array((2.0 * (x - 1) - 400.0 * x * (y - x**2), 200.0 * (y - x**2)))

xx = np.linspace(-4, 4, 800)
yy = np.linspace(-3, 3, 600)
X, Y = np.meshgrid(xx, yy)
Z = f2(X, Y)

levels = np.logspace(-1, 3, 10)

plt.contourf(X, Y, Z, alpha=0.2, levels=levels)
plt.contour(X, Y, Z, colors="green", levels=levels, zorder=0)
plt.plot(1,1, 'ro', markersize=10)

mu = 8e-4

x, y = -1, -1 # 초기값 설정
for i in range(5):
    g = f2g(x,y)
    plt.arrow(x, y, -mu * g[0], -mu * g[1], head_width=0.04, head_length=0.04, fc='k', ec='k', lw=2)
    x = x - mu * g[0] # 다음 이동할 위치
    y = y - mu * g[1] # 다음 이동할 위치

plt.xlim(-3, 3)
plt.ylim(-2, 2)
plt.xticks(np.linspace(-3, 3, 7))
plt.yticks(np.linspace(-2, 2, 5))
plt.show()
```
![optimization4](/assets/optimization4.png)
접선과 수직인 원래의 방향과 정반대로 움직인다. ∵ gradient에 -가 붙었기 때문에

```python
xx = np.linspace(0, 4, 800)
yy = np.linspace(0, 3, 600)
X, Y = np.meshgrid(xx, yy)
Z = f2(X, Y)

levels = np.logspace(-1, 3, 10)

plt.contourf(X, Y, Z, alpha=0.2, levels=levels)
plt.contour(X, Y, Z, colors="green", levels=levels, zorder=0)
plt.plot(1,1, 'ro', markersize=10)

mu = 1.8e-3

x, y = 1.5, 1.5 # 초기값 설정
for i in range(15):
    g = f2g(x,y)
    plt.arrow(x, y, -mu * g[0], -mu * g[1], head_width=0.04, head_length=0.04, fc='k', ec='k', lw=2)
    x = x - mu * g[0]
    y = y - mu * g[1]

plt.xlim(0, 3)
plt.ylim(0, 2)
plt.xticks(np.linspace(0, 3, 4))
plt.yticks(np.linspace(0, 2, 3))
plt.show()
```
![optimization5](/assets/optimization5.png)
초기값을 위와 다르게 설정하면 지그재그가 형성이 안된다는...ㅠ
