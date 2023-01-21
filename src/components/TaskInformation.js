import React from "react";

import "./TaskInformation.css";

const TaskInformation = () => {
  return (
    <div className="task-information">
      <div className="created-task">
        <div className="created-label">Created Tasks</div>
        <div className="task-number-out">
          <div className="task-number">3</div>
        </div>
      </div>
      <div className="completed-tasks">
        <div className="completed-label">Completed</div>
        <div className="completed-tasks-number-out">
          <div className="completed-tasks-number">0 of 3</div>
        </div>
      </div>
    </div>
  );
};

export default TaskInformation;
