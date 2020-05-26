import React, {useState, useEffect} from 'react';
import './App.css';
import { TodoList } from './TodoList';
import {TodoForm} from './TodoForm';


function App() {
  // const useStateWithLocalStorage: UseStateWithLocalStorage = (localStorageKey: string) => {
  //   const storedTodos: Todo[] = JSON.parse(localStorage.getItem('localStorageKey') || '');
  //   const [value, setValue] = useState(storedTodos);
   
  //   useEffect(() => {
  //     localStorage.setItem(localStorageKey, JSON.stringify(value));
  //   }, [value]);
   
  //   return [value, setValue];
  // };
  const storedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '');
  const initialTodos: Todo[]=  storedTodos || [];
  const [todos,setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo =>{
      if(todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }
  const addTodo: AddTodo = (text: string) =>{
    const newTodo = {text, complete:false};
    setTodos([...todos, newTodo]);
  }
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const completedTasks= todos.filter(todo => todo.complete);
  return (
    <div>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <p className="font-xl"> <span className="task-details">Total todos remaining:</span> <b>{todos.length - completedTasks.length}</b> out of <b>{todos.length}</b></p>
    </div>
  );
}

export default App;
