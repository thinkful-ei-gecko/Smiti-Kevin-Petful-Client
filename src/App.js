import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Adopt from "./components/Adopt/Adopt";
import Home from "./components/Home/Home";

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path='/home' component = {Home} />
          <Route path='/adopt' component = {Adopt} />
        </Switch>       
        </BrowserRouter>     
      </div>
    );
  }
}

export default App;
