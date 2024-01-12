// src/App.js
import React, { useContext } from 'react';
import Home from './components/Home';
import ThemeContext, { themeContext } from './context/ThemeContext';
import ToggleButton from './components/ToggleButton';

function App() {

  return (

    <ThemeContext>

        
      <ToggleButton/>
      
      <div className='flex flex-col lg:flex-row flex-wrap md:flex-nowrap'>
      <Home/>
      <Home/>
    </div>
    </ThemeContext>
  );
}

export default App;