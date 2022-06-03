---
title: "Linear Algebra"
tags:
- mathematics
---

## Definitions

### (System of) Linear Equation(s)

A system of linear equations may be represented as the matrix equation:

$$
\bm{A}\bm{x} = \bm{b},
$$

and is equivalent to the following systems of linear equations:

$$
\begin{aligned} 
    a_{1,1}x_{1} + a_{1,2}x_{2} + &\cdots + a_{1,n}x_{n} = b_{1} \\
                                  &\ \ \vdots                    \\
    a_{m,1}x_{1} + a_{m,2}x_{2} + &\cdots + a_{m,n}x_{n} = b_{m} 
\end{aligned}
$$

## Matrix Decomposition

- [Cholesky Decomposition](notes/cholesky-decomposition.md)
- [Singular Value Decomposition](notes/singular-value-decomposition.md)

## Definitions

- A symmetric matrix $\bm{A}\n\mathbb{R}^{n\times{n}}$ is positive semidefinite if:

$$
\bm{x}^T\bm{A}\bm{x}\geq 0 \forall\,\bm{x} \in\mathbb{R}^n.
$$

- A symmetric matrix $\bm{A}\n\mathbb{R}^{n\times{n}}$ is positive definite if:

$$
\bm{x}^T\bm{A}\bm{x}> 0 \forall\,\bm{x}\neq 0 \in\mathbb{R}^n.
$$