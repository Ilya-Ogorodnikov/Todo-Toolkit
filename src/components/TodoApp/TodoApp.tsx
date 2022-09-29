import {
  FC,
  useEffect
} from 'react';
import {
  useAppDispatch,
  useAppSelector
} from 'src/hooks/redux';
import { fetchTodo } from 'src/asyncActions/todo';
import AddTodo from 'src/components/AddTodo/AddTodo';
import OneTodo from 'src/components/OneTodo/OneTodo';
import DeleteTodo from 'src/components/DeleteTodo/DeleteTodo';

const TodoApp: FC = () => {
  const dispatch = useAppDispatch();
  const { todos, isLoading } = useAppSelector(state => state.todoReducer);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <h1>Идет загрузка...</h1>
      ) : (
        <>
          <AddTodo/>
          {todos.map(task => (
            <OneTodo
              task={task}
              key={task._id}
            />
          ))}
          <DeleteTodo/>
        </>
      )}
    </>
  );
};

export default TodoApp;
