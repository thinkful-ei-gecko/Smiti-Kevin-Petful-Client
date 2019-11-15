import React from "react";


export default function Adopt(props){
    return(
        <div className="Adopt">
           <button onClick = {e => props.history.replace("/adopt")}>Back</button>
           <header className="App-header">
             <h1>Welcome to Petful</h1>
            <p>Petful is an animal shelter application where you can 
            find dogs and cats to adopt. 
            Click the button to adopt one or both pets.
            </p>
        <button className="start-button">Let's Adopt</button>
        </header>
        </div>
    )
}