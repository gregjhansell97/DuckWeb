import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles/";

import '../css/menu.css';
import ArtCard from "./ArtCard"
import ImageGridList from "./ArtGrid"

function MenuContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

MenuContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const styles = theme => ({
		indicator: {
			backgroundColor: "#3f97a3"
		}
});

class Menu extends React.Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;

    let artpieces = [
  			{title:'The Starry Night', artist:'Vincent van Gogh', image:"static/img/starrynight.png"},
  			{title:'The Great Wave off Kanagawa', artist:'Hokusai', image:"static/img/wave.jpg"},
  			{title:'Bear, Digital Art', artist:'Shimhaq', image:"static/img/bear.jpg"},
  			{title:'Portrait of Dwarf Morgante', artist:'Agnolo di Cosimo (Bronzino)', image:"static/img/cherub.jpg"},
  			{title:'Piss Christ', artist:'Andres Serrano', image:"static/img/pisschrist.jpg"},
  			{title:'Interrogation III', artist:'Leon Golub', image:"static/img/interrogationiii.jpg"},
  			{title:'Girl with Balloon', artist:'Banksy', image:"static/img/girlwithballoon.jpg"},
  			{title:'Dude', artist:'Naxart Studio', image:"static/img/thedude.jpg"},
  		];

    return (
      <div className="menu">
        <AppBar className="appbar" position="static" styles={styles.AppBar}>
          <Tabs className="menutabs" value={value} onChange={this.handleChange} classes={{ indicator: classes.indicator }} centered={true}>
            <Tab label="Exhibit A"/>
            <Tab label="Exhibit B"/>
          </Tabs>
        </AppBar>
        {value === 0 && <MenuContainer>
        	{artpieces.map((ap) =>
                        <ArtCard title={ap.title} artist={ap.artist} image={ap.image}/>
                    	)
                	}
        </MenuContainer>}
        {value === 1 && <MenuContainer>
          <ImageGridList/>
        </MenuContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
