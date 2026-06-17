# University Student Records API

## Project Overview

This project is a REST API built using Node.js and Express.js. It demonstrates REST API fundamentals by implementing GET and POST routes and returning structured JSON responses.

## Features

* Get all students
* Get student by ID
* Add a new student
* JSON-based responses
* Input validation

## Technologies Used

* Node.js
* Express.js
* Postman

## API Endpoints

### GET /

Returns the API welcome message.

### GET /students

Returns all students.

### GET /students/:id

Returns a specific student by ID.

### POST /students

Adds a new student record.

## Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
npm start
```

4. Open in browser

```text
http://localhost:3000
```

## Sample Student Object

```json
{
  "id": 1,
  "name": "Ali",
  "semester": 6,
  "department": "Computer Science",
  "cgpa": 3.5
}
```

## Author

Nosheen Afzal
