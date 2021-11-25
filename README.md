# Wishlist
A simple API, built with NodeJS, to manage new customers and their favorite products.
## Getting started
- copy .env-example to .env and edit the variables
```sh
cp .env-example .env
```
- install `npm`
```sh
sudo apt install npm
```
- install `nodejs`
```sh
sudo apt install nodejs
```
- install `nodemon`
```sh
sudo apt install nodejs
```
- install dependencies
```sh
sudo npm install
```
## Configuring database
- install postgreSQL (https://www.postgresql.org/download/linux/ubuntu/)
- create a database
- set the database configs on .env file
```sh
DATABASE_NAME=wishlist
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
```
- Run migrates
```sh
sudo npm run migrate
```
## Running project 
- Start the server
```sh
sudo npm run dev
```
ps: The project will be started on 8080 port by default.

- Open your browser and access the url
```sh
http://localhost:8080/api-docs/
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
