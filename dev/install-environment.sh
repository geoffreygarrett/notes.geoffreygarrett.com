#!/usr/bin/env bash

conda update -n base conda

# check if linux
if [ "$(uname)" == "Linux" ]; then
    conda env create -f conda/unix-environment.yaml --force

# else check if mac
elif [ "$(uname)" == "Darwin" ]; then
    conda env create -f conda/unix-environment.yaml --force

fi # end if linux