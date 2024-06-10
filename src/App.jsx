import { useSelector } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// TODO: todos 상태를 리덕스를 이용한 전역상태로 관리한 투두리스트를 작성해 보세요.
function App() {
  const todos = useSelector((state) => state.todos);

  const workingTodos = todos.filter((todo) => todo.isDone === false);
  const doneTodos = todos.filter((todo) => todo.isDone === true);

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm />
      <TodoList todos={workingTodos} />
      <TodoList todos={doneTodos} />
    </>
  );
}

export default App;
