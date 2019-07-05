import React, { Component } from 'react';
import NewPhongForm from './NewPhongForm';

class NewPhongPage extends Component {
  render() {
    return (
      <div className="card">
        <div className="row">
          <div className="col-12">
            <h1>Create a New Phong</h1>
            <NewPhongForm />
          </div>
        </div>
      </div>
    );
  }
}

export default NewPhongPage;
