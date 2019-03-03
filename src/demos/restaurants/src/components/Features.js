import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//local
import '../css/index.css';

const styles = theme => ({
    // root: {
    //   width: '100%',
    //   maxWidth: 360,
    //   backgroundColor: theme.palette.background.paper,
    // },
  });




class Features extends React.Component {
    render() {
        const { classes, features } = this.props;
        return (

            <div className={classes.root}>
                <List>
                {features.map((r,index) =>
                        <ListItem key={index} >
                        {r}
                        </ListItem>
                    )
                    }
                </List>
            </div>
        );
    }
}

Features.propTypes = {
    /**
     * styling information for the class
     */
    classes: PropTypes.object.isRequired,

    
}

export default withStyles(styles)(Features);
