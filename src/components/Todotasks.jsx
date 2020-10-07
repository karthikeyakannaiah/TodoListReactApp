import React, { Component } from "react";

class Todotasks extends Component {
  state = {
    taskStatus: false,
  };
  handleChange = (event) => {
    let { checked } = event.target;
    this.setState({ taskStatus: checked });
  };
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };
  render() {
    return (
      <div className="input-group ml-4 mb-4">
        <div className="input-group-text">
          <input
            type="checkbox"
            className="text-primary bg-white"
            checked={this.state.taskStatus}
            onChange={this.handleChange}
          />
        </div>
        <input
          className="form-control  text-primary bg-white"
          type="text"
          style={
            this.state.taskStatus
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
          value={this.props.task}
          readOnly
        />
        <div className="input-group-append">
          <button
            className="btn btn-danger"
            type="submit"
            onClick={this.handleDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Todotasks;
