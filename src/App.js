import React, { Component } from 'react';
import {BrowserRouter,  Switch, Route} from 'react-router-dom';
import DashPage from './components/DashPage'
import './App.css';

function LandingPage(props) {
  return (
    <main>
      <section className="section-landing">
        <article>Welcome to Petful!</article>

        <a href="/dash">Adopt</a>
      </section>
    </main>
  );
}

class App extends Component {
  render() {
    return <>
      <header>
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
