import React, {FC, useState} from 'react';
interface props {
    addTodo: AddTodo;
}
export const TodoForm: FC<props> = ({addTodo}) =>{
    const [text, setText] = useState('');
    return (
        <form className="txt-c">
            <input 
                type="text" 
                className="font-lg todo-text"
                value={text} 
                placeholder="Enter your todo here"
                onChange= {e =>setText(e.target.value)}
            />
            <button 
                type="submit" 
                className="add-btn font-lg"
                onClick={e=>{
                    e.preventDefault();
                    if(text.trim()){
                        addTodo(text);setText('');
                    }
                }}
            >
                Add
            </button>
        </form>
    )
}