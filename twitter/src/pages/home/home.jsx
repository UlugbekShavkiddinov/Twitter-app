import React from "react";

import Header from '../../components/header/header'
import Main from '../../components/main/main'
import SidebarL from '../../components/sidebarLeft/sidebarL'
import SidebarR from '../../components/sidebarRight/sidebarR'

function Home() {
    return (
        <>
            <SidebarL />
            <Main />
            <SidebarR />

        </>
    );
}

export default Home;