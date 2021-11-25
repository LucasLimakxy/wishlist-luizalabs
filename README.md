# Wishlist
A simple API, built with NodeJS, to manage new customers and their favorite products.
## Getting started
- copy .env-example to .env
```sh
cp .env-example .env
```
- just run the containers
```sh
docker-compose up -d
```
ps: The project will be started on 3000 port by default.
- Open your browser and access the url
```sh
http://localhost:3000/api-docs/
```
You'll see the API endpoints documented with swagger, and you'll be able to check out the functionality.

It is worth noting that to access the default routes it is necessary to be "authenticated", and for educational purposes, provide a route to create a user:
```sh
/user
```
And then another route to authenticate, which will return a token:
```sh
/authenticate
```
To stop the containers run:
```sh
docker-compose down
```
