import Calendario from './CalendarRecover';
import {handleEdit, handleDelete} from './util'
import { useEffect, useState } from "react";

export default function ListRecover(props){
const {Atividades} = props
const [id, setId] = useState("");
useEffect(
  ()=>{
    const url=window.location.href
    const res=url.split("?")
    setId(res[1])
  },
  []
)
    return(
        <div className="addList">
        {Atividades.map((task) =>(
            <div key={task.id}>
              {task.Atividade}
              <div>
              <Calendario
              Value={task.Data}/>
              </div>
              <button onClick={() => handleEdit(task.id, task.Data, id)}>Editar</button>
              <button onClick={() => handleDelete(task.id, id)}>Deletar</button>
            </div>
          ))}
          </div>
        );
}
