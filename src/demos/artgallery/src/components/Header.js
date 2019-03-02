import React, { Component } from 'react';
import banner from '../images/starrynight.png';

export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="banner">
            <img src={banner} width="100%" height={300}/>
        </div>
      </div>
    );
  }
}