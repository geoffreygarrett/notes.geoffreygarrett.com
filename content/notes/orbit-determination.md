---
title: "Orbit Determination and Parameter Estimation"
tags:
- [estimation-theory, orbital-mechanics]
---

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

$$
\begin{aligned}
    \textrm{where  }
        \bm{r}(t), \bm{v}(t) &= \text{the position and velocity of the spacecraft as a function of time,} \\
        \bm{p}               &= \text{the parameters describing the force models,} \\
        \bm{q}               &= \text{the parameters describing the measurement models.} \\
\end{aligned}
$$

The measurements made throughout the trajectory of the spacecraft at times
$t_1,...,t_n$ are described by $\bm{z}=[z_1,...,z_n]^T$, where each $z_i$ is
either defined as a function of the state of the spacecraft at time $t_i$, or
as a function of the state of the spacecraft at time $t_0$:

$$
\begin{equation}
    z_i(t_i) = g_i(t_i, \bm{x}(t_i))+\epsilon_i = h_i(t_i, \bm{x}_0)+\epsilon_i.
\end{equation}
$$

$$
\begin{aligned}
    \textrm{where  }
        z_i &= \text{the i}^{th}\text{ empirical measurement, assumed to be a random variable,} \\
        g_i &= \text{the i}^{th}\text{ model measurement as a function time and instantaneous state,} \\
        h_i &= \text{the i}^{th}\text{ model measurement as a function time and initial state,} \\
        \epsilon_i &= \text{the i}^{th}\text{ residual, accounting for measurement errors.} \\
\end{aligned}
$$

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
