import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getAll } from "../../actions/netpresentvalue";
import SimpleBottomNavigation from "../common/bottom-nav";
import { Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';

import CanvasJSReact from "../../assets/canvas-js/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const styles = (theme) => ({
    container: {
        maxWidth: 500,
        margin: '0 auto',
        padding: 20,
        paddingBottom: 65
    }
});

class History extends Component {
    componentDidMount = async () => {
        await this.props.getAll();
    }

    render() {
        return (
            <>
                <div className={this.props.classes.container}>
                    <Typography color="primary" variant="h6">History</Typography>
                    <List>
                        {this.props.data.items.map((item, index) =>
                            <div key={index}>
                                <ListItem
                                    component={Link}
                                    to={`/details/${item.transactionInputId}`}
                                    button>
                                    <ListItemText
                                        primary={item.dateAddedStr}
                                        secondary={
                                            <React.Fragment>
                                                <Typography variant="caption">Initial cost: <b>{item.amount}</b></Typography>
                                                <Typography variant="caption">Lower bound discount rate: <b>{item.lowerBoundDiscount}%</b></Typography>
                                                <Typography variant="caption">Upper bound discount rate: <b>{item.upperBoundDiscount}%</b></Typography>
                                                <Typography variant="caption">Discount rate increment: <b>{item.discountRate}%</b></Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                            </div>
                        )}
                    </List>
                </div>
                <SimpleBottomNavigation value={1} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { data: { ...state.allNetPresentValueReducer } };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: () => { dispatch(getAll()); }
    };
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(History));