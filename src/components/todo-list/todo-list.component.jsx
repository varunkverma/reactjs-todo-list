import React from "react";
import "./todo-list.styles.scss";
import TodoItem from "../todo-item/todo-item.component";
class TodoList extends React.Component {
  render() {
    const tasks = this.props.tasks;
    //console.log(tasks);
    return (
      <div className="todo-list">
        <div className="items">
          {tasks.map(task => (
            <TodoItem
              OnToggle={this.props.OnToggle}
              OnDelete={this.props.OnDelete}
              key={task.id}
              task={task}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default TodoList;
