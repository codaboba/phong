import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer, {
  getAllUsers,
  getAllTasks,
  getAllPlans,
  getPhong,
  getUser,
  logoutAction,
} from './reducers';

export const getMe = () => {
  return async dispatch => {
    try {
      const user = await axios.get('/api/auth/me');
      const action = getUser(user.data);
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      await axios.delete('/api/auth/logout');
      dispatch(logoutAction);
    } catch (err) {
      console.error(error);
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const { phongId } = getState().user;
    const res = await axios.get(`/api/users/${phongId}`);
    const action = getAllUsers(res.data);
    dispatch(action);
  };
};

export const fetchTasks = () => {
  return async (dispatch, getState) => {
    const { phongId } = getState().user;
    const res = await axios.get(`/api/tasks/${phongId}`);
    const action = getAllTasks(res.data);
    dispatch(action);
  };
};

export const fetchPlans = () => {
  return async (dispatch, getState) => {
    const { phongId } = getState().user;
    const res = await axios.get(`/api/plans/${phongId}`);
    const action = getAllPlans(res.data);
    dispatch(action);
  };
};

export const login = () => {
  return async (dispatch, getState) => {
    const { email, password } = getState().form.login.values;
    const user = await axios.put('/api/auth/login', { email, password });
    const action = getUser(user.data);
    dispatch(action);
  };
};

export const fetchPhong = phongId => {
  return async dispatch => {
    const phong = await axios.get(`/api/phongs/${phongId}`);
    dispatch(getPhong(phong.data));
  };
};

export const postPhong = () => {
  return async (dispatch, getState) => {
    const { name, description, city } = getState().form.newPhong.values;
    const res = await axios.post('/api/phongs', { name, description, city });
    const action = getPhong(res.data);
    dispatch(action);
  };
};

export default createStore(
  rootReducer,
  applyMiddleware(loggingMiddleware, thunkMiddleware)
);
