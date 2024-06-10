import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <section>
      <h2>Working...</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
