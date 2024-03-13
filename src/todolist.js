import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

function Todo() {
  const { dolist, handleRemoveTask } = useContext(TaskContext);

  return (
    <div>
      <ul>
        {dolist.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
