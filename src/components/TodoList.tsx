import React , {FC} from 'react';
import {TodoItem} from './TodoItem';
interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}
export const TodoList: FC<Props> = ({todos, toggleTodo}) => {
   return (
        <ul className="todo-list">
            {todos.map((todo,index) =>(
                <TodoItem 
                    key={`${todo.text} ${index}`} 
                    todo={todo} 
                    toggleTodo={toggleTodo} 
                />
            ))}
        </ul>
   );
};