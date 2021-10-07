import React, { useState, useEffect } from 'react';
import {collection, addDoc} from "firebase/firestore"
import db from "./firebase";
import DateTimePicker from 'react-datetime-picker';



export default function Form() {
  
  const [Value, onChange] = useState(new Date());
    const [text, setText] = useState("");
    const [id, setId] = useState("");
    useEffect(
      ()=>{
        const url=window.location.href
        const res=url.split("?")
        setId(res[1])
      },
      []
    )

    const handleNew = async () => {
      const collectionRef = collection(db,id);
      const payload = {Atividade:text, Data:Value}
      await addDoc(collectionRef, payload);
      setText('');
    };
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input 
        className="inputPrimeiro"
        value={text}
        onChange={e => setText(e.currentTarget.value)} 
        />
        <DateTimePicker
                onChange={onChange}
                value={Value}
                minDate={new Date()}
            />
        <button 
        className="btn btn-light"
        onClick={handleNew}
        >
        +
        </button>
      </form>
      
    );
  }