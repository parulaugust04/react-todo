import React , {FC} from 'react';
import {TodoItem} from './TodoItem';
interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}
export const TodoList: FC<Props> = ({todos, toggleTodo}) => {
   return (
        <ul className="margin-l-xl todo-list">
            {todos.map(todo =>(
                <TodoItem 
                    key={todo.text} 
                    todo={todo} 
                    toggleTodo={toggleTodo} 
                />
            ))}
        </ul>
   );
};