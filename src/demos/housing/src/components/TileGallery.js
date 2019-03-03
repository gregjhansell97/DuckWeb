import React from 'react';

import '../css/tilegallery.css'

export default class TileGallery extends React.Component {
  	render() {
      let tiles = [
              {image:"/static/img/house1.jpg"},
              {image:"/static/img/house2.jpg"},
              {image:"/static/img/house3.jpg"}
            ];

    	return (
        <div className="tilegallery">
    		{tiles.map((t) =>
                        <img className="tiles" src={t.image} alt="yeet"/>
                      )
                  }
        </div>
  		);
	}
}