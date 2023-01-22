import React from "react";
import TodoItem from "./TodoItem";

import "./TodoItems.css";

const TodoItems = (props) => {
  const carryChecked = (isChecked) => {
    props.onChecked(isChecked);
  };
  const changedTasks = props.item.map((task) => (
    <TodoItem item={task} key={task.id} onCarryChecked={carryChecked} />
  ));

  return <div className="all-items">{changedTasks}</div>;
};

export default TodoItems;
