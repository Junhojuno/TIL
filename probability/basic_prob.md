## Basic probability


#### 1 .집합(Set)
```
-집합은 mutable(변경가능)/immutable(변경불가)에 따라 set과 frozenset으로 나뉜다.
-frozenset은 hashable하여 Dict타입에서 key로 사용가능하다.(set은 불가)
-집합의 크기는 cardinality라고 하며, python에서 len()를 의미한다.
-A∪B는 A|B 또는 A.union(B)로 표현가능하다.
-A∩B는 A&B 또는 A.intersection(B)로 표현가능하다.
-A-B는 A-B 또는 A.difference(B)로 표현가능하다.
```

#### 2. 부분집합(Subset)
```
-집합 A는 자기자신의 부분집합이다.
-자기자신을 제외한 부분집합은 진부분집합(proper subset)이다.
```

#### 3. 분배법칙
```
A∪(B∩C) = (AUB)∩(AUC)
A∩(BUC) = (A∩B)U(A∩C)
