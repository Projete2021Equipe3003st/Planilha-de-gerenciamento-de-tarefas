import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
export default function Calendar() {
    return (
        <div className="calendar">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
        </div>
    );
} 