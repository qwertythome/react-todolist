
import './App.css'
import React, { useState} from 'react'

function Todo (){
const [dolist, setdolist]=  useState([])
const [inp, setdsetinpolist]=  useState ('')
const text=(e)=>{
    setdsetinpolist(e.target.value)
}
const click= ()=>{
if(inp!==''){
    setdolist([...dolist, { id: Date.now(), mets: inp }])
    setdsetinpolist('')
}
}

const handleRemoveTask = (taskId) => {
    setdolist(dolist.filter((task) => task.id !== taskId));
  };

return(
    <div className="App">
        <input
        className="inp"
        onChange={text}
        />
        <button 
        className="but"
        
        onClick={click}>

        </button>
        <ul>
        {dolist.map((task) => (
          <li>
            {task.mets}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>

    </div>
)
}

export default Todo;