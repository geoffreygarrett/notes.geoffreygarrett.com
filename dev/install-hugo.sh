#!/usr/bin/env bash

# check for verbose flag

eval "$(conda shell.bash hook)"
conda activate hugo
export GOPATH=${HOME}/go
export PATH=$PATH:$GOPATH/bin
mkdir $HOME/src
cd $HOME/src
git clone https://github.com/gohugoio/hugo.git
cd hugo
go mod tidy
#if [ "$1" == "-v" ]; then
    go install --tags extended -v -x
#else
#    go install --tags extended -v
#fi

# Install and link `hugo-obsidian` locally
go install github.com/jackyzha0/hugo-obsidian@latest