import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({ contacts, appointments }) => {
  const location = window.location.href;
  if (location === 'http://localhost:3000/appointments') {
    return (
      <ul>
        {appointments ? (
          appointments.map((item, index) => <Tile item={item} key={index} />)
        ) : (
          <p>No appointments for display</p>
        )}
      </ul>
    );
  } else {
    return (
      <ul>
        {contacts ? (
          contacts.map((item, index) => <Tile item={item} key={index} />)
        ) : (
          <p>No contacts for display</p>
        )}
      </ul>
    );
  }
};
