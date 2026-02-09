import TrashIcon from "./trash-icon";

export default function ToDo({text, deleteTodo}: {text: string, deleteTodo: () => void}) {
  return (
    <li className="checkbox">
      <input type="checkbox" />
      <h1>{text}</h1>
      <button onClick={deleteTodo}>
        <TrashIcon />
      </button>
    </li>
  );
}