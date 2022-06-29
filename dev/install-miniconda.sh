#!/usr/bin/env bash

mkdir -p ~/miniconda3

# check if linux
if [ "$(uname)" == "Linux" ]; then
  wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh

# else check if mac
elif [ "$(uname)" == "Darwin" ]; then
  wget https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh -O ~/miniconda3/miniconda.sh

fi

bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh
~/miniconda3/bin/conda init bash
~/miniconda3/bin/conda init zsh