import React from "react";
import TodoList from "../../components/todo-list/todo-list.component";
import todoData from "../../assets/todo-data";
import TodoForm from "../../components/todo-form/todo-form.component";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: todoData
    };
  }

  OnToggle = e => {
    const idToChange = parseInt(e.target.id);

    this.setState({
      tasks: this.state.tasks.map(task => {
        console.log(task.id);
        if (task.id === idToChange) {
          //console.log("Hey");
          task.completed = !task.completed;
        }
        return task;
      })
    });
  };

  OnAdd = e => {
    console.log();
    e.preventDefault();
    const taskToAdd = e.target.taskText.value;
    const lastIdUsed = this.state.tasks[this.state.tasks.length - 1].id;
    console.log(lastIdUsed);
    this.setState({
      tasks: this.state.tasks.concat({
        id: lastIdUsed + 1,
        title: taskToAdd,
        completed: false
      })
    });
  };

  OnDelete = e => {
    const idToChange = parseInt(e.target.id);
    console.log(idToChange);
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== idToChange)
    });
  };

  render() {
    return (
      <div className="todo">
        <TodoForm className="todo-form" OnAdd={this.OnAdd} />
        <TodoList
          className="todo-list"
          tasks={this.state.tasks}
          OnToggle={this.OnToggle}
          OnDelete={this.OnDelete}
        />
      </div>
    );
  }
}

export default HomePage;
