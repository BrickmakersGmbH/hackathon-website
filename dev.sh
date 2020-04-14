#!/bin/bash

NAME="bm_hackathon"
FILTER=$(docker ps --format '{{.Status}}' -f name=$NAME -a)

if [[ -z $FILTER ]]
then
    echo "creating container"
    docker run -d -p 4000:4000 -v "$(pwd):/srv/jekyll" --name $NAME jekyll/jekyll jekyll serve --watch --drafts
elif [[ -z $(echo $FILTER | grep Up) ]]
then
    echo "starting container"
    docker start $NAME
else
    echo "container already running"
fi