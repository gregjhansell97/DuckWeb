import React from 'react';
import '../css/header.css';

export default class Header extends React.Component {
  render() {
    return (
    	<div className="header">
            <img src="static/img/bannerart.jpg" />
    		<h1 className="title">Art Gallery</h1>
		</div>
    );
  }
}
