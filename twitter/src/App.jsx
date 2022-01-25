import logo from './logo.svg';
import './App.css';

import React from 'react';
import { AContext } from './context/Authentication';

import Authenticated from './Authenticated';
import UnAuthenticated from './UnAuthenticated';

function App() {
  const { token } = React.useContext(AContext)

  if (token) {
    return <UnAuthenticated />
  } else {
    return <Authenticated />
  }
}

export default App;