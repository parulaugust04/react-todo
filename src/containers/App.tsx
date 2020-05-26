import React, {useState, useEffect, Fragment} from 'react';
import '../App.css';
import { TodoList } from '../components/TodoList';
import {TodoForm} from '../components/TodoForm';

//Custom Hook for local storage
function useStateWithLocalStorage(localStorageKey){
  const storedTodos = JSON.parse(localStorage.getItem(localStorageKey)!);
  const [value, setValue] = useState(storedTodos); 
  return value;
};

function App() {
  const initialTodos: Todo[]=  useStateWithLocalStorage('todos') || [];
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
    <Fragment>
      <TodoForm addTodo={addTodo}/>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo}
      />
      <p className="font-xl task-status"> 
        <span className="task-details">Total todos remaining:</span> <b>{todos.length - completedTasks.length}</b> out of <b>{todos.length}</b>
      </p>
    </Fragment>
  );
}

export default App;
