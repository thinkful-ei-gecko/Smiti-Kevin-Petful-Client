import React, { Component } from 'react';
import {BrowserRouter,  Switch, Route} from 'react-router-dom';
import DashPage from './components/DashPage'
import './App.css';

function LandingPage() {
  return (
    <main>
      <section className="section-landing">
        <h1>Welcome to Petful!</h1>
        <p>To adopt a pet, click on the Adopt a pet. You have to wait in a line.
        Once 'YOU' displays the now serving.</p>
        <p>You will be displayed with an amazing and fluffy cat and dog that are both 
        ready to be adopted! </p>
        <img src = '/catanddog.jpg' alt='imageofcatanddog' />
        <br/>
        <a href="/dash">Adopt a pet</a>
      </section>
    </main>
  );
}

class App extends Component {
  render() {
    return <>
      <header className="header">
        <a href="/"><h1>Petful Agency</h1></a>
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
