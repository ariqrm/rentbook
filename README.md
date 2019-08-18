<h1 align="center">ExpressJS - Simple book App RESTfull API</h1>



book App is a simple book application specially for backend only. Built with NodeJs using the ExpressJs Framework.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)
## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)
5. Nodemon

## How to run the app ?
1. Open app's directory in CMD or Terminal
2. If you Dont have nodemon. You can install with type `npm install -g nodemon`
3. And install depedencies with type `npm install`
4. Make new file a called **.env**, set up first [here](#set-up-env-file)
5. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
6. Create a database with the name RentBook, and Import file [db.sql](db.sql) to **phpmyadmin**
7. Start app's with type `npm start`
8. Open Postman desktop application or Chrome web app extension that has installed before
9. Choose HTTP Method and enter request url.(ex. localhost:3006/book)
10. You can see all the end point [here](#end-point)

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
PORT=3006
HOST=localhost
USER=root // default
PASS= // default
DATABASE=RentBook

SECRET_KEY = 'your secretkey'

```

## End Point
**1. GET**
* `/book` (Get all data of book)
* `/book?search=2&sort=title&by=DESC&available=available&limit=2&page=1`
    (Get data with search, sort by coloum, and by available of book)
* `/book/:id` (Get book by specific id)
* `/genre` (Get all data of genre)
* `/genre?search=Diary` (Get data with search name of genre)
* `/genre/:id` (Get genre by specific id)
* `/transaction` (Get all data transaction)
* `/user` (Get all data of users)


**2. POST**
* `/book` (Add new book)
* `/genre` (Add new genre)
* `/transaction/borrow/` (For borrow book)
* `/transaction/return/` (For return book)
* `/user/signin` (Signin users)
* `/user/register` (Add new users)


**3. PATCH**
* `/book/:id` (Update book by id)
* `/genre/:id` (Update genre by id)

**4. DELETE**
* `/book/:id` (Delete book by id)
* `/genre/:id` (Delete genre by id)