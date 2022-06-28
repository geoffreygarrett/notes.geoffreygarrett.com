---
title: "Deep Learning"
tags:
- machine-learning 
- deep-learning
---

Deep Learning (DL) is a field of Machine Learning (ML) that is primarily
concerned with the learning of representations of data. At the core of DL is the
use of Multi-layer perceptrons (MLPs), used to model these representations. MLPs
are fully connected layers of biologically inspired artifical neurons, also
known as perceptrons. A brief history are these biologically inspired models are
covered in Section X with adapted notation from the field of DL. Although not
all practices in DL, strictly speaking, make use of MLPs, they are a fundamental
concept which must be understood in the stepping stones towards concepts of
higher complexity in the field. Section X covers this concept, extending
directly on their composite component: perceptrons.

**MLP** are also called **feedfoward** as information is propagated in
only a forward direction, as opposed to exhibiting **feedback** connections,
where intermediate computations are fed back into the network. When feedforward
networks are extended to include feedback connections, they are called
**RNNs**. These types of networks excel at learning temporal
features, exhibiting a refined hypothesis space favouring sequenced information,
such as a series of chronological observations. Section X covers this
type of DNN, and the prominent sub-type of RNN: LSTMs.

One type of neural networks which is similar to MLP and popular in
contemporary research, is the CNN. These deep NN are essentially
MLP which omit the property of being fully connected, in favour of
refining the hypothesis space towards detection of spatially-related features.