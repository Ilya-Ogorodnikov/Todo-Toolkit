import {
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import { ITask } from "src/models/ITask";
import { ITodoState } from "./type";

const initialState: ITodoState = {
  todos: [],
  isLoading: false
};

export const todoSclice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    loading(state) {
      state.isLoading = true
    },
    fetchTodo(state, action: PayloadAction<ITask[]>) {
      state.todos = action.payload;
      state.isLoading = false;
    },
    addTodo(state, action: PayloadAction<ITask>) {
      state.todos.push(action.payload);
    },
    deleteAllTodo(state, action: PayloadAction<[]>) {
      state.todos = action.payload;
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(oneTodo => oneTodo._id !== action.payload);
    },
    checkedTask(state, action: PayloadAction<ITask[]>) {
      state.todos = action.payload.sort((a: any, b: any) => a.isCheck - b.isCheck);
    },
    changeTodo(state, action: PayloadAction<ITask>) {
      state.todos.map(item => {
        if (item._id === action.payload._id) {
          item.text = action.payload.text;
        };
        return item;
      });
    }
  }
});

export default todoSclice.reducer;