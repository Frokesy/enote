import React, { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Buy Milk",
      note: "Buy 2% milk for the kids",
      schedule: "Today",
      category: "Must do",
    },
  ]);
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
