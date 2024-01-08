import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div className="bg-light p-3 mb-2 mt-4">
        <div className="container mt-4">
          <div className="d-flex justify-content-between">
            <div>
              <br />
              <h3>Transaction Details</h3>
              <hr />
            </div>
          </div>
        </div>

        <div className="container p-3 my-3 bg-white">
          <div className="row mb-2">
            <div className="col-4"><b>Date:</b></div>
            <div className="col-8">{this.state.user.date}</div>
          </div>
          <div className="row mb-2">
            <div className="col-4"><b>Description:</b></div>
            <div className="col-8">{this.state.user.description}</div>
          </div>
          <div className="row mb-2">
            <div className="col-4"><b>Amount:</b></div>
            <div className="col-8">{this.state.user.amount}</div>
          </div>
          <div className="row mb-2">
            <div className="col-4"><b>Status:</b></div>
            <div className="col-8">{this.state.user.status}</div>
          </div>
          <div className="row mb-2">
            <div className="col-4"><b>Receiver:</b></div>
            <div className="col-8">{this.state.user.receiver}</div>
          </div>
          <div className="row mb-2">
            <div className="col-4"><b>Jenis Kelamin:</b></div>
            <div className="col-8">{this.state.user.jk}</div>
          </div>
          <div className="row mb-2">
            <div className="col-4"><b>No Telepon:</b></div>
            <div className="col-8">{this.state.user.no_telp}</div>
          </div>
          <div className="row mb-2">
            <div className="col-4"><b>Address:</b></div>
            <div className="col-8">{this.state.user.address}</div>
          </div>

          <div className="col-md-6 text-center offset-md-3">
            <Link to="/" className="btn btn-secondary">
              Back
            </Link>
          </div>
        </div>
      </div>

    );
  }
}

export default ViewUserComponent;
