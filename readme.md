# Simple CRUD API

This is a text project for BiTechX LLC. It provides a simple CRUD API for managing users using Node.js and Express.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Scripts](#scripts)
- [Linting and Formatting](#linting-and-formatting)
- [Author](#author)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Mueem-Nahid/simple-crud-api-ts-express.git

2. Navigate into the project directory: cd simple-crud-api
3. Install dependencies: npm install

## Usage
Add `.env` file.

To run the server locally, execute:

`npm run dev`

The server will start listening on port 3000 by default. You can then access the API endpoints using tools like Postman or curl.

## API Documentation

### Create a new user

-   **URL:** `http://localhost:5000/api/v1/users/`
-   **Method:** `POST`
-   **Request Body:**
    `{
    "userName": "example_user",
    "password": "example_password"
    }`

-   **Success Response:**
   -   **Code:** `201 Created`
   -   **Content:**

       `{
       "id": 1,
       "username": "example_user",
       "password": "example_password"
       }`


### Get all users

-   **URL:** `http://localhost:5000/api/v1/users/`
-   **Method:** `GET`
-   **Success Response:**
   -   **Code:** `200 OK`
   -   **Content:**

       `[
       {
       "id": 1,
       "username": "example_user",
       "password": "example_password"
       }
       ]`


### Get user by ID

-   **URL:** `http://localhost:5000/api/v1/users/:id`
-   **Method:** `GET`
-   **URL Params:** `id=[integer]`
-   **Success Response:**
   -   **Code:** `200 OK`
   -   **Content:**

       `{
       "id": 1,
       "username": "example_user",
       "password": "example_password"
       }`


### Update user by ID:
-   **URL:** `http://localhost:5000/api/v1/users/:id`
-   **Method:** `PATCH`
-   **URL Params:** `id=[integer]`
-   **Request Body:**

    `{
    "username": "new_username",
    "password": "new_password"
    }`

-   **Success Response:**
   -   **Code:** `200 OK`
   -   **Content:**

       jsonCopy code

       `{
       "id": 1,
       "username": "new_username",
       "password": "new_password"
       }`



### Delete user by ID

-   **URL:** `http://localhost:5000/api/v1/users/:id`
-   **Method:** `DELETE`
-   **URL Params:** `id=[integer]`
-   **Success Response:**
   -   **Code:** `204 No Content`


## Scripts

-   `dev`: Starts the server in development mode using `ts-node-dev`.
-   `lint:check`: Checks code for linting errors using ESLint.
-   `lint:fix`: Fixes linting errors automatically using ESLint.
-   `prettier:check`: Checks code formatting using Prettier.
-   `prettier:fix`: Fixes code formatting automatically using Prettier.
-   `lint-prettier`: Runs linting and code formatting checks.
-   `test`: Placeholder for running tests (no tests specified).

## Linting and Formatting

Linting and formatting are enforced using ESLint and Prettier. You can run linting and formatting checks using the provided scripts:

`npm run lint:check    # Check for linting errors
npm run lint:fix      # Fix linting errors
npm run prettier:check    # Check code formatting
npm run prettier:fix      # Fix code formatting
npm run lint-prettier     # Run linting and code formatting checks`

## Author

This project is authored by Mueem Nahid.