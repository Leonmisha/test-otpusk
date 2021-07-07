import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import {Switch, Route, HashRouter} from "react-router-dom"

import Auth from './components/Auth/Auth'
import Main from './components/Main/Main'

const App = () => {
  return (

    <div className="App">
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route>
          <Main path="/profile"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
