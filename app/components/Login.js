import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchPhong, login } from '../store';
import isValidEmail from 'sane-email-validation';
import Welcome from './Welcome';

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'required';
  }
  if (!values.email) {
    errors.email = 'required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'invalid email!';
  }
  return errors;
};

const RenderInput = ({ input, meta, label, type }) => {
  return (
    <div className="field-wrap">
      <label>{label}: </label>
      {meta.error &&
        meta.touched && <span className="warning">{meta.error}</span>}
      <input
        className="form-control"
        type={type}
        {...input}
        placeholder={label}
      />
    </div>
  );
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showHide: 'hide',
    };
    this.submit = this.submit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
  }
  async submit() {
    await this.props.login();
    const { phongId } = this.props.user;
    this.props.history.push(`/${phongId}/dashboard`);
  }
  togglePassword() {
    const toggle = this.state.showHide === 'hide' ? 'show' : 'hide';
    this.setState({ showHide: toggle });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-around d-sm-flex">
          <div className="col-md-5">
            <h1>Welcome to Phong!</h1>
            <div className="card">
              <Welcome />
            </div>
          </div>
          <div className="col-md-5">
            <h1>Get Started</h1>
            <div className="card">
              <h4>Login</h4>
              <form onSubmit={handleSubmit(this.submit)}>
                <div className="form-group">
                  <Field name="email" label="email" component={RenderInput} />
                  <Field
                    name="password"
                    label="password"
                    type={this.state.showHide === 'hide' ? 'password' : 'text'}
                    component={RenderInput}
                  />
                </div>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={this.togglePassword}
                >
                  {this.state.showHide}
                </button>
                <button className="btn btn-success" type="submit">
                  login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  fetchPhong: phongId => dispatch(fetchPhong(phongId)),
});

const LoginForm = reduxForm({ form: 'login', validate })(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
