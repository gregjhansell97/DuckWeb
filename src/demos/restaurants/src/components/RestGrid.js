import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from "@material-ui/core";

//local
import Title from './Title.js';
import '../css/index.css';
import InfoPanel from "./InfoPanel.js";
import PageSwitch from "./PageSwitch.js";

const styles = {
    //   title: {
    //     fontSize: 20,
    //     fontWeight: 500
    //   }
}


class RestGrid extends React.Component {
    render() {
        const { classes, name } = this.props;
        return (

            // <Title name={name}>
            // </Title>
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <Title name={name}>
                        </Title>
                        <Divider/>
                        <InfoPanel></InfoPanel>
                    </Grid>
                    <Grid item xs={9}>
                        <PageSwitch></PageSwitch>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

RestGrid.propTypes = {
    /**
     * styling information for the class
     */
    classes: PropTypes.object.isRequired,

    /**
     * name of the restaurant
     */
    name: PropTypes.string.isRequired,

}

export default withStyles(styles)(RestGrid);
