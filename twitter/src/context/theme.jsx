import React from "react";

const ThemeContext = React.createContext()

function Provider({ children }) {
    const [theme, setTheme] = React.useState('light')

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>

}

export { Provider, ThemeContext }