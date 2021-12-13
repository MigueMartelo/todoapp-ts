import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {
  const { todoState, toggleTodo } = useContext(TodoContext);

  return {
    todos: todoState.todos,
    pendingTodos: todoState.todos.filter( todo => !todo.completed).length,
    toggleTodo,
  }
}