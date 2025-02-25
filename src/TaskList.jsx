import react,{useState} from'react';

function TaskList({tasks,deleteTask,toggleComplete}){
    return(
        <div className='task-list'>
            {tasks.length===0?(
                <p>No tasks found. Add a task to get started!</p>):(
                    tasks.map((task)=>(
                        <div key={task.id} className='task'>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <label>
                                <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={()=>toggleComplete(task.id)}/>
                                completed
                            </label>
                             <button onClick={()=>deleteTask(task.id)}>Delete</button>
                            </div>
                    ))
                )
            }
        </div>
    );
}
export default TaskList;