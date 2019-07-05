import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NewPhongPage from './NewPhongPage';
import Login from './Login';
import Dashboard from './Dashboard';
import { getMe } from '../store';

class Root extends Component {
  async componentDidMount() {
    await this.props.getMe();
    if (this.props.user.id) {
      const { phongId } = this.props.user;
      this.props.history.push(`/${phongId}/dashboard`);
    }
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/:phongId/dashboard/" component={Dashboard} />
          <Route path="/create/phong" component={NewPhongPage} />
          <Route component={Login} />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => ({ getMe: () => dispatch(getMe()) });

const ConnectedRoot = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);

export default withRouter(ConnectedRoot);
