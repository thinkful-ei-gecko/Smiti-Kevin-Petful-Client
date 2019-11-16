import React, { Component } from 'react';
import {BrowserRouter,  Switch, Route} from 'react-router-dom';
import DashPage from './components/DashPage'
import './App.css';

function LandingPage() {
  return (
    <main>
      <section className="section-landing">
        <h1>Welcome to Petful!</h1>
        <a href="/dash">Adopt a pet</a>
      </section>
    </main>
  );
}

class App extends Component {
  render() {
    return <>
      <header className="header">
        <a href="/"><h1>Petful</h1></a>
      </header>
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dash" component={DashPage} />
      </Switch>
    </BrowserRouter>
      
    </>;
  }
}

export default App;
