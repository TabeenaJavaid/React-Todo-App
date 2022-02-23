import React from 'react'
import './Todo.css'

function Todo({text,todo,todos,setTodos}) {

  const handleDelete = () => {
   setTodos(todos.filter((el)=> el.id !==todo.id))
  }
  const handlComplete = () => {
   setTodos(todos.map(item => {
     if(item.id === todo.id){
      return {
      ...item, completed: !item.completed
    };
  }
  return item;
}))
}


  return (
      <div className='todo'>
          <li className={`todo-item ${todo.completed ? 'completed':''} `} > {text} </li>
          <div>
          <button onClick={handlComplete} className='complete-btn'> <i className='fas fa-check'></i></button>
          <button onClick={handleDelete} className='trash-btn'> <i className='fas fa-trash'/></button>
          </div>
      </div>
    
  )
}

export default Todo