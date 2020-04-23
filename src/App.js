import React from 'react';
import { useState } from 'react';
import Header from './Header';
import SideDrawer from './SideDrawer';
import './App.css';

const App = () => {

  const [state, setState] = useState({
    drawerOpen: false
  });

  const drawerOpen = (event) => {
    setState({...state, drawerOpen: true});
  }

  const drawerClose = (event) => {
    setState({...state, drawerOpen: false});
  }

  return (
      <div className="App">
        <Header clickHandler={drawerOpen} />
        <SideDrawer drawerState={state.drawerOpen} closeHandler={drawerClose}/>
      </div>
  );
}

export default App;
