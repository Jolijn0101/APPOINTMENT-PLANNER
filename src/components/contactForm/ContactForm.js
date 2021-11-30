import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          placeholder="phone-number 0197-267797"
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
