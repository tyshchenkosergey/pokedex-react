import React, { Component } from 'react';
import List from '../poke/List';

export default class ShowCards extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <List />
        </div>
      </div>
    );
  }
}
