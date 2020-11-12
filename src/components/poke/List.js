import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

export default class List extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
    pokemon: null,
  };

  async componentDidMount() {
    const response = await axios.get(this.state.url);
    this.setState({ pokemon: response.data['results'] });
  }
  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon, index) => (
              <Card key={index} name={pokemon.name} url={pokemon.url} />
            ))}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
