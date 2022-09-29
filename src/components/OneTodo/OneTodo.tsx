import {
  FC,
  useState
} from 'react';
import EditTodo from 'src/components/EditTodo/EditTodo';
import { IOneTodo } from './type';
import { useAppDispatch } from 'src/hooks/redux';
import {
  checkedTodo,
  deleteOneTodo
} from 'src/asyncActions/todo';
import './style.scss';

const OneTodo: FC<IOneTodo> = ({ task }) => {
  const [buttonIdEditTask, setButtonIdEditTask] = useState('');
  const dispatch = useAppDispatch();

  const editTask = (): void => {
    setButtonIdEditTask(task._id);
  };

  const deleteTask = (): void => {
    dispatch(deleteOneTodo(task._id));
  };

  const completedTask = (): void => {
    dispatch(checkedTodo(task._id, !task.isCheck));
  };

  return (
    <div className="todo__item">
      { buttonIdEditTask === task._id ? (
        <EditTodo
          text={task.text}
          id={task._id}
          setButtonIdEditTask={setButtonIdEditTask}
        />
      ) : (
        <>
          <div className="todo__item-text">{task.text}</div>
          <div className="todo__item-buttons">
            <input
              type="checkbox"
              checked={task.isCheck}
              onChange={completedTask}
            />
            { !task.isCheck && (
              <button
                type="button"
                onClick={editTask}
              >
                Редактировать
              </button>
            )}
            <button
              type="button"
              onClick={deleteTask}
            >
              Удалить
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OneTodo;