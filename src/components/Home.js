import React, { Component } from "react";
import { toast } from "react-toastify";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.toastHandler = this.toastHandler.bind(this);
  }

  toastHandler = () => {
    toast.success("Welcome to React Toast");
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron text-center">
              <h1 className="display-3">D.Ganesh</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <button onClick={this.toastHandler} className="btn btn-warning">
              Toast
            </button>
          </div>
        </div>
      </div>
    );
  }
}
