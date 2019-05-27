#!/usr/bin/env bash

docker build -t ruby -f Dockerfile ./build
docker stop ruby
docker run --name ruby --rm -d -p 3002:3002 ruby
