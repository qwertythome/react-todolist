import React from 'react';
import Todo from './todolist';
import Inp from './input';
import { TaskProvider } from './TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Inp />
        <Todo />
      </div>
    </TaskProvider>
  );
}

export default App;
