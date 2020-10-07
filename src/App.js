import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar.jsx";
import Todotasks from "./components/Todotasks.jsx";
class App extends React.Component {
  state = {
    tasks: [],
  };
  handleTask = (text) => {
    let task = this.state.tasks;
    task.push({ id: task.length + 1, task: text });
    this.setState({ tasks: task });
  };
  handleDeleteTask = (id) => {
    let newTasks = this.state.tasks.filter((c) => c.id !== id);
    this.setState({ tasks: newTasks });
  };
  deleteAllTasks = () => {
    this.setState({ tasks: [] });
  };
  render() {
    let tasks = this.state.tasks.map((c) => {
      return (
        <Todotasks
          key={c.id}
          id={c.id}
          task={c.task}
          onDelete={this.handleDeleteTask}
        ></Todotasks>
      );
    });
    return (
      <React.Fragment>
        <Navbar onAdd={this.handleTask} onDelete={this.deleteAllTasks} />
        <br />
        <main className="container" tasks={this.state.tasks}>
          {tasks}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
