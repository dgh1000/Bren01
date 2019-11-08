#!/bin/bash
counter=0
t=$(stat -f "%m" "src/index.html")
while [ true ]; do 
    sleep 1
    t2=$(stat -f "%m" "src/index.html")
    if [ "$t" != "$t2" ] 
    then
        cp "src/index.html" "dist/"
        t=$(stat -f "%m" "src/index.html")
    fi
done
# stat -f "%m" "src/index.html"
echo $t
