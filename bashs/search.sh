#!/bin/bash

for file in *.out;do
  if [[ "$file" == *"$STRING"* ]];then
    printf '%s\n' "$file"
  fi
done

