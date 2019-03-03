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

let id=0;
function createData(day,hours){
id+=1;
return {day,hours};
}
const rows = [
    createData('Monday', '9:00 AM - 9:00 PM'),
    createData('Tuesday', '9:00 AM - 9:00 PM'),
    createData('Wednesday', '9:00 AM - 9:00 PM'),
    createData('Thursday', '9:00 AM - 9:00 PM'),
    createData('Friday', '9:00 AM - 10:00 PM'),
    createData('Saturday', '9:00 AM - 10:00 PM'),
    createData('Sunday', '9:00 AM - 5:00 PM')
  ];


class Hours extends React.Component {
    render() {
        const { classes, name } = this.props;
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
                        {rows.map(row=>(
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
