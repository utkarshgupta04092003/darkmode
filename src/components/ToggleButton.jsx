import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContext'

export default function ToggleButton() {

    const { toggleTheme } = useContext(themeContext);
    return (
        <div className='bg-gray-300 pt-5 fixed right-5'>

            <label className="toggleDarkBtn">
                <input type="checkbox" onClick={toggleTheme} />
                <span className="slideBtnTg round"></span>
            </label>

        </div>
    )
}
