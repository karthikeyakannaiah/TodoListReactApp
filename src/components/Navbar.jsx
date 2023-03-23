import React, { Component } from "react";

class Navbar extends Component {
  state = {
    text: "",
  };
  handleChange = (event) => {
    let { value } = event.target;
    this.setState({ text: value });
  };
  handleTask = () => {
    if (this.state.text === "") {
      alert("type something");
    } else {
      this.props.onAdd(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-primary bg-light">
        <a className="navbar-brand">
          Todo App <span class="badge badge-warning">by Karthikeya</span>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/karthikeya-kannaiah-052176194"
              >
                AboutMe
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-primary dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  className="dropdown-item text-primary"
                  href="https://letus-7d9c3.web.app/"
                >
                  Letus <sub className="text text-secondary">Firebase</sub>
                </a>
                <a
                  className="dropdown-item text-primary"
                  href="https://github.com/karthikeyakannaiah/TodoListReactApp"
                >
                  TodoApp <sub className="text text-secondary">React</sub>
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item text-primary"
                  href="https://buildyourcareer-achiever.web.app/"
                >
                  Build Your Career{" "}
                  <sub className="text text-secondary">
                    with team<b>Achiever</b>
                  </sub>
                </a>
              </div>
            </li>
          </ul>
          <div className="input-group ml-4">
            <input
              className="form-control  text-primary bg-white"
              type="text"
              placeholder="AddTask"
              aria-label="AddTask"
              value={this.state.text}
              onChange={this.handleChange}
              name="task"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.handleTask}
              >
                Add Task
              </button>
              <button
                className="btn btn-danger"
                type="submit"
                onClick={this.props.onDelete}
              >
                Delete All Tasks
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
