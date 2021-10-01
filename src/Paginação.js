import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./components/firebase";
import './App.css';
import  Form  from './components/Form';
import ListRecover from "./components/ListRecover";

export default function AtividadesEspecificas() {
  const [Atividades, setAtividades] = useState([]);
  useEffect(
    () =>
    onSnapshot(collection(db, "Atividades"), (snapshot) => 
      setAtividades(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ),
    []
  );

  return (
    <div className="App">
<Form/>
<ListRecover
Atividades={Atividades}/>
    </div>
  );
}
