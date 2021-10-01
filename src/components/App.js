import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./components/firebase";
import './App.css';
import AtividadesEspecificas from "./Paginação";

export default function App() {
  const [text, setText] = useState("");
  const [pagina,setPagina] = useState(0);
  const [Materias, setMaterias] = useState([]);

  const handleNew = async () => {
  const collectionRef = collection(db ,"Materias");
    const payload = {Materia:text}
   await addDoc(collectionRef, payload);
    setText('');
  };


  useEffect(
    ()=>{
      const url=window.location.href
      const res=url.split('materia/')
      setPagina(res[1])
    },
    []
  )

  useEffect(
    () =>
    onSnapshot(collection(db, "Materias"), (snapshot) => 
      setMaterias(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ),
    []
  );

  const LinkPagina=(p)=>{
    if(p==="1"){
      window.open('http://localhost:3000/materia/1' , "_self")
    }
  }
  const retornarPagina=()=>{
    if(pagina==="1"){
      return <AtividadesEspecificas/>
    }
    else{
      return(

<div>
<input 
        value={text}
        onChange={e => setText(e.currentTarget.value)} 
        />
        <button onClick={handleNew}>Adicionar Matéria</button>

        {Materias.map((materia) =>(
            <div key={materia.id}>
              <button onClick={()=>LinkPagina(1)}>{materia.Materia}</button>
            </div>
          ))}
          </div>
      )
    }
  }
  return (
   <>
   {retornarPagina()}
   </>
  );
}