import {
  FC,
  useState
} from 'react';
import { addTodo } from 'src/asyncActions/todo';
import { useAppDispatch } from 'src/hooks/redux';
import './style.scss';

const AddTodo: FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const dispatch = useAppDispatch();

  const newTask = (): void => {
    dispatch(addTodo(userInput));
    setUserInput('');
  };

  return (
    <div className="todo__add">
      <div className="todo__add-entry">
        <input
          className="todo__add-input"
          placeholder="Введите новую задачу..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
        <button
          type="button"
          onClick={newTask}
        >
          Добавить
        </button>
    </div>
  );
};

export default AddTodo;