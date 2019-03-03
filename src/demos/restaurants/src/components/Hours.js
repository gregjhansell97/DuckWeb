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



class Hours extends React.Component {
    render() {
        const { classes, hours } = this.props;
        return (

            <div className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Day</TableCell>
                            <TableCell align="right">Hours</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {hours.map(row=>(
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.day}
                            </TableCell>
                            <TableCell align="right">
                                {row.hours}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

Hours.propTypes = {
    /**
     * styling information for the class
     */
    classes: PropTypes.object.isRequired,

    /**
     * name of the restaurant
     */
    name: PropTypes.string.isRequired,

}

export default withStyles(styles)(Hours);
