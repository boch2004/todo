import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/todoslice/TodoSilice'

function AddTodo() {

  const dispatch = useDispatch()
const [task, settask] = useState({
  id: Math.random(),
  title:"",
  description:"",
  isDone:false,
})

  return (
    <div className=' bg-white box m-5 h-12 flex justify-center items-center space-x-10'>
      <input  type='text' placeholder='Enter task titel' onChange={(e)=>{settask({...task,title:e.target.value})}}/>
      <input type='text' placeholder='Enter task description' onChange={(e)=>{settask({...task,description:e.target.value})}} />
      <button onClick={()=>dispatch(addTask(task))}>Add new task</button>
    </div>
  )
}

export default AddTodo