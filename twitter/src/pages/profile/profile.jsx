import React from "react";
import { ThemeContext } from "../../context/theme";


import './profile.css'
import SidebarL from "../../components/sidebarLeft/sidebarL";
import SidebarRProfile from "../sidebarRProfile/sidebarRProfile";
import MainProfile from "../mainProfile/mainProfile";

function Profile() {
    const { theme } = React.useContext(ThemeContext)

    return (

        <div id="container" className={theme === 'light' ? 'light' : 'dark'}>
            <SidebarL />
            <MainProfile />
            <SidebarRProfile />

        </div>
    )
}

export default Profile;



