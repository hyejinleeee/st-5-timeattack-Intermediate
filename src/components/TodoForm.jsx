import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>내용: </label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>추가</button>
    </form>
  );
}