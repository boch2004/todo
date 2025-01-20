import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, removeTask } from '../redux/todoslice/TodoSilice'
import EditTask from './EditTask'

function Todoitem({todo}) {
  const dispatch=useDispatch()
  return (
    <div className={`box  m-5 flex justify-between items-center todo-item ${todo.isDone ?"done" : "undone"}`}>
      <div>
      <h1>{todo.title}</h1>
      <p className='text-sm'> {todo.description} </p>
      </div>
      <span onClick={()=> dispatch(doneTask({id:todo.id}))}  className='text-sm m-5' >{todo.isDone?"Done" : "Not Done"}</span>
      <EditTask id={todo.id} />
      <button onClick={()=> dispatch(removeTask({id:todo.id}))} >X</button>
      </div>
      
  )
}

export default Todoitem