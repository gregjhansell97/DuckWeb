import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

//local
import '../css/index.css';

//images
// import burritobowl from '/static/img/burritobowl.jpg';
// import chiptoleinside from '/static/img/chiptoleinside.jpg';
// import chipotleoutside from '/static/img/chipotleoutside.jpg';

const styles = theme => ({
    root: {
        justifyContent: 'space-around',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        maxWidth:800,
        height: 330,
        margin:'auto !important'
    }
});


class Images extends React.Component {
    render() {
        const { classes, images } = this.props;
        return (

            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {images.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

Images.propTypes = {
    /**
     * styling information for the class
     */
    classes: PropTypes.object.isRequired,


}

export default withStyles(styles)(Images);
