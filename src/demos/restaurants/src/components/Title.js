import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography"; 

const styles = {
  title: {
    fontSize: 20,
    fontWeight: 500
  }
}


class Title extends React.Component {
    render() {
        const { classes, name } = this.props;
        return (
            <Typography className={classes.title} color="textSecondary">
                        {name}
                    </Typography>
        );
    }
}

Title.propTypes = {
  /**
   * styling information for the class
   */
  classes: PropTypes.object.isRequired,

  /**
   * name of the restaurant
   */
  name: PropTypes.string.isRequired,

}

export default withStyles(styles)(Title);
