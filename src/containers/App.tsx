import React, {useState, useEffect} from 'react';
import '../App.css';
import { TodoList } from '../components/TodoList';
import {TodoForm} from '../components/TodoForm';

function useStateWithLocalStorage(localStorageKey){
  const storedTodos = JSON.parse(localStorage.getItem('localStorageKey') || '');
  const [value, setValue] = useState(storedTodos);
 
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);
 
  return [value, setValue];
};
function App() {
  //Custom Hook for local storage
  
  // console.log(useStateWithLocalStorage('todos'));
  const storedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '');
  const initialTodos: Todo[]=  storedTodos || [];
  const [todos,setTodos] = useState(initialTodos);

  //Function for handling toggle of list items
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

  //Function for adding todo
  const addTodo: AddTodo = (text: string) =>{
    const newTodo = {text, complete:false};
    setTodos([...todos, newTodo]);
  }
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  //Function for calculating completed tasks
  const completedTasks= todos.filter(todo => todo.complete);

  return (
    <div>
      <TodoForm addTodo={addTodo}/>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo}
      />
      <p className="font-xl task-status"> 
        <span className="task-details">Total todos remaining:</span> <b>{todos.length - completedTasks.length}</b> out of <b>{todos.length}</b>
      </p>
    </div>
  );
}

export default App;
