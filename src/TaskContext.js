import React, { createContext, useState } from 'react';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [dolist, setDolist] = useState([]);

  const handleRemoveTask = (taskId) => {
    setDolist(dolist.filter((task) => task.id !== taskId));
  };

  const addTask = (task) => {
    setDolist([...dolist, task]);
  };

  return (
    <TaskContext.Provider value={{ dolist, handleRemoveTask, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
