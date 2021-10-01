import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';


export default function Calendario() {
    const [Value, onChange] = useState(new Date());
    return (
        <>
            <DateTimePicker
                onChange={onChange}
                value={Value}
                minDate={new Date()}
            />

        </>
    );
}
