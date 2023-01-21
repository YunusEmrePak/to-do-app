import React from "react";
import TodoItem from "./TodoItem";

import "./TodoItems.css";

const TodoItems = () => {
  return (
    <div>
      <TodoItem task="todoApp" />
      <TodoItem task="todoApp2" />
      <TodoItem task="todoApp3" />
    </div>
  );
};

export default TodoItems;
