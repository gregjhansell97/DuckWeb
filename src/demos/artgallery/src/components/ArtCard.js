import React from 'react';
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography"; 

import '../css/artcard.css'

export default class ArtCard extends React.Component {
  	render() {
    	const {title, artist, image} = this.props;
    	return (
    		<Card className="artcard">
      			<div className="artcardpiccontainer">
	      			<CardMedia 
	      				component="img"
	      				className="artcardpic"
	      				alt={title}
	          			image={image}
	      			/>
      			</div>
      			<CardContent className="artcardcontent">
          			<Typography className="artcardtitle">
            			{title}
          			</Typography>
          			<Typography className="artcardartist" color="textSecondary" component="p"> 
            			Artist: {artist}
          			</Typography>
          		</CardContent>
    		</Card>
  		);
	}
}

ArtCard.propTypes = {
	//name of art piece
	name: PropTypes.string.isRequired,
	//description of art piece
  	artist: PropTypes.string.isRequired,
  	//image
  	image: PropTypes.string.isRequired
}