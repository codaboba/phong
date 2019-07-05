import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store';

class AllUsers extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h3>Members</h3>
        <div className="members">
          {this.props.users.map(user => (
            <div key={user.id}>
              <img src={user.imageUrl} alt="user" className="img-thumbnail" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ users: state.users });
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});
const ConnectedAllUsers = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers);

export default ConnectedAllUsers;
