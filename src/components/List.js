import React from "react";
export default function List(props) {
  const { tasks } = props;

  return (
    <div className="List">
      {tasks.map((task, index) => {
        return (
          <div className="Tasks" key={index}>
            <span> {task} </span>
            <div className="Delete-Button">
              <button onClick={() => props.deleteTask(index)}> Excluir </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
