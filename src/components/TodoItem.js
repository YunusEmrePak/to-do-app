import React from "react";

import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="todo-items">
      <div className="left">
        <input type="checkbox" />
        <div className="item-task">{props.task}</div>
      </div>
      <button className="delete-button">Delete Task</button>
    </div>
  );
};

export default TodoItem;
