import React from "react";

import './header.css'

import langData from '../../localization/data'
import { Context } from '../../context/localization'
import { ThemeContext } from '../../context/theme'




function Header() {
    const { state, setState } = React.useContext(Context)
    const { theme, setTheme } = React.useContext(ThemeContext)


    return (
        <header className={theme === 'light' ? 'light' : 'dark'}>
            <div className="header_wrapper">
                <h2 className="header__title">{langData[state].header.title}</h2>
                <div>
                    <select value={state} className="header__lang" onChange={(evt) => setState(evt.target.value)}>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                    <select className="header__theme" value={theme} onChange={(evt) => setTheme(evt.target.value)}>
                        <option value="light" >{langData[state].header.theme.light}</option>
                        <option value="dark">{langData[state].header.theme.dark}</option>
                    </select>
                </div>
            </div>
        </header>

    )
}

export default Header
