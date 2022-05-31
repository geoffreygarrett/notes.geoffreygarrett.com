---
title: "Information Theory"
tags:
- [information-theory]
---

## Self-information (information content)

The self-information (a.k.a. _information content_, _surprisal_,
or _Shannon information_) is a quantity used in information theory which
is derived from the probability of a certain event occurring from a random
variable. The self-information was defined by Claude Shannon such that
the following axioms were met:

- An event that is 100% probable is perfectly unsurprising and
  therefore yields no information content.
- The less probable an event is, the more surprising, and therefore the
  more information it yields.
- The total information of independently measured events, is the
  sum of their respective self-information.

$$
\begin{equation}
    I(x):=-\log_b(p(x))
\end{equation}
$$

## Entropy (average information)

$$
\begin{equation}
    H(x)=\mathbb{E}[I(x)]
\end{equation}
$$

## Kullback-Leibler divergence (information gain)

The Kullback-Leibler divergence (a.k.a. _relative entropy_ and
_I-divergence_) a measure of how one probability distribution $P$ differs
from another, $Q$. For the distributions $P$ and $Q$ for a continuous random
variable, the relative entropy integral is:

$$
\begin{equation}
    D_{KL}(P||Q) = \int_{-\infty}^{\infty}p(x)\log(\frac{p(x)}{q(x)})dx.
\end{equation}
$$

Note that $D_{KL}(P||Q)$ is only finite if the support set of $P$ is
contained in the support set of $Q$. In the context of Bayesian inference
$D_{KL}(P||Q)$, read as _the KL-divergence of P given Q_, is a
measure of the information gained by revisiting one's beliefs from a prior
probability distribution $Q$ to a posterior probability distribution $P$. For
example the $D_{KL}(P||Q)$ for $P\sim{}\mathcal{N}(\mu_1,\sigma_1)$ and
$Q\sim{}\mathcal{N}(\mu_2,\sigma_2)$ can be derived analytically to be:

$$
\begin{equation}
    D_{KL}(P||Q) = \log\frac{\sigma_2}{\sigma_1} + \frac{\sigma_1^2 + (\mu_1-\mu_2)^2}{2\sigma_2^2} - \frac{1}{2}.
\end{equation}
$$

One noteworthy characteristic of the KL-divergence is its asymmetry, that is
$D_{KL}(P||Q)\neq{}D_{KL}(Q||P)$. This means that KL-divergence makes
for a poor _distance_ metric as is commonly done with, for example,
squared-errors. This may at first present KL-divergence as a suboptimal choice
as a general metric, however when considering the relation between the posterior
and the priori, the relative information gain when travelling from one to the
other **is** inherently asymmetric by their very nature. 

## Jensen-Shannon divergence (information radius)

The Jensen-Shannon divergence (a.k.a. _information radius_ and _total divergence
to the average_) is based on the KL-divergence, however it has been extended
with the differences that it is symmetric, and always has a finite value.

$$
\begin{equation}
    D_{JS}(P||Q) = \frac{1}{2}D_{KL}(P||M) + \frac{1}{2}D_{KL}(Q||M)
\end{equation}
$$
$$
\text{where  }
M = \frac{1}{2}(P+Q)
$$