run this to build image
    docker build -t myapp .

run this to start working
    docker rum -p 80:5000 -v $(pwd):/app myapp