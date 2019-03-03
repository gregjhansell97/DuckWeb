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
const pricing = {
    1:"Affordable for broke college students",
    2:"Not too expensive",
    3:"You're getting a little ahead of yourself",
    4:"Don't even bother",
    5:"I wish I was rich",
    

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
                    <ListItem class="infoItem"><a class='sociallink' href={ 'https://www.google.com/maps/search/?api=1&query=' + address }>
                        {address}</a>
                    </ListItem>
                    <ListItem class="infoItem">
                        {phone}
                    </ListItem>
                    <ListItem class="infoItem">
                        Price: {pricing[price]}
                    </ListItem>
                    {sociallinks.map((r,index) =>
                        <ListItem key={index} class="infoItem"><a class='sociallink' href={r}>
                        {r}</a>
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
