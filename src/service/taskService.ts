import axios from "axios";
import { url } from "src/constant";
import { ITask } from "src/models/ITask";

const getTasks = () => axios.get<ITask[]>(`${url}/allTasks`);

const deleteTasks = () => axios.delete<void>(`${url}/deleteAllTask`);

const deleteOneTask = (_id: string) => axios.delete<void>(`${url}/deleteTask/?id=${_id}`);

const addTask = (text: string) => {
  return axios.post<ITask>(`${url}/createTask`, {
    text,
    isCheck: false
  });
};

const completedOneTask = (_id: string, isCheck: boolean) => {
  return axios.patch<ITask[]>(`${url}/updateTaskCheck`, {
    _id,
    isCheck
  });
};

const saveChangeTask = (_id: string, text: string) => {
  return axios.patch<ITask>(`${url}/updateTaskText`, {
    _id,
    text
  });
};

export {
  addTask,
  deleteTasks,
  getTasks,
  deleteOneTask,
  completedOneTask,
  saveChangeTask
};
