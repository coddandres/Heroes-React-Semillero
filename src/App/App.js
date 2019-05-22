import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home/Home';
import Heroes from './components/Heroes/Heroes'
import About from './components/About/About'
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container main-container">
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/heroes" component={Heroes}></Route>
          <Route exact path="/about" component={About}></Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </>
  );
}

export default App;
