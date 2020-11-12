import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <a className="navbar-brand col-md-2 col-sm-3 mr-0 align-items-center">
              Pokedex
            </a>
          </Link>
        </nav>
      </div>
    );
  }
}
