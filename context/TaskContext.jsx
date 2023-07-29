import React, { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "My List",
      theme: "red"
    },
    {
      id: 2,
      title: "My List",
      theme: "blue"
    },
    {
      id: 3,
      title: "My List",
      theme: "green"
    },
    {
      id: 4,
      title: "My List",
      theme: "blue"
    },
    {
      id: 5,
      title: "My List",
      theme: "blue"
    },
    {
      id: 6,
      title: "My List",
      theme: "blue"
    },
    {
      id: 7,
      title: "My List",
      theme: "blue"
    },
  ]);

  const contextValue = {
    tasks,
    setTasks,
    lists,
    setLists,
  };
  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskContext;
