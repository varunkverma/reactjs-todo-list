import React from "react";
import "./todo-form.styles.scss";

const TodoForm = ({ OnAdd }) => {
  console.log(OnAdd);
  return (
    <div className="todo-form-sec">
      <form onSubmit={OnAdd} className="todo-form-sec-inner">
        <input
          type="text"
          name="taskText"
          className="todo-form-sec-group"
          placeholder="Enter a task..."
        />
        <button type="submit" className="btn btn-submit">
          +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
