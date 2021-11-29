import React from 'react';

export const Tile = ({ contact }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{contact.Name}</p>
      <p>{contact.PhoneNumber}</p>
      <p>{contact.Email}</p>
      <hr />
    </div>
  );
};
