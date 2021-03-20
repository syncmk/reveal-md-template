## 数式表示サンプル

### マルコフ (Markov) の不等式</h4>
任意の $X$ と $a \gt 0$ に対して $E[|X|]$ が成立とき、次式が成立する。
$$P (|X| \ge a) \le \dfrac{E[|X|]}{a} \tag{1}$$

---

### チェビシェフ (Chebyshev) の不等式

裾の重い分布でなければ、次の式が成立する。
$$P (|X - E[X]| \ge \epsilon ) \le \dfrac{V[X]}{\epsilon^2} \tag{2}$$

---

<!-- .slide: data-background="#333333" -->
### 確率収束

### 大数の法則
<!-- .element: class="fragment" -->

大数の法則の証明するため、弱法則と大法則について順を追って説明する。
<!-- .element: class="fragment" -->

---

#### 大数の弱法則

期待値 $\mu$、分散 $\sigma^2$ の分布に従う互いに独立な確率変数
$X_1, X_2, \cdots, X_n$ について $S_n = X_1, X_2, \cdots, X_n$と書くとき、
任意の $\epsilon \gt 0$ に対して、次の式が成立する。
<!-- .element: class="fragment" data-fragment-index="1" -->

$$\lim_{n \to \infty} P \left(\left| \dfrac{S_n}{n} - \mu\right| \ge \epsilon\right) = 0 \tag{3}$$
<!-- .element: class="fragment" -->

標本を繰り返すと標本平均と真の平均（母集団の平均）が $\epsilon$ 以上になってしまう確率は試行回数 $n$を
増やすと0に確率収束する。
<!-- .element: class="fragment" -->

---

#### 大数の弱法則 1

$$P(|S_n - nm | \gt n \epsilon)
 \le \dfrac{E[|S_n - nm|^2]}{n^2 \epsilon^2}
 = \dfrac{V(S_n)}{n^2 \epsilon^2} \tag{4}$$

$$V(S_n)
 = \sum_{j=1}^{n} \sum_{k=1}^{n}{E[(X_j - m)(X_k - m)]}
 = \sum_{j=1}^{n}{V(X_j)} = n \sigma^2$$

$$P(|\dfrac{S_n}{n} − m| \gt \epsilon)
 = P(|S_n − nm| \gt n\epsilon)
 \le \dfrac{\sigma^2}{n\epsilon2}$$

---

#### 大数の強法則

期待値 $\mu$、分散 $\sigma^2$ の分布に従う互いに独立な確率変数
$X_1, X_2, \cdots, X_n$ について $S_n = X_1, X_2, \cdots, X_n$と書くとき、
次の式が成立する。
<!-- .element: class="fragment" data-fragment-index="1" -->

$$\dfrac{S_n}{n} \to \mu \left(n \to \infty \right) \mathrm{a.s.} \tag{4}$$
<!-- .element: class="fragment" -->

----

#### 大数の強法則 1

$$\sum_{n=1}^{\infty}{\dfrac{\sigma_n^2}{n^2}} \lt \infty$$

$\lbrace{X_n\rbrace}_{n=1}^{\infty}$が独立な確率変数列で、期待値 $0$ 、分散 $\sigma_n^2 \lt \infty$

---

``` cpp:main.cpp [1|3|5,6|]
#include <iostream>

int main(int argc, char *argv[])
{
    std::cout << "Hello, world." << std::endl;
    return 0;
}
```


---

## Markdown support Python コード

``` python [1|2-3|]
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('data.csv')
res = df.groupby(by='key').mean()
res.to_csv('out.csv')
```
