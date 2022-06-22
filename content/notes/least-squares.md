---
title: "Least Squares"
comments: true
tags:
- estimation-theory
- linear-algebra
- 🌱
---

The least-squares method, a method of solving overdetermined sets of linear
equations, was officially discovered and published by Adrien-Marie Legendre in
their work _"Nouvelles methodes pour la determination des orbites des cometes"_,
published in 1805.

```bibtex {linenos=false}
@Book{Legendre1805,
    author = {Legendre, A. M.},
    title = {Nouvelles methodes pour la determination des orbites des cometes [microform] / par A.M. Legendre},
    publisher = {F. Didot Paris},
    pages = {viii, 80 p., [1] leaf of plates :},
    year = {1805},
    type = {Book, Microform},
    language = {French},
    subjects = {Comets -- Orbits.},
    life-dates = {1970 - 1805},
    catalogue-url = {https://nla.gov.au/nla.cat-vn866184},
}
```

## Ordinary Least Squares

Ordinary Least Squares (OLS)

$$
\begin{equation}
    {\hat {\beta }}={\rm {arg}}\min _{\beta }\,\lVert z-X\beta \rVert,
\end{equation}
$$

- [[Linear Algebra|test]]
- [[Linear Algebra]]

- **Linearity in parameters**: The system model is _linear in
  parameters_, that is, [[Linear Algebra#(System of) Linear Equation(s)|$\bm{z} = \bm{A}\bm{\beta}+\bm{\epsilon}$]].
- **Strict exogenity**: The errors in the regression are should have conditional mean
  zero, that is, $\mathbb{E}[\bm{\epsilon}|\bm{A}] = \bm{0}$.

{{< svg src="/notes/images/OLS-geometric-interpretation.svg" caption="Geometric interpretation of Ordinary Least Squares (OLS)." >}}

## Weighted Least Squares

The Weighted Least Squares (WLS) method is an application of the
Generalised Least Squares (GLS) algorithm, which aims at
estimating unknown parameters ($\bm{\beta}$) in a linear regression model, given a
set of observations ($\bm{z}$), where there is a certain degree of correlation
($\bm{W}$) between the residuals ($\bm{\epsilon}$) in the regression model. It
is usually written as:

$$
\begin{equation}
    \begin{aligned}
        \bm{z} &= \bm{A}\bm{\beta}+\bm{\epsilon}, \\
        \mathbb{E}[\bm{\epsilon}|\bm{A}] &= \bm{0}, \\
        \text{Cov}(\bm{\epsilon}|\bm{A}) &= \bm{W}. \\
    \end{aligned}
\end{equation}
$$

The residual vector is defined as $\rho=\bm{z}-\bm{A}\bm{\beta}$. The Weighted
Least Squares estimate ($\bm{\hat{\beta}}$) is unbiased, consistent and
efficient, and obtained through minimising $\bm{\rho}^T\bm{W}^{-1}\bm{\rho}$. The
estimate is given, without derivation, by:

$$
\begin{equation}
    \begin{aligned}
        \bm{\hat{\beta}} &= (\bm{A}^T\bm{W}^{-1}\bm{A})^{-1}\bm{A}^T\bm{W}^{-1}\bm{z}, \\
        \mathbb{E}[\bm{\hat{\beta}}] &= \bm{\beta}, \\
        \text{Cov}[\bm{\hat{\beta}}|\bm{A}] &= (\bm{A}^T\bm{W}^{-1}\bm{A})^{-1}. \\
    \end{aligned}
\end{equation}
$$

## Generalised Least Squares

GLS was first described by Alexander Aitken in 1936. \[[1](https://en.wikipedia.org/wiki/Generalized_least_squares#cite_note-1)\]

## Non-linear Least Squares

The problem arises when considering the highly non-linear modelled measurements
$\bm{h}(\bm{x}_0)$ cannot be described by the linear relation above. For this
reason, the model is linearized by approximation to a first-order Taylor
polynomial expansion about $\bm{x}_0^k$, where $k$ is an iteration number:

$$
\begin{equation}
    \begin{aligned}
        \bm{z}                              &=        \bm{f}(\bm{\beta}) + \bm{\epsilon}                                                              \\
        \bm{f}(\bm{\beta}+\Delta\bm{\beta}) &\approx  \bm{f}(\bm{\beta}) + \frac{\partial{\bm{f}(\bm{\beta})}}{\partial{\bm{\beta}}}\Delta\bm{\beta}  \\
    \end{aligned}
\end{equation}
$$
