#!/usr/bin/env bash

mkdir -p .dist && cd src && zip -r ../.dist/feed_collector.zip . && cd ..
