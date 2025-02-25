/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
 import React,{useState} from 'react';
 import {v4 as uuidv4} from 'uuid';
 import TaskForm from "./TaskForm";
 import TaskList from"./TaskList";
 import './App.css'

  function App(){
    const[tasks,setTasks]=useState([]); //state to store the list of tasks
    //function to add a new task
    const addTask=(title,description)=>{
      const newTask={
        id:uuidv4,//generate a unique ID
        title,description,completed:false,};
        setTasks([...tasks,newTask]);//add the new task to the list
      };

      //Function to delete a task
      const deleteTask=(id)=>{
         setTasks(tasks.filter((tasks)=>tasks.id !== id  ));//remove the task with the matching id
      };

      //function to toggle the completetion status of a task
      const toggleComplete=(id)=>{
        setTasks(tasks.map((task)=>task.id===id?{...task,completed}:task));
      };

       return(
        <div className="App">
          <h1>Task Manager</h1>
          <TaskForm addTask={addTask}/>
          <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete}/>

        </div>
       );
    }
  export default App;