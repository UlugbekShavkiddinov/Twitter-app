import React from "react";
import { Children } from "react/cjs/react.production.min";

const AContext = React.createContext();

function Provider({ children }) {
    const [token, setToken] = React.useState(
        JSON.parse(window.localStorage.getItem('token')) || false,
    );

    React.useEffect(() => {
        if (token) {
            window.localStorage.setItem('token', JSON.stringify(token));
        } else {
            window.localStorage.removeItem('token');
        }
    }, [token]);
    return (
        <AContext.Provider value={{ token, setToken }}>
            {children}
        </AContext.Provider>
    )

}

export { Provider, AContext }