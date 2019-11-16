import React, { Component } from 'react';

export default class DashPage extends Component {
  constructor() {
    super();

    this.state = {
      cpet: null,
      pets: [],
      cuser: null,
      users: [],
    };
  }

  componentDidMount() {
    this.showCurrentPet();
    this.showAllPets();
    this.showUsers();
  }

  showCurrentPet() {
    fetch('http://localhost:8080/api/currentpet', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ cpet: res });
      });
  }

  showAllPets() {
    fetch('http://localhost:8080/api/pets', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ pets: res });
      });
  }

  adoptPet = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/adopt', {
      method: 'DELETE',
    }).then(() => {
      this.showAllPets();
      this.showCurrentPet();
    });
  };

  showUsers() {
    fetch('http://localhost:8080/api/users', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ users: res }, () => {
          if (!this.state.users) {
            this.setState({ cuser: 'YOU' });
            return;
          }

          this.wait = setInterval(() => {
            this.currentUser();
          }, 3000);
        });
      });
  }

  currentUser() {
    fetch('http://localhost:8080/api/currentuser', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ cuser: res }, () => {
          this.showUsers();
          if (this.state.cuser === 'YOU') {
            clearInterval(this.wait);
          }
        });
      });
  }

  restart = () => {
    fetch('http://localhost:8080/api/server', {
      method: 'PATCH',
    }).then(() => {
      clearInterval(this.wait);
      this.showCurrentPet();
      this.showAllPets();
      this.showUsers();
    });
  };

  render() {
    let usersInLine =
      this.state.users && this.state.users.length > 0
        ? this.state.users.map((user) => <h4>{user}</h4>)
        : ' ';

    return (
      <div className="container">
        <button>Reset</button>
        <h2>Now Serving: {!this.state.cuser ? ' ' : this.state.cuser}</h2>
        {usersInLine}

        <h2>Adopt Me!</h2>
        {!this.state.cpet ? (
          <>
            <div>There is no more pets to be adopted</div>
            <button onClick={this.restart}>Reset Server</button>
          </>
        ) : (
          <>
            <img
              src={this.state.cpet.imageURL}
              alt={this.state.cpet.imageDescription}
            ></img>
            <ul className="pet-info">
              <h1>{this.state.cpet.name}</h1>
              <li>
                Age: <span>{this.state.cpet.age}</span>
              </li>
              <li>
                Sex: <span>{this.state.cpet.sex}</span>
              </li>
              <li>
                Breed: <span>{this.state.cpet.breed}</span>
              </li>
              <li>
                Story: <span>{this.state.cpet.story}</span>
              </li>
              <li>
                Available:
                {this.state.cpet.available ? 'Its here to adopt' : 'Already Adopted'}
              </li>
            </ul>
            <button
              type="button"
              className="btn-adopt "
              disabled={this.state.cuser !== 'YOU'}
              onClick={this.adoptPet}
            >
              Adopt me!
            </button>
          </>
        )}
        <section className="pets">
          <h1>All Pets Available to Adopt</h1>

          <ul>
            {this.state.pets.map((pet) => (
              <>
                <h1>{pet.name}</h1>
                <img src={pet.imageURL} alt={pet.imageDescription} />
                <ul className="pet-info">
                  <li>
                    Age: <span>{pet.age}</span>
                  </li>
                  <li>
                    Sex: <span>{pet.sex}</span>
                  </li>
                  <li>
                    Breed: <span>{pet.breed}</span>
                  </li>
                  <li>
                    Story: <span>{pet.story}</span>
                  </li>
                  <li>
                    Available:{pet.available ? 'Its here to adopt' : 'Already Adopted'}
                  </li>
                </ul>
              </>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
