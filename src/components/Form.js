import React, { useState } from "react";
import CreateButton from "./CreateButton";

import "./Form.css";

const Form = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const date = new Date(enteredDate);

    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const newTasks = {
      id: Math.random(),
      title: enteredTask,
      year: year,
      month: month,
      day: day
    };

    setEnteredTask("");
    if (enteredTask !== "") {
      props.onCarryData(newTasks);
    }
  };

  const taskHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="🖊️ Add a new task"
        value={enteredTask}
        onChange={taskHandler}
      />
      <input type="date" onChange={dateHandler} min="2023-01-23" max="2024-12-31" />
      <CreateButton />
    </form>
  );
};

export default Form;
