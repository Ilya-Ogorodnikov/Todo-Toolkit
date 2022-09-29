import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlices';

export const rootReducer = combineReducers({
  todoReducer
});