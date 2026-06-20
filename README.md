# Task-1-Nosheen-Afzal

## University Student Records API

### Project Overview

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
* Git & GitHub

## Project Architecture

This project follows a simple REST API architecture where requests are sent from the client (Browser/Postman) to the Express server, which processes routes and returns JSON responses.

## API Endpoints

| Method | Endpoint      | Description                |
| ------ | ------------- | -------------------------- |
| GET    | /             | Returns welcome message    |
| GET    | /students     | Returns all students       |
| GET    | /students/:id | Returns a specific student |
| POST   | /students     | Adds a new student         |

## Installation

### Clone the Repository

```bash
git clone https://github.com/nosheenawan467/Task-1-Nosheen-Afzal.git
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
npm start
```

### Open in Browser

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

## Screenshots

### Home Route

![Home Route](Screenshots/Home-route.PNG)

### Get All Students

![Get All Students](Screenshots/get-all-students.PNG)

### Get Student By ID

![Get Student By ID](Screenshots/student-id-1.PNG)

### Student Not Found

![Student Not Found](Screenshots/student-not-found.PNG)

### POST Request in Postman

![POST Student](Screenshots/post-student-success.PNG)

## Documentation

Project documentation is included in the repository.
[📄 View Documentation](Documentation/Backend%20Task-1.pdf)

## GitHub Repository

https://github.com/nosheenawan467/Task-1-Nosheen-Afzal

## Author

**Nosheen Afzal**

Backend Development Project 1 – REST API Fundamentals

DecodeLabs Industrial Training Program (Batch 2026)
