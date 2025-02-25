import React ,{useState} from 'react';

function TaskForm({addTask}){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    //handle form submission
    const handleSubmit=(e)=>{
        e.preventDefault(); //prevent the page from refreshing
        if(!title)
            return alert("Please enter a title!"); //validate input
         addTask(title,description); //call the addTask functions from props
         setTitle(""); //clear the input fields
         setDescription("");
    };
   return(
    <form onSubmit={handleSubmit}>
        <input
         type="text"
         placeholder='Task Title'
         value={title}
         onChange={(e) => setDescription(e.target.value)}
         />
         <button type="submit">Add Task</button>
    </form>
   );
}
export default TaskForm;