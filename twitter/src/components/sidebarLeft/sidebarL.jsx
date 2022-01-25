import React from "react";
import { useNavigate } from 'react-router-dom'

import langData from '../../localization/data'
import { Context } from '../../context/localization'
import { ThemeContext } from '../../context/theme'

import './sidebarL.css'



function SidebarL() {
    const { state, setState } = React.useContext(Context)
    const { theme } = React.useContext(ThemeContext)
    const navigate = useNavigate();


    return (

        <div id="sidebarL-wrapper" className={theme === 'light' ? 'light' : 'dark'}>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" alt="twitter-logo" />
            </div>
            <ul className="navbar">
                <li className="navbar__home">
                    <button onClick={() => navigate("/home")}>
                        <a href="">
                            {langData[state].sidebarL.nav.home}
                        </a>
                    </button>
                </li>
                <li className="navbar__explore">
                    <a href="">
                        {langData[state].sidebarL.nav.explore}
                    </a>
                </li>
                <li className="navbar__notifications">
                    <a href="">
                        {langData[state].sidebarL.nav.notifications}
                    </a>
                </li>
                <li className="navbar__messages">
                    <a href="">
                        {langData[state].sidebarL.nav.messages}
                    </a>
                </li>
                <li className="navbar__bookmarks">
                    <a href="">
                        {langData[state].sidebarL.nav.bookmarks}
                    </a>
                </li>
                <li className="navbar__lists">
                    <a href="">
                        {langData[state].sidebarL.nav.lists}
                    </a>
                </li>
                <li className="navbar__profile">
                    <button onClick={() => navigate("/profile/1")}>
                        {langData[state].sidebarL.nav.profile}
                    </button>
                </li>
                <li className="navbar__more">
                    <a href="">
                        {langData[state].sidebarL.nav.more}
                    </a>
                </li>
            </ul>
            <div className="btn-sidebar">{langData[state].sidebarL.btn}</div>
        </div>

    )
}

export default SidebarL