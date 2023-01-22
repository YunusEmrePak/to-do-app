import React, { useState, useEffect } from "react";
import Form from "./Form";
import TaskInformation from "./TaskInformation";
import TodoItems from "./TodoItems";

import "./Main.css";

const DUMMY_TASKS = [
  {
    id: "1",
    title: "To do app 1",
  },
  {
    id: "2",
    title: "To do app 2",
  },
  {
    id: "3",
    title: "To do app 3",
  },
];

const Main = () => {
  const [newTasks, setNewTasks] = useState(DUMMY_TASKS);
  const [taskLength, setTaskLength] = useState(newTasks.length);
  const [checkCounter, setCheckCounter] = useState(0);

  const carryData = (data) => {
    setNewTasks((prevData) => {
      setTaskLength((prev) => {
        return prev + 1;
      });
      return [data, ...prevData];
    });
  };

  const onCheckControl = (isChecked) => {
    if (isChecked) {
      setCheckCounter((prev) => {
        return prev + 1;
      });
    } else {
      setCheckCounter((prev) => {
        return prev - 1;
      });
    }
  };

  return (
    <main>
      <div className="form-container">
        <Form item={newTasks} onCarryData={carryData} />
      </div>
      <div className="tasks">
        <TaskInformation len={taskLength} counter={checkCounter} />
      </div>
      <TodoItems item={newTasks} onChecked={onCheckControl} />
    </main>
  );
};

export default Main;
