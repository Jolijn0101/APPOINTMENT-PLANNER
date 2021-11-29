import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <Tile contact={contact} key={index} />
      ))}
    </ul>
  );
};
