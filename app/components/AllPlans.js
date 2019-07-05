import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlans } from '../store';

class AllPlans extends Component {
  componentDidMount() {
    this.props.fetchPlans();
  }
  render() {
    return (
      <div className="card shadow-none p-3 mb-5 bg-light rounded">
        <h3>Plans</h3>
        {this.props.plans.map(plan => (
          <div key={plan.id}>{plan.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ plans: state.plans });
const mapDispatchToProps = dispatch => ({
  fetchPlans: () => dispatch(fetchPlans()),
});
const ConnectedAllPlans = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPlans);

export default ConnectedAllPlans;
