import React, { useState } from "react";

import "./TodoItem.css";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
    props.onCarryChecked(!isChecked);
  };

  const deleteHandler = () => {
    props.onDeleteHandler(props.item.id, isChecked);
  };

  return (
    <div className="todo-items">
      <div className="left">
        <input type="checkbox" onChange={checkboxHandler} checked={isChecked} />
        <div className="item-date">
          <div className="date-tasks">
            <div className="year">{props.item.year}</div>
            <div className="month">{props.item.month}</div>
            <div className="day">{props.item.day}</div>
          </div>
          <div className="item-task">{props.item.title}</div>
        </div>
      </div>
      <button className="delete-button" onClick={deleteHandler}>
      🗑️
      </button>
    </div>
  );
};

export default TodoItem;
