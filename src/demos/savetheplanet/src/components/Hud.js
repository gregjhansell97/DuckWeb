import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../css/index.css';


const styles = {
  root: {
    flexGrow: 1,
  }
};

class Hud extends React.Component {
  render(){
    const { update, lose, classes, hydration, age } = this.props;
  return (
    <div className="classes.root">
        <p class='hudtext'>Days Old: {age}</p>
        <p class='hudtext'>Hydration: {hydration}</p>
        <Button variant="outlined" color="primary" 
        className={classes.button} onClick={()=>update(1)}>
            Water
        </Button>
        <Button variant="outlined" color="secondary" 
        className={classes.button} onClick={()=>update(0)}>
            Chop
        </Button>
	</div>
  );
}
}

Hud.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hud);