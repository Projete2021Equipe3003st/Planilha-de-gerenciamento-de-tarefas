import { useState } from "react";

export default function Form(props) {
  const { onSave } = props;

  const [text, setText] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="entre aqui com a tarefa"
        className="Task-Field"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button
        className="Save-Button"
        onClick={() => {
          onSave(text);
          setText("");
        }}
      >
        Salvar
      </button>
    </form>
  );
}
