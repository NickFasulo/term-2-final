import React, { Component } from 'react';

export default class Main extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <>
        {this.state.data.map(res => (
          <>
            <div className="main">
              <div className="image">
                <img src={res.image_url} alt="..." />
              </div>
              <div className="content">
                <h1>{res.name}</h1>
                <div className="description">
                  <p>
                    <strong>Description:</strong>&nbsp; {res.description}
                  </p>
                </div>
                <div className="tips">
                  <p>
                    <strong>Tips:</strong>&nbsp; {res.brewers_tips}
                  </p>
                </div>
                <div className="pairing">
                  <strong>Pair With:</strong>
                  <ul>
                    <li>{res.food_pairing[0]}</li>
                    <li>{res.food_pairing[1]}</li>
                    <li>{res.food_pairing[2]}</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </>
    );
  }
}
