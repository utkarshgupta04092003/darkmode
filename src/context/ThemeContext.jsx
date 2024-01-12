import React, { createContext, useState } from 'react'


export const themeContext = createContext(null);
export default function ThemeContext({children}) {

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = ()=>{
        setDarkMode(!darkMode);
    }



  return (
    
    <div>
        <themeContext.Provider value={{darkMode, toggleTheme}}>


            {children}
        </themeContext.Provider>
      
    </div>
  )
}
