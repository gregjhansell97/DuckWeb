import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"; 
import '../css/index.css';

const styles = {
//   Typography: {
//     fontSize: 20
//   }
}


class Title extends React.Component {
    render() {
        const { classes, name } = this.props;
        return (
            <Typography class="text-brown restTitle" >
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
