// TODO: todoSlice 를 작성하세요.
import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, title: "할일", content: "내용", isDone: false }];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.push(newTodo);
    },
    delTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      state.map((todo) =>
        todo.id === id ? { ...todo, isDone: !isDone } : todo
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, delTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
