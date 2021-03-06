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
    AppBar:{
        backgroundColor: "#af663e"
    }
});


class PageSwitch extends React.Component {
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes, images, hours, menu, features } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <AppBar  position="static" background-color="#af663e">
                    <Tabs class="bg-brown" value={value} onChange={this.handleChange}>
                        <Tab label="Menu" />
                        <Tab label="Features" />
                        <Tab label="Images" />
                        <Tab label="Hours" />
                        
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><Menu menu={menu}></Menu></TabContainer>}
                {value === 1 && <TabContainer><Features features={features}></Features></TabContainer>}
                {value === 2 && <TabContainer><Images images={images}></Images></TabContainer>}
                {value === 3 && <TabContainer><Hours hours={hours}></Hours></TabContainer>}
            </div>
        );
    }
}

PageSwitch.propTypes = {
    /**
     * styling information for the class
     */
    classes: PropTypes.object.isRequired,


}

export default withStyles(styles)(PageSwitch);
