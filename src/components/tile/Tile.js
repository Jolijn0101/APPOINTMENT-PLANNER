import React from 'react';

export const Tile = ({ item }) => {
  //returns a new tile element, the numbers point out with element will be displayed
  return (
    <div className="tile-container">
      <p className="tile-title">{item[0]}</p>
      <p>{item[1]}</p>
      <p>{item[2]}</p>
      {item[3] ? <p>{item[3]}</p> : null}
      <hr />
    </div>
  );
};
