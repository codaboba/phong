import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { postPhong } from '../store';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'required';
  }
  if (!values.description) {
    errors.description = 'required';
  }
  if (!values.city) {
    errors.city = 'required';
  }
  return errors;
};

const createRenderer = render => ({ input, meta, label, ...rest }) => (
  <div className="field-wrap">
    {meta.error &&
      meta.touched && <span className="warning">{meta.error}</span>}
    <label>{label}: </label>
    {render(input, label, rest)}
  </div>
);

const RenderInput = createRenderer((input, label) => (
  <input {...input} placeholder={label} className="form-control" />
));

const RenderSelect = createRenderer((input, label, { children }) => (
  <select {...input} className="form-control">
    {children}
  </select>
));

class NewPhong extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  async submit() {
    await this.props.postPhong();
    this.props.history.push(`/${this.props.phong.id}/dashboard`);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="card">
        <form onSubmit={handleSubmit(this.submit)}>
          <Field name="name" label="name" component={RenderInput} />
          <Field
            name="description"
            label="description"
            component={RenderInput}
          />
          <Field
            name="city"
            label="where do you live?"
            component={RenderSelect}
          >
            <option />
            <option>Chicago</option>
            <option>New York City</option>
            <option>San Francisco</option>
          </Field>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ phong: state.phong });

const mapDispatchToProps = dispatch => ({
  postPhong: () => dispatch(postPhong()),
});

const NewPhongForm = reduxForm({ form: 'newPhong', validate })(NewPhong);

const ConnectedNewPhongForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPhongForm);

export default ConnectedNewPhongForm;
