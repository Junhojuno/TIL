## Optimization with Scipy

```python
def f1(x):
    return (x - 2) ** 2 + 2

# jacobian, hessian function을 컴퓨터가 알아서 찾아 적용하는 경우
x0 = 0
result = sp.optimize.minimize(f1, x0)
print(result)
```
<결과>
fun: 2.0
hess_inv: array([[0.5]])
jac: array([0.])
message: 'Optimization terminated successfully.'
nfev: 9
nit: 2
njev: 3
status: 0
success: True
x: array([1.99999999]) ```This is an argminf1(x)```

```python
# jacobian function을 넣는다면?
def f1p(x):
    return 2 * x - 4

result = sp.optimize.minimize(f1, x0, jac=f1p)
print(result)
```
<결과>
fun: 2.0
hess_inv: array([[0.5]])
jac: array([0.])
message: 'Optimization terminated successfully.'
nfev: 3 ```# nfev : 목적함수 호출 횟수 -- 감소하였다. ```
nit: 2
njev: 3
status: 0
success: True
x: array([2.]) ```This is an argminf1(x)```

```python
# 2차원에서 no jacobian
def f2(x):
    return (1 - x[0])**2 + 100 * (x[1] - x[0]**2)**2

x0 = (-2,2)
result = sp.optimize.minimize(f2, x0)
print(result)
```
<결과>
fun: 1.8096950583467382e-11
hess_inv: array([[0.48099418, 0.95986354],
 [0.95986354, 1.92024898]])
jac: array([-9.39709885e-06,  4.92575634e-06])
message: 'Optimization terminated successfully.'
nfev: 168
nit: 35
njev: 42
status: 0
success: True
x: array([0.99999575, 0.99999152]) ```This is an argminf2(x)```

```python
# 2차원에서 with jacobian
def f2g(x):
    """gradient of f2(x)"""
    return np.array((2.0 * (x[0] - 1) - 400.0 * x[0] * (x[1] - x[0]**2), 200.0 \
                     * (x[1] - x[0]**2)))

x0 = (-2,2)
result = sp.optimize.minimize(f2, x0, jac=f2g)
print(result)
```
<결과>
fun: 9.817296647123749e-14
hess_inv: array([[0.48098005, 0.95985458],
 [0.95985458, 1.92027267]])
jac: array([-8.75835534e-06,  4.59236316e-06])
message: 'Optimization terminated successfully.'
nfev: 42 ```1/4로 줄어들었다.```
nit: 35
njev: 42
status: 0
success: True
x: array([1.00000021, 1.00000045]) ```This is an argminf2(x)```
