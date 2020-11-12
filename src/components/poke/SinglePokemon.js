/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const typeColors = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6',
};

export default class SinglePokemon extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokeIndex: '',
    types: [],
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: '',
    },
    height: '',
    weight: '',
    abilities: '',
  };
  async componentDidMount() {
    const { pokeIndex } = this.props.match.params;
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`;

    const response = await axios.get(pokeUrl);

    const name = response.data.name;
    const imageUrl = response.data.sprites.front_default;
    const height = response.data.height / 10;
    const weight = response.data.weight / 10;

    let { hp, attack, defense, speed } = '';

    response.data.stats.map((stat) => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defense = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        default:
          break;
      }
    });
    const types = response.data.types.map((type) => type.type.name);
    const abilities = response.data.abilities
      .map((ability) => {
        return ability.ability.name
          .toLowerCase()
          .split('-')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      })
      .join(', ');

    this.setState({
      imageUrl,
      pokeIndex,
      name,
      types,
      stats: {
        hp,
        attack,
        defense,
        speed,
      },
      height,
      weight,
      abilities,
    });
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>{this.state.pokeIndex}</h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  {this.state.types.map((type) => (
                    <span
                      key={type}
                      className="badge badge-primary badge-pill mr-1"
                      style={{
                        backgroundColor: `#${typeColors[type]}`,
                        color: 'white',
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src={this.state.imageUrl}
                    className="card-image-top single rounded mx-auto mt-2"
                  />
                </div>
                <div className="col-md-6">
                  <h4 className="mx-auto">
                    {this.state.name.charAt(0).toUpperCase() +
                      this.state.name.slice(1)}
                  </h4>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">HP</div>
                    <div className="col-12 col-md-9">{this.state.stats.hp}</div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">Attack</div>
                    <div className="col-12 col-md-9">
                      {this.state.stats.attack}
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">Defense</div>
                    <div className="col-12 col-md-9">
                      {this.state.stats.defense}
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">Speed</div>
                    <div className="col-12 col-md-9">
                      {this.state.stats.speed}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="card-body">
              <h5 className="card-title text-center">Profile</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="float-right">Height:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6 className="float-left">{this.state.height} m </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="float-right">Weight:</h6>
                    </div>
                    <div className="col-md-6">
                      <h6 className="float-left">{this.state.weight} kg </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="float-right">Abilities: </h6>
                    </div>
                    <div className="col-md-6">
                      <h6 className="float-left">{this.state.abilities}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SinglePokemon.propTypes = {
  name: PropTypes.string,
  pokeUrl: PropTypes.string,
};
