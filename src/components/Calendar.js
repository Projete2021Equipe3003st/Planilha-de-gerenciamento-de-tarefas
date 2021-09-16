
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

export default function Calendario() {
    const [value, onChange] = useState(new Date());
 
    console.log(value);

    return (
        <>
            <DateTimePicker
                onChange={onChange}
                value={value}
                minDate={new Date()}
                selectRange={false}
            />

        </>
    );
}
