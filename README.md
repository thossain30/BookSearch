# Book-Search-Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table-of-Contents

- [Description](#description)
- [Deployed Site](#deployed-site)
- [Features](#features)
- [Technologies](#technologies)

## Description

Book Search Engine is a site in which users can search for any book title or author, and search results containing their query will appear below. In this project, I integrate a GraphQL API into a fully functioning book engine that was built using the MERN stack, replacing the previous RESTful API.

## Deployed Site

Follow [this link](https://book-search-tzh-ae030d1170fe.herokuapp.com/) to view and use my site!

## Features
 The main page shows new users a menu, with which they can search for books, login, or signup. If the user is logged in, the buttons they will see options to search for books, view their saved books, or logout.

Clicking the login/signup button on the main page will bring users to a login portal. The user can toggle the modal between a "sign up" or "login" option. Here they can either enter new credentials to sign up as a user in the signup section, or they can enter their already verfied credentials into the login section. To sign up, users must provide a username, a valid email address, and a password. To login, they only need to provide their email address and password for verification. Later, users can logout using the "logout" button that appears in the site's navigation.

If the user selects "search for books," they are then presented with an input field to search for books. Clicking "submit" will return a list of search results, each featuring a book's title, author, description, image, and a link to that book on the Google Books site. If the user is logged in while searching for books, then an option appears for them to save a book to their account. By clicking on the save option, that book is added to the "Saved Books" page. Users can manage their saved books from this page by deleting that book from their saved books list.

## Technologies

- React.js
- CSS
- Bootstrap
- JavaScript
- Node.js
- npm
- [Express.js](https://expressjs.com/)
- MongoDB
- [Mongoose](https://mongoosejs.com/)
- [@apollo/client](https://www.npmjs.com/package/@apollo/client)
- [apollo-server-express](https://www.npmjs.com/package/apollo-server-express)
- [graphQL](https://graphql.org/)
- [JWT](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Google Books API](https://developers.google.com/books)
- [concurrently](https://www.npmjs.com/package/concurrently)
- [nodemon](https://www.npmjs.com/package/nodemon)


## Licensing

The application is covered under the following license: [MIT](https://opensource.org/licenses/MIT)