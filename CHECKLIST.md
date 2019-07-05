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

##  Vertical 1: All Users, Tasks, and Plans

### APIs

- GooglePlus
- Google Calendar

#### Backend

- [x] Write a phong model with the following information
  - [x] name
  - [x] date created
- [x] Write users model with following information
  - [x] name
  - [x] googleId
  - [x] phongId (room)
  - [x] admin
  - [x] phone number
  - [x] default image
  - [x] about
- [x] Write a tasks model with the following information
  - [x] name
  - [x] details
  - [x] completed (true, false)
  - [x] status (completed, active, overdue)
  - [x] assignees (array)
  - [x] planId
- [x] Write a plans model with the following information
  - [x] name
  - [x] tasks (array)
- [x] Users can have many tasks and tasks can have many users
- [x] Users belongs to phongs 
- [x] Plans can have many tasks
- [x] Tasks belong to a plan
- [x] Phongs can have many users
- [x] Write a route to serve up all users
- [x] Write a route to serve up all tasks
- [x] Write a route to serve up all plans

#### Frontend

- [x] Write a user sub-reducer to manage users in Redux store
- [x] Write task sub-reducer to manage tasks in Redux store
- [x] Write a plan sub-reducer to manage plans in the Redux store
- [x] Write a component to create a new phong
- [x] Write a component to display list of all users
- [x] Write a component to display list of all tasks due that day
- [x] Write a component to display list of all the user's tasks due that day
- [x] Write a component to display list of all plans

## Vertical 2: Adding a Phong

### Backend

- [x] Write a route to add a new phong

### Frontend

- [x] Write a dashboard component
  - [x] Displays all users, tasks, plans
- [x] Write a new phong component (name, description, city)

## Vertical 3: Login

###  Backend

- [x] Setup seed file to give every user a phongId
- [x] Write a route to serve up the dashboard for a specific phong
- [x] Setup local login route
- [x] Setup persistent session
- [ ] Setup Oauth login route
- [x] Setup middleware for session storage
- [x] Setup middleware for destroying sessions
- [x] Setup route to fetch all the plans for that phong (with the task), the tasks for that person, and all the users in the same phong

### Frontend

- [x] Create a login component
- [x] Redirect login to dashboard
- [x] Ensure that login shows all the correct user's plans, tasks, and other users in their phong

## Vertical 4: Create Task, Plan

### Backend

- [ ] Write a route to create a new task
- [ ] Write a route to create a new plan

### Frontend

- [ ] Write a component to display a new task form
- [ ] Write a component to display a new plan form
- [ ] Display current date on dashboard
- [ ] Integrate Google Calendar

## Vertical 5: Create New User

### Backend

- [ ] Write a route to sign up a user
- [ ] Write a route that will allow users to join existing phongs

### Frontend

- [ ] Write a component that will show a sign up form
- [ ] Write a component that tell the user to join a phong or create a new phong