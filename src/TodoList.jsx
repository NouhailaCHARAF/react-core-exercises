import { useState } from "react"


export default function TodoList(){
 

const [list,setList]=useState([])
const[task,setTask]=useState("")

const handleAddTask = () => {
  if (task.trim() === "") return; 
  setList([...list, task]); 
  setTask(""); 
  };


const handleDeleteTask=(indexToDelete)=>{
const updatedList=list.filter((_,index)=>index!==indexToDelete)
   setList(updatedList)
  }

    return(

  <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-6">Task Manager</h2>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={task}
            onChange={(e)=>setTask(e.target.value)}/>

          <button
            className="px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            type="button"
            onClick={handleAddTask}
            >
            Add
          </button>
        </div>

    
        <div className="min-h-[200px] border-2 border-dashed border-gray-300 rounded-xl p-4">
        <ul>
         {list.map((item,index)=>(<li key={index}><span className="text-gray-800 font-medium">{item}</span>

         <button
          type="button"
          onClick={() => handleDeleteTask(index)}
          className="text-gray-400 hover:text-red-500 font-bold transition-colors px-2"
           >
             ✖️
         </button>
         </li>))}

       </ul>
        </div>

      </div>

    </div>


    )
}