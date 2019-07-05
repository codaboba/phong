import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MyPhong from './MyPhong';
import AllUsers from './AllUsers';
import AllTasks from './AllTasks';
import AllPlans from './AllPlans';
import { logout } from '../store';

const Dashboard = props => {
  return props.user.id ? (
    <div className="container">
      <nav className="navbar navbar-light">
        <ul className="navbar-nav mr-auto nav-pills">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Settings
            </a>
          </li>
        </ul>
        <div>
          <button
            type="submit"
            className="btn btn-warning btn-logout"
            onClick={props.logout}
          >
            logout
          </button>
        </div>
      </nav>

      <div className="row">
        <div className="col-12">
          <MyPhong user={props.user} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <AllPlans />
        </div>
        <div className="col-6">
          <AllTasks />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <AllUsers />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => ({ logout: () => dispatch(logout()) });

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default ConnectedDashboard;
