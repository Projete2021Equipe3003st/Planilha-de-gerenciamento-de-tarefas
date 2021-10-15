import Calendario from './CalendarRecover';
import {handleEdit, handleDelete} from './util'
import { useEffect, useState } from "react";
import './App.css';

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
              <button className="ListButton"  onClick={() => handleEdit(task.id, task.Data, id)}>Editar</button>
              <button className="ListButton" onClick={() => handleDelete(task.id, id)}>Deletar</button>
            </div>
          ))}
          </div>
        );
}
