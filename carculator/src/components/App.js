import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationListInterface from './LocationListInterface';

const App = () => (
  <MuiThemeProvider>
    <LocationListInterface />
  </MuiThemeProvider>
);

export default App;
