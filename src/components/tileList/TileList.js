import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({ contacts, appointments }) => {
  const location = window.location.href;
  if (location === 'http://localhost:3000/appointments') {
    return (
      <ul>
        {appointments.map((item, index) => (
          <Tile item={item} key={index} />
        ))}
      </ul>
    );
  } else {
    return (
      <ul>
        {contacts.map((item, index) => (
          <Tile item={item} key={index} />
        ))}
      </ul>
    );
  }
};
