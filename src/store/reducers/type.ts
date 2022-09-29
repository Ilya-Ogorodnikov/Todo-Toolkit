import { ITask } from 'src/models/ITask'

export interface ITodoState {
  todos: ITask[],
  isLoading: boolean
};