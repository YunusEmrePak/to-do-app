import React from "react";
import Form from "./Form";
import TaskInformation from "./TaskInformation";
import TodoItems from './TodoItems';

import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="form-container">
        <Form />
      </div>
      <div className="tasks">
        <TaskInformation />
      </div>
      <TodoItems />
    </main>
  );
};

export default Main;
