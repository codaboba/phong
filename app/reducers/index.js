import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_ALL_TASKS = 'GET_ALL_TASKS';
const GET_ALL_PLANS = 'GET_ALL_PLANS';
const GET_USER = 'GET_USER';
const GET_TASK = 'GET_TASK';
const GET_PLAN = 'GET_PLAN';
const GET_PHONG = 'GET_PHONG';
const LOG_OUT = 'LOG_OUT';

export const getAllUsers = users => ({ type: GET_ALL_USERS, users });
export const getAllTasks = tasks => ({ type: GET_ALL_TASKS, tasks });
export const getAllPlans = plans => ({ type: GET_ALL_PLANS, plans });
export const getUser = user => ({ type: GET_USER, user });
export const getTask = task => ({ type: GET_TASK, task });
export const getPlan = plan => ({ type: GET_PLAN, plan });
export const getPhong = phong => ({ type: GET_PHONG, phong });
export const logoutAction = { type: LOG_OUT };

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};
const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return action.tasks;
    default:
      return state;
  }
};
const plansReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PLANS:
      return action.plans;
    default:
      return state;
  }
};
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
};
const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TASK:
      return action.task;
    default:
      return state;
  }
};
const planReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PLAN:
      return action.plan;
    default:
      return state;
  }
};

const phongReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PHONG:
      return action.phong;
    default:
      return state;
  }
};

const appReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  plans: plansReducer,
  user: userReducer,
  task: taskReducer,
  plan: planReducer,
  phong: phongReducer,
  form: formReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
