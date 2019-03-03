import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import '../css/index.css';


const styles = {
  root: {
    flexGrow: 1,
  }
};

function CountrySide(props) {
  const { classes, name } = props;

  return (
    <div className="footer">
		</div>
  );
}

CountrySide.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountrySide);