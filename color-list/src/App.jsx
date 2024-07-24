/* eslint-disable no-unused-vars */

import React from 'react';
import Colors from './components/colors';


const App = () => {

  const colors = [
    { ID: 1, Name: 'Red' },
    { ID: 2, Name: 'Green' },
    { ID: 3, Name: 'Blue' }
  ];

  return (
    <div>
      <h1>Color List</h1>
      <Colors colors={colors} />
    </div>
  );
};

export default App;



