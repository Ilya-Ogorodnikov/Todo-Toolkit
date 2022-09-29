import { FC } from 'react';
import { useAppDispatch } from 'src/hooks/redux';
import { deleteAllTodo } from 'src/asyncActions/todo';

const DeleteTodo: FC = () => {
  const dispatch = useAppDispatch();

  const deleteAllTasks = (): void => {
    dispatch(deleteAllTodo());
  };

  return (
    <button
      type="button"
      onClick={deleteAllTasks}
    >
      Удалить все
    </button>
  );
};

export default DeleteTodo;