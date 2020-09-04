import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}] = useStateValue();
  return (
    <Router>
    <div className="app">
      {!user ? <Login /> :
      (<>
          <Header />
          <div className="app__body">
          <Switch>
          <Route path="/">
            <Home />
          </Route>
          </Switch>
          </div>
      </>
      )}
    </div>
    </Router>
  );
}

export default App;
