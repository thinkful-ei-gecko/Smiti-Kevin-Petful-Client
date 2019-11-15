import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Petful</h1>
        <p>Petful is an animal shelter application where you can 
          find dogs and cats to adopt. 
          Click the button to adopt one or both pets.
        </p>
       <button className="start-button">Let's Adopt</button>
      </header>
    </div>
  );
}

export default App;
