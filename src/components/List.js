//import React, { useState } from 'react';
import Calendario from './Calendar';
//import EditInPlace from './EditInPlace';

export default function List(props) {

  //const [toDo, setToDo] = useState('Editar texto'); // EditInPlace

  const { tasks } = props;

  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div className="List" key={index}>
            <span className={task.isComplete ? 'complete' : ''}>
              {task.task}
            </span>

            <div>
              <div>
                <Calendario />
              </div>
              <button 
                className="btn btn-light" 
                onClick={() => props.deleteTask(index)}>
                ⨉
              </button>
              <button 
                className="btn btn-light" 
                onClick={() => props.completeTask(index)}
              >
                Completar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}