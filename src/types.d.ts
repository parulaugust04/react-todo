interface Todo{
    text:string;
    complete: boolean;
}
type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string) => void;
type UseStateWithLocalStorage = (text: string) => void;