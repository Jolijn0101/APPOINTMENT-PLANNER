import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="date"
          value={date}
          type="date"
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
        />
        <input
          placeholder="time"
          value={time}
          type="time"
          onChange={(e) => setTime(e.target.value)}
        />
        <ContactPicker contacts={contacts} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
