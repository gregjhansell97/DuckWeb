import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";

//inhouse
import RestaurantCard from "./RestaurantCard"
import Header from "./Header"

class Root extends React.Component {
  	render() {
    	return (
    		<div>
    			<Header/>
      			<RestaurantCard name="Moes" description="buhjbjhn, b vce"/>
      		</div>
    	);
  	}
}

export default Root;
