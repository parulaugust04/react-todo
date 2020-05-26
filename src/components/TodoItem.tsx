import React from 'react';
interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}
export const TodoItem: React.FC<Props>= ({todo, toggleTodo}) => {
   return (
        <li 
            style={{textDecoration: todo.complete ? 'line-through': undefined}} 
            onClick={()=>{toggleTodo(todo)}} 
            className="list-item font-lg"
        >
            {todo.text}
        </li>
   );
};