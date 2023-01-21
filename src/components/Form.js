import React from "react";
import CreateButton from "./CreateButton";

import "./Form.css";

const Form = () => {
  return (
    <form>
      <input placeholder="🖊️ Add a new task" />
      <div className="deneme"></div>
      <CreateButton />
    </form>
  );
};

export default Form;
