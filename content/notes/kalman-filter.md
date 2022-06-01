---
title: "Kalman Filter"
tags:
- [estimation-theory]
---

## Linearised Kalman Filter

## Extended Kalman Filter

## Unscented Kalman Filter

$$
\begin{alignat}{2}
    L                   &= \text{dim}(\bm{x})                                              & \bm{x}\in{\mathbb{R}}^{L} \\
    \mathcal{X}_0       &= \bm{x}_i^-                                                      & k=1,...,L                 \\
    \mathcal{X}_k       &= \bm{x}_i^- + \bigg(\sqrt{(L+\lambda)\bm{P}_i^-}\bigg)_k         & k=1,...,L                 \\
    \mathcal{X}_k       &= \bm{x}_i^- + \bigg(\sqrt{(L+\lambda)\bm{P}_i^-}\bigg)_{k-L}     & k=L+1,...,2L              \\
    W_0^{(m)}           &= \lambda(L-\lambda)                                                                           \\
    W_0^{(m)}           &= \lambda(L-\lambda) + (1-\alpha^2 + \beta)                                                    \\
    W_k^{(m)}           &= W_k^{(c)} = 1/\{2(L+\lambda)\}                                  & k=1,...,2L                \\
\end{alignat}
$$

$$
\begin{alignat}{2}
    L                   &= \text{dim}(\bm{x})                                              && \bm{x}\in{\mathbb{R}}^{L} \\
    \mathcal{X}_0       &= \bm{x}_i^-                                                      && k=1,...,L                 \\
    \mathcal{X}_k       &= \bm{x}_i^- + \bigg(\sqrt{(L+\lambda)\bm{P}_i^-}\bigg)_k         && k=1,...,L                 \\
    \mathcal{X}_k       &= \bm{x}_i^- + \bigg(\sqrt{(L+\lambda)\bm{P}_i^-}\bigg)_{k-L}     && k=L+1,...,2L              \\
    W_0^{(m)}           &= \lambda(L-\lambda)                                                                           \\
    W_0^{(m)}           &= \lambda(L-\lambda) + (1-\alpha^2 + \beta)                                                    \\
    W_k^{(m)}           &= W_k^{(c)} = 1/\{2(L+\lambda)\}                                  && k=1,...,2L                \\
\end{alignat}
$$

$$
\begin{aligned}
    L                   &= \text{dim}(\bm{x})                                              && \bm{x}\in{\mathbb{R}}^{L} \\
    \mathcal{X}_0       &= \bm{x}_i^-                                                      && k=1,...,L                 \\
    \mathcal{X}_k       &= \bm{x}_i^- + \bigg(\sqrt{(L+\lambda)\bm{P}_i^-}\bigg)_k         && k=1,...,L                 \\
    \mathcal{X}_k       &= \bm{x}_i^- + \bigg(\sqrt{(L+\lambda)\bm{P}_i^-}\bigg)_{k-L}     && k=L+1,...,2L              \\
    W_0^{(m)}           &= \lambda(L-\lambda)                                                                           \\
    W_0^{(m)}           &= \lambda(L-\lambda) + (1-\alpha^2 + \beta)                                                    \\
    W_k^{(m)}           &= W_k^{(c)} = 1/\{2(L+\lambda)\}                                  && k=1,...,2L                \\
\end{aligned}
$$

$$
\begin{equation}
\begin{aligned}
    L                   &= \text{dim}(\bm{x})                                              && \bm{x}\in{\mathbb{R}}^{L} \\
    \mathcal{X}_0       &= \bm{x}_i^-                                                      && k=1,...,L                 \\
    \mathcal{X}_k       &= \bm{x}_i^- + \bigg(\sqrt{(L+\lambda)\bm{P}_i^-}\bigg)_k         && k=1,...,L                 \\
    \mathcal{X}_k       &= \bm{x}_i^- + \bigg(\sqrt{(L+\lambda)\bm{P}_i^-}\bigg)_{k-L}     && k=L+1,...,2L              \\
    W_0^{(m)}           &= \lambda(L-\lambda)                                                                           \\
    W_0^{(m)}           &= \lambda(L-\lambda) + (1-\alpha^2 + \beta)                                                    \\
    W_k^{(m)}           &= W_k^{(c)} = 1/\{2(L+\lambda)\}                                  && k=1,...,2L                \\
\end{aligned}
\end{equation}
$$