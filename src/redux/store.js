import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './todo/reducer';

export default configureStore({
  reducer: {
    todo: TodoReducer
  }
});
