import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokeIndex: '',
    isLoading: true,
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokeIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokeIndex });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-4 col-6 mb-5">
        <Link
          to={`pokemon/${this.state.pokeIndex}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="card list">
            <h5 className="card-header"gi>{this.state.pokeIndex}</h5>
            
            <img
              src={this.state.imageUrl}
              className="card-img-top list rounded mx-auto mt-2"
            />
            <div className="card-body mx-auto">
              <h6 className="card-title ">
                {this.state.name.charAt(0).toUpperCase() +
                  this.state.name.slice(1)}
              </h6>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};
