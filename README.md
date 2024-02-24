# learning_Nginx
Trying to learn about Nginx ,by doing some small project from :: [NGINX Tutorial](https://www.youtube.com/watch?v=9t9Mp0BGnyI)

#### Steps to create docker image 
```bash
*  docker login -u ${username}      //Make sure you are logged in !!
*  docker build . -t ${tag-name}
*  docker run -p 1111:7777 -d ${image-id} //// docker run -p <host-port>:<container-port> -d <image-id>

```
## Nginx
* Have added sample nginx.comf file
* Add that file file and run
```bash
*  nginx -s reload
```

