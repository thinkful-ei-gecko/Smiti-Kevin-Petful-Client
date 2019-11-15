import React, { Component } from 'react';



export default class DashPage extends Component {

  constructor(){
    super();

    this.state = {
      cpet: [],
      pets: []
    }
  }


 componentDidMount(){
   const interval = setInterval(() => {
     this.getData();
     this.showAllPets();
   }, 30);
   
 }

 getData(){
   fetch('http://localhost:8080/api/currentpet',{
     method: 'GET'
   })
    .then(res => res.json())
    .then(res => {this.setState({cpet: res})
    })
 }


showAllPets(){
   fetch('http://localhost:8080/api/pets',{
    method: 'GET'
  })
   .then(res => res.json())
   .then(res => {this.setState({pets: res})
   })
 }

adoptPet = (e) => {
 e.preventDefault();
  fetch('http://localhost:8080/api/adopt', {
    method: 'DELETE',
  })
}

  
  render() {
    
    return (
      <div>
        {this.state.cpet === 'null'? 'There is no more pets to be adopted': 
        <>  
        <h1>{this.state.cpet.name}</h1>  
        <img src={this.state.cpet.imageURL} alt={this.state.cpet.imageDescription}></img>  
        <ul className="pet-info">
          <li>Age: <span>{this.state.cpet.age}</span></li>
          <li>Sex: <span>{this.state.cpet.sex}</span></li>
          <li>Breed: <span>{this.state.cpet.breed}</span></li>
          <li>Story: <span>{this.state.cpet.story}</span></li>
          <li>Available:{this.state.cpet.available === 'true'?'Its here to adopt': 'Already Adopted'}</li>
        </ul>
        <button type="button" className="btn-adopt " onClick = {this.adoptPet}>Adopt me!</button>
      
        <section>
        <h1>All Pets To Adopt</h1>
       
        <ul className = "pets">
          {
            this.state.pets.map(pet => (
              <>
             <h1>{pet.name}</h1>  
             <img src={pet.imageURL} alt={pet.imageDescription}/>
              <ul className="pet-info">
                <li>Age: <span>{pet.age}</span></li>
                <li>Sex: <span>{pet.sex}</span></li>
                <li>Breed: <span>{pet.breed}</span></li>
                <li>Story: <span>{pet.story}</span></li>
                <li>Available:{pet.available === 'false'?'Its here to adopt': 'Already Adopted'}</li>
             </ul>
             </>
            ))}
          </ul>
       

        </section>
        </>}
       
      </div>
     
    );
  }
}