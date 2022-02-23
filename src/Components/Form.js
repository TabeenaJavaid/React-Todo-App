import React from 'react';
import './Form.css'

function Form ({input,setInput,todos,setTodos,setFilter}) {
const inputhandle = e => {
  setInput(e.target.value)
  console.log(e.target.value);
}
const handleSubmit = e => {
  e.preventDefault();
 setTodos([...todos,{text:input,completed:false, id:Math.random()*1000}])
 setInput('')
}
const handleFilter = (e) => {
setFilter(e.target.value)
}
  return (
<form >
    <input type='text' className='todo-input'onChange={inputhandle} value={input} placeholder='add a todo'/>
    <button onClick={handleSubmit}className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
    </button>
    <div className='select'>
     <select onChange={handleFilter} name='todos' className='filter-todo'>
         <option value ='all'>All</option>            
         <option value ='completed'>Completed</option>
         <option value ='uncompleted'>Uncompleted</option>
     </select>
    </div>
</form>
  )
}

export default Form