import {  setDoc,doc, deleteDoc } from "firebase/firestore";
import db from './firebase'



export const handleEdit = async (id,Data,Especificacao) => {

 var Atividade = prompt("Entre com o novo nome da tarefa")
  const docRef = doc(db,Especificacao,id);
  if(Atividade!=null){
    const payload = {Atividade,Data}
    setDoc(docRef , payload)
  }
};

export const handleDelete = async (id, Especificacao) =>{
const docRef = doc(db,Especificacao,id);
await deleteDoc(docRef);
}
