import React from 'react';
import PropTypes from "prop-types";

//inhouse
import Header from "./Header"
import ArtCard from "./ArtCard"

class Root extends React.Component {
  	render() {
  		let artpieces = [
  			{title:'The Starry Night', artist:'Vincent van Gogh', image:"/static/img/starrynight.png"},
  			{title:'The Great Wave off Kanagawa', artist:'Hokusai', image:"/static/img/wave.jpg"},
  			{title:'Bear, Digital Art', artist:'Shimhaq', image:"/static/img/bear.jpg"},
  			{title:'Portrait of Dwarf Morgante', artist:'Agnolo di Cosimo (Bronzino)', image:"/static/img/cherub.jpg"},
  			{title:'Piss Christ', artist:'Andres Serrano', image:"/static/img/pisschrist.jpg"},
  			{title:'Interrogation III', artist:'Leon Golub', image:"/static/img/interrogationiii.jpg"},
  			{title:'Girl with Balloon', artist:'Banksy', image:"/static/img/girlwithballoon.jpg"},
  			{title:'Dude', artist:'Naxart Studio', image:"/static/img/thedude.jpg"},
  		];
    	return (
    		<div>
    			<Header/>
    			<div>
    				{artpieces.map((ap) =>
                        <ArtCard title={ap.title} artist={ap.artist} image={ap.image}/>
                    	)
                	}
                </div>
      		</div>
    	);
  	}
}

export default Root;
