import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import '../css/index.css';


const styles = {
  root: {
    flexGrow: 1,
  }
};

function SimpleAppBar(props) {
  const { classes, name } = props;

  return (
    <div className="header">
            <img className='' src='static/img/green.jpg'></img>
    		<h1 className="title">{name}</h1>
		</div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);