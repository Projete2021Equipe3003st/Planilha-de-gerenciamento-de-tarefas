import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";
import './App.css';
import  Form  from './Form';
import ListRecover from "./ListRecover";

export default function AtividadesEspecificas(props) {
  const [Atividades, setAtividades] = useState([]);
  const {id}=props

  useEffect(
      ()=>{
      onSnapshot(collection(db, id), (snapshot) => 
      setAtividades(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))))
    },[]
)



  return (
    <div className="App">
<Form/>
<ListRecover
Atividades={Atividades}/>
    </div>
  );
}
