import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

//local
import '../css/index.css';
import Menu from './Menu.js';
import Features from './Features.js';
import Hours from './Hours.js';
import Images from './Images.js';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});


class PageSwitch extends React.Component {
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes, name } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Menu" />
                        <Tab label="Features" />
                        <Tab label="Images" />
                        <Tab label="Hours" />
                        
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><Menu></Menu></TabContainer>}
                {value === 1 && <TabContainer><Features></Features></TabContainer>}
                {value === 2 && <TabContainer><Images></Images></TabContainer>}
                {value === 3 && <TabContainer><Hours></Hours></TabContainer>}
            </div>
        );
    }
}

PageSwitch.propTypes = {
    /**
     * styling information for the class
     */
    classes: PropTypes.object.isRequired,

    /**
     * name of the restaurant
     */
    name: PropTypes.string.isRequired,

}

export default withStyles(styles)(PageSwitch);
