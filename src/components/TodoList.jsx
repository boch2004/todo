import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem';
import AddTodo from './AddTodo';

function Todolist() {
  const todos = useSelector((state)=>state.todo.todolist);
  const [showdone, setshowdone] = useState(false);
  console.log(todos)
  return (
    <div className='flex  justify-center  bg-slate-500'>
      
      <div className='w-9/12 text-center text-xl '>
      <AddTodo />
      <button onClick={()=>setshowdone(!showdone)} >{showdone ? "show undone" :"show done"}</button>
      {todos.filter((todo)=>todo.isDone === showdone).map((todo)=>(<Todoitem todo={todo} />))}
      </div>
    </div>
  )
}

export default Todolist