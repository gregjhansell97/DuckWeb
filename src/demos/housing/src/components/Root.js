import React from 'react';

//inhouse
import Header from "./Header"
import TileGallery from "./TileGallery"
import HouseCard from "./HouseCard"
import '../css/body.css';

class Root extends React.Component {
  	render() {

  		let houses = [
  			{location: 'Los Angeles, USA', estimate: '$2', image: 'static/img/losangeles.jpg'},
  			{location: 'Rio de Janeiro, Brazil', estimate: '$20,000,000', image: 'static/img/rio.jpg'},
  			{location: 'Tokyo, Japan', estimate: '$123,456', image: 'static/img/tokyo.jpg'},
  			{location: 'Amsterdam, Netherlands', estimate: '$5', image: 'static/img/amsterdam.jpg'},
  			{location: 'Some place in Antarctica?', estimate: 'Free', image: 'static/img/antarctica.jpg'},
  			{location: 'Mars', estimate: 'Call Elon for more information', image: 'static/img/mars.jpg'},
  		];


    	return (
    		<div>
    			<Header/>
    			<br/><br/><br/>
    			<div>
    				<h2>Our Mission</h2>
    				<img className="textunderline" src="./static/img/textunderline.jpg" alt="textunderline" />
    				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    			</div>
    			<br/><br/><br/><br/>
    			<TileGallery/>
    			<h3>Our Services</h3>
    			<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    				<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    				<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    			</span>
    			<h4>Browse..</h4>
    			<div className="cardsbackground">
	    			{houses.map((h) =>
	                        <HouseCard location={h.location} estimate={h.estimate} image={h.image}/>
	                    	)
	                	}
    			</div>
      		</div>
    	);
  	}
}

export default Root;
