import React, { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const contextValue = {
    tasks,
    completedTasks,
    setTasks,
    setCompletedTasks,
  };
  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskContext;
