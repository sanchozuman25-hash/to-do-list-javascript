import TrashIcon from "./trash-icon";

export default function ToDo({text, deleteTodo, setIsChecked, isChecked}: {text: string, deleteTodo: () => void, setIsChecked: () => void, isChecked: boolean}) {
  return (
    <li className="checkbox">
      <input type="checkbox" onChange={setIsChecked} checked={isChecked}/>
      <h1>{text}</h1>
      <button onClick={deleteTodo}>
        <TrashIcon />
      </button>
    </li>
  );
}