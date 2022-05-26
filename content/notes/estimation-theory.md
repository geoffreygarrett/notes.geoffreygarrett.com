---
title: "Estimation Theory"
tags:
- [estimation-theory]
---

# Estimation Theory

## Algorithms

### Weighted Least-Squares Estimation

The Weighted Least-Squares Estimation method is an application of the
Generalized Least-Squares (GLS) algorithm~\cite{Aitken1936}, which aims at
estimating unknown parameters ($\bm{\beta}$) in a linear regression model, given a
set of observations ($\bm{z}$), where there is a certain degree of correlation
($\bm{W}$) between the residuals ($\bm{\epsilon}$) in the regression model. It
is usually written as:

$$
\begin{equation}
    \bm{z}=\bm{A}\bm{\beta}+\bm{\epsilon}, \mathbb{E}[\bm{\epsilon}|\bm{A}]=\bm{0}, \text{Cov}(\bm{\epsilon}|\bm{A})=\bm{W}.
\end{equation}
$$

The residual vector is defined as $\rho=\bm{z}-\bm{A}\bm{\beta}$. The Weighted
Least-Squares estimate ($\bm{\hat{\beta}}$) is unbiased, consistent and
efficient, and obtained through minimising $\bm{rho}^T\bm{W}^{-1}\bm{rho}$. The
estimate is given, without derivation, by:

$$
\begin{equation}
    \bm{\hat{\beta}} = (\bm{A}^T\bm{W}^{-1}\bm{A})^{-1}\bm{A}^T\bm{W}^{-1}\bm{z},
\end{equation}
$$

$\mathbb{E}[\bm{\hat{\beta}}]=\bm{\beta}$, $\text{Cov}[\bm{\hat{\beta}}|\bm{A}] 
= (\bm{A}^T\bm{W}^{-1}\bm{A})^{-1}$.

where $\bm{\hat{\beta}}$ is an unbiased estimator 
$\mathbb{E}[\bm{\hat{\beta}}]=\bm{\beta}$

### Non-linear Weighted Least-Squares Estimation

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

## Applications

### Orbit Determination and Parameter Estimation

Predicting the state ($\bm{x}_t$) of a spacecraft given an initial condition
($\bm{x}_0$), and models which form the equations of motion of the satellite,
($\dot{\bm{x}}=f(t,\bm{x})$), is a straightforward task involving the solution
of an initial value problem (IVP) in the form of an ordinary differential
equation (ODE). However the inverse problem  is more involved, that is, given a
set of measurements ($\bm{z}$) resulting from the dynamical system, we would
like to estimate the trajectory of the satellite and the parameters describing
the dynamical models, described mathematically as:

$$
\begin{equation}
    \bm{x}(t) =
    \begin{bmatrix}
        \bm{r}(t) \\
        \bm{v}(t) \\
        \bm{p} \\
        \bm{q} \\
    \end{bmatrix},
\end{equation}
$$

| Symbol                 | Description                                                       |
|------------------------|-------------------------------------------------------------------|
| $\bm{r}(t), \bm{v}(t)$ | the position and velocity of the spacecraft as a function of time |
| $\bm{p}$               | the parameters describing the force models                        |
| $\bm{q}$               | the parameters describing the measurement models                  |

The measurements made throughout the trajectory of the spacecraft at times
$t_1,...,t_n$ are described by $\bm{z}=[z_1,...,z_n]^T$, where each $z_i$ is
either defined as a function of the state of the spacecraft at time $t_i$, or
as a function of the state of the spacecraft at time $t_0$:

$$
\begin{equation}
    z_i(t_i) = g_i(t_i, \bm{x}(t_i))+\epsilon_i = h_i(t_i, \bm{x}_0)+\epsilon_i.
\end{equation}
$$

| Symbol       | Description                                                               |
|--------------|---------------------------------------------------------------------------|
| $z_i$        | the i$^{th}$ empirical measurement, assumed to be a random variable       |
| $g_i$        | the i$^{th}$ model measurement as a function time and instantaneous state |
| $h_i$        | the i$^{th}$ model measurement as a function time and initial state       |
| $\epsilon_i$ | the i$^{th}$ residual, accounting for measurement errors                  |

The expressions of $h_i$ and $g_i$ can be used interchangeably in the
measurement model predictions, to account for the fact that the measurements are
often made at different times than the respective instantaneous states of the
spacecraft. This is done using variational equations, which are simulated to
obtain the state transition matrix $\bm{\Phi}(t_0, t)$ of the spacecraft, which
may be interpolated for any arbitrary time within the temporal bounds of the ODE
solution across $t_i\in[t_0, t_f]$, so that one may
relate an empirical $z_i$ at $\bm{x}(t_i)$ to $\bm{x}_0$ through $\bm{\Phi}(t_0,
t_i)^{-1}\bm{x}_0$. This effectively constrains the trajectory to the designed m
IVP dynamical solution. Consequentially, the measurements concisely:

$$
\begin{equation}
    \bm{z} = \bm{h}(\bm{x}_0) + \bm{\epsilon}.
\end{equation}
$$
