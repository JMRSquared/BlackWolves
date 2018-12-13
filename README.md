# BlackWolves

## Server

> The server is written in Asp.net core (2.1) , and it is inside a docker container that has a postgre database

> The connection between the server and the database is EntityFrameworkCore

### How to run

`cd server`
`docker-compose build`
`docker-compose up`

```
  *DONE*
```


## Client

> The client consist of a web app and a mobile app (Android and IOS) , the web app is in VueJS and the mobile app in in Nativescript-Vue

### How to run

#### WEB

`cd client/WEB`
`npm install`
`npm run dev`

```
  *DONE*
```

#### App

`cd client/App`
`tns debug android --hmr` or `tns debug ios --hmr`

```
  *DONE*
```
