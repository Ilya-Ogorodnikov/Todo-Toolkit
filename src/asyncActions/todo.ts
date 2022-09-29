import { isValidValueInput } from "src/helpers/validation";
import { todoSclice } from 'src/store/reducers/todoSlices';
import {
  addTask,
  completedOneTask,
  deleteOneTask,
  deleteTasks,
  getTasks,
  saveChangeTask
} from "src/service/taskService";
import { AppDispatch } from "src/store";

const fetchTodo = () => async (dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(todoSclice.actions.loading());
    const response = await getTasks();
    dispatch(todoSclice.actions.fetchTodo(response.data));
  } catch (error) {
    alert('Ошибка в получении задач');
  };
};

const addTodo = (textFromInput: string) => async (dispatch: AppDispatch): Promise<void> => {
  try {
    if (!isValidValueInput(textFromInput)) {
      throw new Error();
    };
    const response = await addTask(textFromInput);
    dispatch(todoSclice.actions.addTodo(response.data));
  } catch (error) {
    alert('Ошибка в добавлении задачи');
  };
};

const deleteAllTodo = () => async (dispatch: AppDispatch): Promise<void> => {
  try {
    await deleteTasks();
    dispatch(todoSclice.actions.deleteAllTodo([]));
  } catch (error) {
    alert('Ошибка в удалении всех задач');
  };
};

const deleteOneTodo = (_id: string) => async (dispatch: AppDispatch): Promise<void> => {
  try {
    await deleteOneTask(_id);
    dispatch(todoSclice.actions.deleteTask(_id));
  } catch (error) {
    alert('Ошибка в удалении задачи');
  };
};

const checkedTodo = (_id: string, isCheck: boolean) => async (dispatch: AppDispatch): Promise<void> => {
  try {
    const response = await completedOneTask(_id, isCheck);
    dispatch(todoSclice.actions.checkedTask(response.data));
  } catch (error) {
    alert('Ошибка в выполнении задачи');
  };
};

const changeTodo = (_id: string, text: string) => async (dispatch: AppDispatch): Promise<void> => {
  try {
    if (!isValidValueInput(text)) {
      throw new Error();
    };
    const response = await saveChangeTask(_id, text);
    dispatch(todoSclice.actions.changeTodo(response.data));
  } catch (error) {
    alert('Ошибка в изменении задачи');
  };
};

export {
  fetchTodo,
  addTodo,
  deleteAllTodo,
  deleteOneTodo,
  checkedTodo,
  changeTodo
};