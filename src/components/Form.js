import React, { useState } from 'react';
import {collection, addDoc} from "firebase/firestore"
import db from "./firebase";
import DateTimePicker from 'react-datetime-picker';



export default function Form() {
  const [Value, onChange] = useState(new Date());
    const [text, setText] = useState("");


    const handleNew = async () => {
      const collectionRef = collection(db,"Atividades");
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