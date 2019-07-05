import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhong } from '../store';

class MyPhong extends Component {
  componentDidMount() {
    this.props.fetchPhong(this.props.user.phongId);
  }

  render() {
    return (
      <div className="card">
        <h3>
          Hi, {this.props.user.name}. Welcome back to {this.props.phong.name}!
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({ phong: state.phong });
const mapDispatchToProps = dispatch => ({
  fetchPhong: phongId => {
    dispatch(fetchPhong(phongId));
  },
});
const ConnectedMyPhong = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPhong);

export default ConnectedMyPhong;
