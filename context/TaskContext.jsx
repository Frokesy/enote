import React, { createContext } from 'react';

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const contextValue = 'Hello from Context';

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
