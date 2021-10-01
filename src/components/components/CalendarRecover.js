
import React from 'react';
import DateTimePicker from 'react-datetime-picker';

export default function Calendario(props) {
const {Value} = props

const ValueConverted = Value.seconds * 1000
    
return (
        <>
            <DateTimePicker
            defaultValue={null}
            value={ValueConverted}
            disableCalendar= {true}
            disabled={true}
            />

        </>
    );
}
