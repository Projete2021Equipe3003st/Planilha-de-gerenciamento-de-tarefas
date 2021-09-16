import React, { useState } from 'react';

export default function Form(props) {
    const { onSave } = props;
  
    const [text, setText] = useState("");
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input 
        className="inputPrimeiro"
        value={text || ''}
        onChange={e => setText(e.currentTarget.value)} 
        />
        <button 
        className="btn btn-light"
        onClick={() => {
            setText('');
            onSave(text)
        }}
        >
        +
        </button>
      </form>
    );
  }