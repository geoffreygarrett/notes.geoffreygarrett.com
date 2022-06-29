#!/usr/bin/env bash

# activate conda
eval "$(conda shell.bash hook)"
conda activate hugo

# set paths
export GOPATH=${HOME}/go
export PATH=$PATH:$GOPATH/bin

# set current directory as ..
cd ..

# Scrape all links in your Quartz folder and generate info for Quartz
hugo-obsidian -input=content -output=assets/indices -index -root=.

hugo server