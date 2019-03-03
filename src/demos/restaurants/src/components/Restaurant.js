import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography"; 

//local
import RestGrid from "./RestGrid.js";

const styles = {
  card: {
    width: "100%"
    
  }
}


class Restaurant extends React.Component {
    render() {
        const { classes, name, description, phone, address, sociallinks, price } = this.props;
        return (
            <Card className={classes.card} className='restPanel'>
                <CardContent>
                    
                    <RestGrid name={name}></RestGrid>
                    <br />
                    {/* <Typography component="p">
                        {description}
                    </Typography>
                    
                    <Typography component="p">
                        {phone}
                    </Typography>
                    <Typography component="p">
                        {address}
                    </Typography>
                    <Typography component="p">
                        {price}
                    </Typography> */}
                    {/* {sociallinks.map((s) =>
                        <Typography component="p">
                            {s}
                        </Typography>
                    )
                    } */}

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
