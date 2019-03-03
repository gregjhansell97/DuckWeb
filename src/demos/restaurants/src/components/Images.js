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
        alignSelf: 'stretch',
        height: 330
    },
});

/*
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


const imgData=[
    {
        img:'/static/img/burritobowl.jpg',
        title:'Burrito Bowl',
        cols:1
    },
    {
        img:'/static/img/chipotleoutside.jpg',
        title:'Chipotle Outside',
        cols:1
    },
    {
        img:'/static/img/chipotleinside.jpg',
        title:'Chipotle Inside',
        cols:2
    }
 ];


class Images extends React.Component {
    render() {
        const { classes, name } = this.props;
        return (

            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {imgData.map(tile => (
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

    /**
     * name of the restaurant
     */
    name: PropTypes.string.isRequired,

}

export default withStyles(styles)(Images);
