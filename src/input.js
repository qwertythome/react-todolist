import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

function Inp() {
  const { addTask } = useContext(TaskContext);
  const [inp, setInp] = useState('');

  const text = (e) => {
    setInp(e.target.value);
  };

  const click = () => {
    if (inp !== '') {
      addTask({ id: Date.now(),text: inp })
      setInp('');
    }
  };

  return (
    <div>
      <input className="inp" onChange={text} />
      <button className="but" onClick={click}>
        Add Task
      </button>
    </div>
  );
}

export default Inp;
