import React,{useState,useEffect} from 'react';
import Form from './Components/Form';
import './App.css';
import TodoList from './Components/TodoList';

function App() {

  const [input,setInput] = useState('');
  const [todos,setTodos] = useState([]);
  const [filter,setFilter] = useState('all')
  const [filteredTodos,setFilteredTodos] = useState([])

  useEffect(()=>{
    const filterhandler = () => {
      switch(filter){
        case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed ===true))
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed ===false))
        break;
        default: setFilteredTodos(todos);
        break;
      }
     }
    filterhandler();
  },[filter,todos])
  
 
  return (
    <div className="App">
   <header>
     <h1>Tabeena's Todo-List</h1>
   </header>
   <Form input ={input} todos={todos} setTodos={setTodos} setInput={setInput} setFilter={setFilter}/>
   <TodoList todos={todos} setTodos={setTodos}  filteredTodos= {filteredTodos}/>
    </div>
  );
}

export default App;
