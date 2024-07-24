/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Colors.jsx
import React from 'react';
import Color from './color';

const Colors = ({ colors }) => {
  return (
    <ul>
      {colors.map(color => (
        <Color key={color.ID} color={color} />
      ))}
    </ul>
  );
};

export default Colors;
