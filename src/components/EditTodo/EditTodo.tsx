import {
  FC,
  useState
} from 'react';
import { changeTodo } from 'src/asyncActions/todo';
import { useAppDispatch } from 'src/hooks/redux';
import { IEditTodo } from './type';

const EditTodo: FC<IEditTodo> = ({ text, id, setButtonIdEditTask}) => {
  const [valueChangeInput, setValueChangeInput] = useState(text);
  const dispatch = useAppDispatch();

  const saveTask = (): void => {
    dispatch(changeTodo(id, valueChangeInput));
    setButtonIdEditTask('');
  };

  return (
    <>
      <input
        value={valueChangeInput}
        onChange={(e) => setValueChangeInput(e.target.value)}
        placeholder="Измените задачу..."
      />

      <button
        onClick={saveTask}
        type="button"
      >
        Сохранить
      </button>
    </>
  );
};

export default EditTodo;