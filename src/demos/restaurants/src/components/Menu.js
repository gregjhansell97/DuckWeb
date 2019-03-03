import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//local
import '../css/index.css';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    }
  });


class Menu extends React.Component {
    render() {
        const { classes, menu } = this.props;
        return (

            <div className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {menu.map(row=>(
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.item}
                            </TableCell>
                            <TableCell align="right">
                                ${row.price}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

Menu.propTypes = {
    /**
     * styling information for the class
     */
    classes: PropTypes.object.isRequired,

    /**
     * name of the restaurant
     */
    name: PropTypes.string.isRequired,

}

export default withStyles(styles)(Menu);
