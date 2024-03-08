
// import './App.css'
// import React, { useState} from 'react'



// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, { id: Date.now(), text: newTask }]);
//       setNewTask('');
//     }
//   };

//   const handleRemoveTask = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <div className="App">
//       <h1>React Todo List</h1>
//       <div>
//         <input
//         className="inp"
//           type="text"
//           placeholder="Add a new task"
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button  className="but" onClick={handleAddTask}>Add</button>
//       </div>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             {task.text}
//             <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// export default App;
