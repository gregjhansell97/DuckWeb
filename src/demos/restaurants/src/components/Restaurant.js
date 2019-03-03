import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

//local
import RestGrid from "./RestGrid.js";

const styles = {
  card: {
    width: "100%"
    
  }
}


class Restaurant extends React.Component {
    render() {
        const { classes, name, description, phone, address, features, sociallinks, price, images, menu, coordinants, hours } = this.props;
        return (
            <Card className={classes.card} className='restPanel'>
                <CardContent>
                    
                    <RestGrid name={name} description={description} 
                        phone={phone} address={address} 
                        features={features} price={price} 
                        sociallinks={sociallinks} coordinants={coordinants} menu={menu}
                        images={images} hours={hours}
                        ></RestGrid>
                    <br />
                </CardContent>
            </Card>
        );
    }
}

Restaurant.propTypes = {
  /**
   * styling information for the class
   */
  classes: PropTypes.object.isRequired,

  /**
   * name of the restaurant
   */
  name: PropTypes.string.isRequired,

  /**
   * description of restaurant
   */
  description: PropTypes.string.isRequired
}

export default withStyles(styles)(Restaurant);
