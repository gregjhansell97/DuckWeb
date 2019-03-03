import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//local
import '../css/index.css';

const styles = {
      ListItem: {
        fontFamily:"Arial"
      }
}


class InfoPanel extends React.Component {
    render() {
        const { classes, description, phone, address, sociallinks, price, coordinants  } = this.props;
        return (

            <div className={classes.root}>
                <List>
                    <ListItem class="infoItem">
                        {description}
                    </ListItem>
                    <ListItem class="infoItem">
                        {address}
                    </ListItem>
                    <ListItem class="infoItem">
                        {phone}
                    </ListItem>
                    <ListItem class="infoItem">
                        {price}
                    </ListItem>
                    {sociallinks.map((r,index) =>
                        <ListItem key={index} class="infoItem">
                        {r}
                        </ListItem>
                    )
                    }
                </List>
            </div>
        );
    }
}

InfoPanel.propTypes = {
    /**
     * styling information for the class
     */
    classes: PropTypes.object.isRequired,

    /**
     * name of the restaurant
     */
    name: PropTypes.string.isRequired,

}

export default withStyles(styles)(InfoPanel);
