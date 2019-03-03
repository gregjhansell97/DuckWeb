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

function Tree(props) {
  const { classes, age } = props;

  return (
    <div className="classes.root">
    		<img src={"static/img/tree-"+age+".jpg"}></img>
		</div>
  );
}

Tree.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tree);