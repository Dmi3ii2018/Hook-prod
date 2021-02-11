import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './light';

const ThemeContext = React.createContext();

const Theme = ({ children }) => {
  return (
    <ThemeContext.Provider value="light">
      <ThemeProvider theme={light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { Theme, ThemeContext };
