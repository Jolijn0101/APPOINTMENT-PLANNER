import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({ contacts, appointments }) => {
  //writes the current url to the location variable
  const location = window.location.href;
  //Checks if the location is the appointment page and returns the correct data for each page
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
