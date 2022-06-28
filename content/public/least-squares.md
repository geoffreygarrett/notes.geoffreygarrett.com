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

- **Linearity in parameters**: The system model is _linear in
  parameters_, that is, $\mathbf{z} = \mathbf{A}\mathbf{\beta}+\mathbf{\epsilon}$.
- **Strict exogenity**: The errors in the regression are should have conditional mean
  zero, that is, $\mathbb{E}[\mathbf{\epsilon}|\mathbf{A}] = \mathbf{0}$.

{{< svg src="/public/images/OLS-geometric-interpretation.svg" caption="Geometric interpretation of Ordinary Least Squares (OLS)." >}}

![[/public/images/OLS-geometric-interpretation.svg]]

## Weighted Least Squares

The Weighted Least Squares (WLS) method is an application of the
Generalised Least Squares (GLS) algorithm, which aims at
estimating unknown parameters ($\mathbf{\beta}$) in a linear regression model, given a
set of observations ($\mathbf{z}$), where there is a certain degree of correlation
($\mathbf{W}$) between the residuals ($\mathbf{\epsilon}$) in the regression model. It
is usually written as:

$$
\begin{equation}
    \begin{aligned}
        \mathbf{z} &= \mathbf{A}\mathbf{\beta}+\mathbf{\epsilon}, \\
        \mathbb{E}[\mathbf{\epsilon}|\mathbf{A}] &= \mathbf{0}, \\
        \text{Cov}(\mathbf{\epsilon}|\mathbf{A}) &= \mathbf{W}. \\
    \end{aligned}
\end{equation}
$$

The residual vector is defined as $\rho=\mathbf{z}-\mathbf{A}\mathbf{\beta}$. The Weighted
Least Squares estimate ($\mathbf{\hat{\beta}}$) is unbiased, consistent and
efficient, and obtained through minimising $\mathbf{\rho}^T\mathbf{W}^{-1}\mathbf{\rho}$. The
estimate is given, without derivation, by:

$$
\begin{equation}
    \begin{aligned}
        \mathbf{\hat{\beta}} &= (\mathbf{A}^T\mathbf{W}^{-1}\mathbf{A})^{-1}\mathbf{A}^T\mathbf{W}^{-1}\mathbf{z}, \\
        \mathbb{E}[\mathbf{\hat{\beta}}] &= \mathbf{\beta}, \\
        \text{Cov}[\mathbf{\hat{\beta}}|\mathbf{A}] &= (\mathbf{A}^T\mathbf{W}^{-1}\mathbf{A})^{-1}. \\
    \end{aligned}
\end{equation}
$$

## Generalised Least Squares

GLS was first described by Alexander Aitken in 1936. \[[1](https://en.wikipedia.org/wiki/Generalized_least_squares#cite_note-1)\]

## Non-linear Least Squares

The problem arises when considering the highly non-linear modelled measurements
$\mathbf{h}(\mathbf{x}_0)$ cannot be described by the linear relation above. For this
reason, the model is linearized by approximation to a first-order Taylor
polynomial expansion about $\mathbf{x}_0^k$, where $k$ is an iteration number:

$$
\begin{equation}
    \begin{aligned}
        \mathbf{z}                              &=        \mathbf{f}(\mathbf{\beta}) + \mathbf{\epsilon}                                                              \\
        \mathbf{f}(\mathbf{\beta}+\Delta\mathbf{\beta}) &\approx  \mathbf{f}(\mathbf{\beta}) + \frac{\partial{\mathbf{f}(\mathbf{\beta})}}{\partial{\mathbf{\beta}}}\Delta\mathbf{\beta}  \\
    \end{aligned}
\end{equation}
$$
