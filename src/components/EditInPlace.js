import React, { useEffect, useState, useRef } from 'react';

export default function EditInPlace({ value, onChangeValue }) {
    const [ isEditing, setIsEditing] = useState(false)
    const inputRef = useRef(null)
    const edit = () => setIsEditing(true)
    const done = () => {
        onChangeValue(inputRef.current.value)
        setIsEditing(false)
    }

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing])

    if(isEditing) {
        return <input type="text" defaultValue={value}ref={inputRef} onBlur={done} />
    }
    return(
        <div>
            <h1 onClick={edit}>{value}</h1>
        </div>
    );
}