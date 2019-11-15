import React from "react";


export default class Adopt extends React.Component{

    constructor(){
        super();
        this.state = {
            cats: [],
            dogs: []
        };
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/cat',{
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({cats: res})
           console.log(res)
        })
    }
    render(){
        
        return(
            <div className="Adopt">
              <li className="">
                  <p>{this.state.cats.length}</p>
              </li>
            </div>
        )
    }
}