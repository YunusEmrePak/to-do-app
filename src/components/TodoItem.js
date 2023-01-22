import React, { useState } from "react";

import "./TodoItem.css";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
    props.onCarryChecked(!isChecked);
  };

  return (
    <div className="todo-items">
      <div className="left">
        <input type="checkbox" onChange={checkboxHandler} checked={isChecked} />
        <div className="item-task">{props.item.title}</div>
      </div>
      <button className="delete-button">Delete Task</button>
    </div>
  );
};

export default TodoItem;
