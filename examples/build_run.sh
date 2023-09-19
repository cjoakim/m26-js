#!/bin/bash

# Bash script to compile and run this app.
#
# Chris Joakim, Microsoft, 2023

npm run build

node dist/main.js
node dist/main.js > tmp/examples.md
