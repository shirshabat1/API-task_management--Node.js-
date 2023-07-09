# API-task_management--Node.js
# Task Managment

You can add/delete/update/view all your tasks using API calls

---
## Requirements

For development, you can use Visual Studio Code with Node.js package. 

## Install

    $ git clone https://github.com/shirshabat1/API-task_management--Node.js-.git
    $ cd API-task_management--Node.js-
    $ npm i express 

## Configure app

Open `.env` and choose which port would you like to listen

## Running the project via terminal
$ npm run dev

$ Open the link received from the run

<img width="398" alt="image" src="https://github.com/shirshabat1/chat_room-Node.js/assets/77749228/f7e3f38c-ecab-4c0d-9ac4-4f822e08d344">

## GET - get all tasks http://localhost:3000/api/v1/tasks
Output: A list with all existing tasks

## GET - get One Task http://localhost:3000/api/v1/tasks/:id
example: http://localhost:3000/api/v1/tasks/d5ab4d58-24e2-4f01-9552-d4e5be296d9a
Output: returns the task if it exists

## POST - new task http://localhost:3000/api/v1/tasks  (with body)
Request Headers
Content-Type: application/json
example: 
{
    "name": "sdsffffddsd",
    "content": "goood"
}


## DELETE - delete task http://localhost:3000/api/v1/tasks/:id 
example: http://localhost:3000/api/v1/tasks/d5ab4d58-24e2-4f01-9552-d4e5be296d9a





