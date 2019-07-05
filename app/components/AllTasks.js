import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../store';

class AllTasks extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }
  render() {
    return (
      <div className="card">
        <h3>Tasks</h3>
        {this.props.tasks.map(task => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ tasks: state.tasks });
const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks()),
});
const ConnectedAllTasks = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllTasks);

export default ConnectedAllTasks;
