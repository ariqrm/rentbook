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

## How to run the app ?
1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name RentBook, and Import file [db.sql](db.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3006/book)
8. You can see all the end point [here](#end-point)

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
* `/book`
* `/book?search=X&sort=title&by=DESC&limit=200&page=1`
* `/book/:id` (Get book by id)
* `/genre`
* `/genre?search=Diary`
* `/genre/:id` (Get genre by id)
* `/transaction`
* `/user`


**2. POST**
* `/book`
* `/genre`
* `/transaction/borrow/`
* `/transaction/return/`
* `/user`


**3. PATCH**
* `/book/:id` (Update book by id)
* `/genre/:id` (Update genre by id)

**4. DELETE**
* `/book/:id` (Delete book by id)
* `/genre/:id` (Delete genre by id)