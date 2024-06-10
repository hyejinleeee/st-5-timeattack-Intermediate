import { useDispatch } from "react-redux";
import { delTodo, toggleTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleDel = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(delTodo(id));
  };

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {todo.title}</p>
        <p>내용: {todo.content}</p>
      </section>
      <section>
        <button onClick={() => handleDel(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
        <button onClick={() => handleToggle(todo.id)}>삭제</button>
      </section>
    </li>
  );
}
