import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

  const tileData = [
    {
      img: '/static/img/bats.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: '/static/img/facespikes.jpg',
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: '/static/img/omg.jpg',
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: '/static/img/kindergarten.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: '/static/img/mayan.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: '/static/img/washington.jpg',
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: '/static/img/thanos.jpg',
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: '/static/img/monkey.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
  ];

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '80%',
    height: 'auto',
  },
});
 
class ImageGridList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);