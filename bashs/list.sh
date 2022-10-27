#!/bin/bash

dir="$1"
ext='xx'

for file in "$dir"/*."$ext"
do
    echo "${file%.*}"
done
