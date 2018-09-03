# Phong

## Features

- Create phongs (rooms)
- Schedule simple tasks or organize plans
- Assign multiple users to a task or plans
- Send anonymous reminders or notes to other users
- Nice to haves:
  - Events model
  - Users can control if they can share phone numbers
  - Sorting (alphabetic and date)
  - express, react, sequelize

##  Vertical 1: All Users, Tasks, and Plans

### APIs

- GooglePlus
- Google Calendar

#### Backend

- [ ] Write a phong model with the following information
  - [ ] name
  - [ ] date created
- [ ] Write users model with following information
  - [ ] name
  - [ ] googleId
  - [ ] phongId (room)
  - [ ] admin
  - [ ] phone number
  - [ ] image or imageUrl with default value
  - [ ] about
- [ ] Write a tasks model with the following information
  - [ ] name
  - [ ] details
  - [ ] due date
  - [ ] status (completed, active, overdue)
  - [ ] assignees (array)
  - [ ] planId
- [ ] Write a plans model with the following information
  - [ ] name
  - [ ] checklist (array)
  - [ ] progress (virtual property)
- [ ] Users can have many tasks and tasks can have many users
- [ ] Users and tasks belong to phongs 
- [ ] Phongs can have many users and tasks
- [ ] Write a route to serve up all users
- [ ] Write a route to serve up all tasks

#### Frontend

- [ ] Write a user sub-reducer to manage users in Redux store
- [ ] Write task sub-reducer to manage tasks in Redux store
- [ ] Write a component to display list of all users
- [ ] Write a component to display list of all tasks due that day
- [ ] Write a component to display list of all the user's tasks due that day
- [ ] Write a component to display list of all plans

## Vertical 2: Login

###  Backend

- [ ] Setup Oauth login
- [ ] Setup middleware for session storage
- [ ] Setup middleware for destroying sessions

## Vertical 3: Single User, Task, and Plan

#### Backend

- [ ] Write a route to serve up a single phong
- [ ] Write a route to serve up a single user
- [ ] Write a route to serve up a single task
- [ ] Write a route to serve up a single plan

#### Frontend

- [ ] Write a component to display a single user
- [ ] Write a component to display a single task
- [ ] Write a component to display a single plan

### Vertical 3: Adding a User, Tasks, and Plans

#### Backend

- [ ] Write a route to add a new user
- [ ] Write a route to add a new task
- [ ] Write a route to add a new plan