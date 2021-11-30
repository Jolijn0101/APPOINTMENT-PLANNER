import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  nameCheck,
}) => {
  //returns a form with inputs for a name, phonenumber, and email
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Checks if the new name already exist and writes a comment if it is */}
        {nameCheck ? <p style={{ color: 'red' }}>name already exists</p> : null}
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          placeholder="phone-number 0000-000000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          pattern="[0-9]{4}-[0-9]{6}"
        />
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
