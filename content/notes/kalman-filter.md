---
title: "Kalman Filter"
tags:
- [estimation-theory]
---

## Linearised Kalman filter

## Extended Kalman filter

- Non-linear filter
- [Hidden Markov model](notes/markov-models.md#hidden-markov-model)

## Unscented Kalman filter

- Non-linear filter

$$
\begin{equation}
    \begin{aligned}
        L                   &= \text{dim}(\hat{\bm{x}})                                                      && \bm{x}\in{\mathbb{R}}^{L} \\
        \mathcal{X}_0       &= \hat{\bm{x}} _{i-1}^{+}                                                                                     \\
        \mathcal{X}_j       &= \hat{\bm{x}} _{i-1}^{+} + \sqrt{(L+\lambda)} \bm{A}_j                         && j=1,...,L                 \\
        \mathcal{X} _{L+j}  &= \hat{\bm{x}} _{i-1}^{+} - \sqrt{(L+\lambda)} \bm{A}_j                         && j=1,...,L                 \\
        W_0^{(m)}           &= \lambda(L-\lambda)                                                                                         \\
        W_0^{(c)}           &= \lambda(L-\lambda) + (1-\alpha^2 + \beta)                                                                  \\
        W_k^{(m)}           &= W_k^{(c)} = 1/\{2(L+\lambda)\}                                                && j=1,...,2L                \\
    \end{aligned}
\end{equation}
$$

$$
\begin{aligned}
\text{where  }
    \lambda &= \alpha^2(L+\kappa)-L,\text{ a scaling parameter,} \\
    \alpha  &= \text{parameter determining spread of sigma points about }\hat{\bm{x}}\text{,} \\
    \kappa  &= \text{secondary scaling parameter, usually set to }0, \\
    \beta   &= \text{ parameter for incorporation of prior knowledge of }p(\hat{\bm{x}}).\\
\end{aligned}
$$

{{< svg src="/notes/images/sigma-points-wan.svg" caption="Visual representation of sigma points, $\mathcal{X}_j$, using Wan and van der Merwe's proposed parametrisation. $\kappa=0$, $\alpha=1$" >}}

[comment]: <> ({{< figure src="/notes/images/sigma-points-wan.svg" caption="Visual representation of sigma points, $\mathcal{X}_j$, using Wan and van der Merwe's proposed method." >}})


## Discriminative Kalman filter

- Non-linear filter

## Inspiration for distillation

- [How a Kalman filter works, in pictures](http://www.bzarg.com/p/how-a-kalman-filter-works-in-pictures/)

