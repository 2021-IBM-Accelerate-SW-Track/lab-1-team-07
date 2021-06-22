import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function ToDoApp() {
  // Manage the list of tasks
  const [taskList, setTaskList] = useState([]);

  // Manages input event
  const [task, setTask] = useState("");

  const [update, setUpdate] = useState("");

  // handleChange: Will be used to keep track of input from input tag
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // handleUpdate: keeps track of input, specifically for input concerning updates
  const handleUpdate = (f) => {
    setUpdate(f.target.value);
   };

  const addTask = () => {
    // When user recieves input create task object
    if (task !== "") {
      const taskDetails = {
        // Creates unique id to reference task
        id: Math.floor(Math.random() * 10000),
        // Takes in task
        value: task, 
        isCompleted: false,
      };

      let inList = false;
      // checks for duplicate inputs
      for(let i =0; i < taskList.length; i++){
        if (task.toLowerCase() === taskList[i].value.toLowerCase()){
          inList = true; //if there is a duplicate, the item not added
        }
      }

      if (inList === false){
        const taskDetails = {
          // Creates unique id to reference task
          id: Math.floor(Math.random() * 10000),
          // Takes in task
          value: task, 
          isCompleted: false,
        };

      // Stores previous state then we append our taskDetail object
      setTaskList([...taskList, taskDetails]);
      }
      else {
        window.alert("Item already in list! Try a difference input.");
      }
    }
  };

  const updateTask = (e ,taskId) => {


    e.preventDefault();

   if(update === task) {
     return;

   } else if (update === "") {
     return;
   } 
    const element = taskList.findIndex((elem) => elem.id === taskId);

    const newTaskList = [...taskList];

    newTaskList[element] = {
      ...newTaskList[element], value: update,
      
      
     };
      setTaskList(newTaskList);
        
  };

  const updateCompleted = (e,id) => {
    e.preventDefault();
     
    //finding the index of the element
    const element = taskList.findIndex((elem) => elem.id === id);

    //copy the array over
    const newTaskList = [...taskList];

    //update the element
    newTaskList[element] = {
      ...newTaskList[element], isUpdated: !newTaskList[element].isUpdated,

    };
    
    setTaskList(newTaskList);
    updateTask(e,id);
  }; 
  
  const deleteTask = (e,id) => {
    e.preventDefault();
    //present all list items except data that has input id
    setTaskList(taskList.filter((data)=>data.id !== id));
    
  };

  const taskCompleted = (e,id) => {
    e.preventDefault();
     
    //finding the index of the element
    const element = taskList.findIndex((elem) => elem.id === id);

    //copy the array over
    const newTaskList = [...taskList];

    //edit the element
    newTaskList[element] = {
      ...newTaskList[element], isCompleted: !newTaskList[element].isCompleted,

    };
    setTaskList(newTaskList);
  }
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log("taskList", taskList);

  return (
    //the text bar to input task
    <div className="todo">
      <input 
        className="input-bar"
        type="text" 
        name="text" 
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add task here..." />
        
      <Button className="add-task-button" onClick={addTask}>
        Add
      </Button>

      {/*Display To Do list*/}
      <br/>

      {taskList !== [] ? (
        <ul>
          {taskList.map((t) => (
              <li className={t.isCompleted ? "crossText" : "listitem"}>
              {t.value + " " + "Date of addition: " + date + " | " + "Time of addition: " + time}
              <button className = "completed" onClick={(e) => taskCompleted(e, t.id)}
              >
               {t.isCompleted ? <div>Undo</div> : <div>Completed</div>}
              </button>

              { t.isUpdated ? (
                <>
              <button className = "update" onClick={(e) => updateCompleted(e, t.id)}>
              <div> Update </div> 
                </button>
                 <input
                   type = 'text'
                   placeholder='Update your item'
                   onChange={(e) => handleUpdate(e)}
                   name='text'
                   id= 'utext'
                   className='updateinput'/> 
                   </>
              ) :
              (<button className = "update" onClick={(e) => updateCompleted(e,t.id)}
              >
              <div> Update </div>
              </button>) 
               } 

              <IconButton aria-label="delete" className="deleted" onClick = {(e) => deleteTask(e, t.id)}>
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
        </ul>
      ) : null}
    </div>);
}

export default ToDoApp;
