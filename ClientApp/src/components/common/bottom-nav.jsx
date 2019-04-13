import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ListAltIcon from '@material-ui/icons/ListAlt';

const styles = {
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f7f7f7'
    },
};

class SimpleBottomNavigation extends React.Component {
    constructor(props){
        super(props);
        this.state = { value: props.value };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}>
                <BottomNavigationAction component={Link} to="/" label="Compute" icon={<ListAltIcon />} />
                <BottomNavigationAction component={Link} to="/history" label="History" icon={<RestoreIcon />} />
            </BottomNavigation>
        );
    }
}

SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
