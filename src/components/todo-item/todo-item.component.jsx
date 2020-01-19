import React from "react";
import "./todo-item.styles.scss";

const TodoItem = task => {
  console.log(task.task.completed);
  const {
    task: { id, title, completed },
    OnToggle,
    OnDelete
  } = task;
  return (
    <div className="todo-item">
      <span
        className={completed ? "todo-item-completed" : "todo-item-incomplete"}
      >
        {title}
      </span>
      <div className="todo-item-options">
        <input
          type="checkbox"
          id={id}
          className={`${
            completed ? "todo-item-checked" : ""
          } todo-item-checkbox`}
          checked={completed ? true : false}
          onChange={OnToggle}
        />
        <span id={id} onClick={OnDelete} className="todo-item-delete">
          X
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
