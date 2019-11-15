import React from 'react';

export default class Adopt extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      dogs: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/cat', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((cat) => {
        this.setState({ cats: [cat] });
      });
  }
  render() {
    if (this.state.cats.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="Adopt">
          <li className="">
            <p>{this.state.cats[0].name}</p>
          </li>
        </div>
      );
    }
  }
}
