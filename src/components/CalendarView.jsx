// src/components/CalendarView.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">📅 My Calendar</h2>
      <Calendar onChange={setDate} value={date} />
      <p className="mt-4 text-center">Selected date: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarView;
