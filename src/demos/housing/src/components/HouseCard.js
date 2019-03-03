import React from 'react';
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography"; 

import '../css/housecard.css'

export default class HouseCard extends React.Component {
  	render() {
    	const {location, estimate, image} = this.props;
    	return (
    		<Card className="housecard">
      			<div className="housecardpiccontainer">
	      			<CardMedia 
	      				component="img"
	      				className="housecardpic"
	      				alt={location}
	          		image={image}
	      			/>
      			</div>
      			<CardContent className="housecardcontent">
          			<Typography className="housecardtitle">
            			{location}
          			</Typography>
          			<Typography className="housecardestimate" color="textSecondary" component="p"> 
            			Estimate: {estimate}
          			</Typography>
          		</CardContent>
    		</Card>
  		);
	}
}

HouseCard.propTypes = {
	//location of house
	location: PropTypes.string.isRequired,
	//price estimate
  	estimate: PropTypes.string.isRequired,
  	//image
  	image: PropTypes.string.isRequired
}