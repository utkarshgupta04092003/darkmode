import React, { createContext, useEffect, useState } from 'react'


export const themeContext = createContext(null);
export default function ThemeContext({children}) {

    let localTheme = localStorage.getItem('darkmode');

    if(localTheme == 'false' || localTheme == null) {
      localTheme = false;
    }else{
      localTheme = true;
    }
    console.log('localtheme', localTheme);
    const [darkMode, setDarkMode] = useState(localTheme);
    console.log(darkMode);
    const toggleTheme =   ()=>{
        // console.log('toggle theme clicked', darkMode);
        localStorage.setItem('darkmode',!darkMode);
        setDarkMode(!darkMode);
        // console.log('toggle theme clicked', darkMode);
    }

  return (
    
    <div>
        <themeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </themeContext.Provider>
      
    </div>
  )
}



// import React, { createContext, useEffect, useState } from 'react'


// export const themeContext = createContext(null);
// export default function ThemeContext({children}) {
//     let localTheme = false;
//     if(localStorage.getItem('darkmode') == 'false') {
//       localTheme = false;
//     } else {
//       localTheme = true;
//     }
//     console.log('localtheme', localTheme);
//     const [darkMode, setDarkMode] = useState(localTheme == null ? false : localTheme);
//     console.log(darkMode);
//     const toggleTheme =   ()=>{
//         console.log('toggle theme clicked', darkMode);
//         localStorage.setItem('darkmode',!darkMode);
//         setDarkMode(!darkMode);
//         console.log('toggle theme clicked', darkMode);
//     }

//     useEffect(() => {
//       setDarkMode(localTheme)
//     },[])



//   return (
    
//     <div>
//         <themeContext.Provider value={{darkMode, toggleTheme}}>


//             {children}
//         </themeContext.Provider>
      
//     </div>
//   )
// }
