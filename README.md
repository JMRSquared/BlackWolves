# BlackWolves

# Server

> The server is written in Asp.net core (2.1) , and it is inside a docker container that has a postgre database

> The connection between the server and the database is EntityFrameworkCore

> Getting started - https://docs.docker.com/get-started/

if you are using windows

> Getting started - https://docs.docker.com/docker-for-windows/

### How to run

```shell
cd server
docker-compose build
docker-compose up
```

# Client

> The client consist of a web app and a mobile app (Android and IOS) , the web app is in VueJS and the mobile app in in Nativescript-Vue

### How to run

#### WEB

> Getting started - https://cli.vuejs.org/guide/installation.html

```shell
cd client/WEB
npm install
npm run dev
```

#### App

> Getting started - https://nativescript-vue.org/en/docs/getting-started/installation/

```shell
cd client/App
tns debug android --hmr
```

or

```shell
cd client/App
tns debug android --hmr
```
