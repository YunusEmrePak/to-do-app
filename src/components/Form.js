import React, { useState } from "react";
import CreateButton from "./CreateButton";

import "./Form.css";

const Form = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newTasks = {
      id: Math.random(),
      title: enteredTask,
    };

    setEnteredTask("");
    if (enteredTask !== "") {
      props.onCarryData(newTasks);
    }
  };

  const taskHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="🖊️ Add a new task"
        value={enteredTask}
        onChange={taskHandler}
      />
      <CreateButton />
    </form>
  );
};

export default Form;
