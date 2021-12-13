import { useTodos } from '../hooks/useTodos';

export const TodoHeader = () => {
  const { pendingTodos } = useTodos();
  return <h1>Todos: {pendingTodos}</h1>;
};
