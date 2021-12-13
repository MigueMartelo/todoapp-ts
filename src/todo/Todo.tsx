import { TodoProvider } from './context/TodoProvider';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';

export const Todo = () => {
  return (
    <TodoProvider>
      <TodoHeader />
      <TodoList />
    </TodoProvider>
  );
};
