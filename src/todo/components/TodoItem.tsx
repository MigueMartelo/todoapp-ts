import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';

interface TodoItemProp {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProp) => {
  const { toggleTodo } = useTodos();
  const handleClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
      }}
      onClick={handleClick}
    >
      {todo.desc}
    </li>
  );
};
