## Bernoulli Distribution

**결과가 1 또는 0 과 같이 두 가지의 경우로 나오는 것을 Bernoulli trial이라 한다.**

```python

# 베르누이 분포

# theta = 0.5인 경우
theta = 0.5
rv = sp.stats.bernoulli(theta)

xx = [0, 1]
plt.bar(xx, rv.pmf(xx))
plt.xlim(-1, 2)
plt.ylim(0, 1)
plt.xticks([0, 1], ["x=0", "x=1"])
plt.xlabel("sample value")
plt.ylabel("P(x)")
plt.title("bern RV pmf")
plt.show()

rv.pdf

xx = np.linspace(0.99, 1.01, 100)
pdf = rv.pdf(xx)
plt.plot(xx, pdf)
plt.show()

x = rv.rvs(10, random_state=0)
x

sns.countplot(x)
plt.title("bernoulli result")
plt.xlabel("sample value")
plt.show()

y = rv.rvs(1000, random_state=1)

sns.countplot(y)
plt.title("bernoulli result")
plt.xlabel("sample value")
plt.show()

theta = 0.9
rv = sp.stats.bernoulli(theta)

xx = [0, 1]
plt.bar(xx, rv.pmf(xx))
plt.xlim(-1, 2)
plt.ylim(0, 1)
plt.xticks([0, 1], ["x=0", "x=1"])
plt.xlabel("sample value")
plt.ylabel("P(x)")
plt.title("bern RV pmf")
plt.show()

x1 = rv.rvs(10, random_state=0)

sns.countplot(x1)
plt.title("bernoulli result")
plt.xlabel("sample value")
plt.show()

y1 = rv.rvs(1000, random_state=0)

sns.countplot(y1)
plt.title("bernoulli result")
plt.xlabel("sample value")
plt.show()

X = np.bincount(x, minlength=2) / float(len(x))

df = pd.DataFrame({"theory": rv.pmf(xx), "simulation": X})
df.index = [0, 1]
df

Y = np.bincount(y, minlength=2) / float(len(y))

df = pd.DataFrame({"theory": rv.pmf(xx), "simulation": Y})
df.index = [0, 1]
df

X1 = np.bincount(x, minlength=2) / float(len(x1))

df = pd.DataFrame({"theory": rv.pmf(xx), "simulation": X1})
df.index = [0, 1]
df
