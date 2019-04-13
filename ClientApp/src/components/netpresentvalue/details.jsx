import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { byId } from "../../actions/netpresentvalue";
import SimpleBottomNavigation from "../common/bottom-nav";
import { Typography, Divider, Grid, Paper } from '@material-ui/core';

import CanvasJSReact from "../../assets/canvas-js/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const styles = (theme) => ({
    container: {
        maxWidth: 900,
        margin: '0 auto',
        padding: 20,
        paddingBottom: 65
    },
    paper: {
        padding: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit,
        color: theme.palette.text.secondary,
    },
    textCenter: {
        textAlign: 'center'
    }
});

class Details extends Component {
    componentDidMount = async () => {
        var id = Number(this.props.match.params.id);
        await this.props.getDetails(id);
    }

    generateChartData = (data) => {
        var result = {
            animationEnabled: true,
            // title: {
            //     text: `NPV: ${data.netPresentValue} Discount rate: ${data.discountRate}%`
            // },
            axisY: {
                includeZero: false
            },
            axisX: { includeZero: true, title: 'Year', interval: 1 },
            data: [{
                type: "line",
                dataPoints: []
            }]
        }
        for (var c = 0; c < data.cashFlows.length; c++) {
            let cashFlow = data.cashFlows[c];
            result.data[0].dataPoints.push({ y: cashFlow.value, x: cashFlow.period, indexLabel: `${cashFlow.value}` })
        }
        return result;
    }

    render() {
        return (
            <>
                <div className={this.props.classes.container}>
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={4}>
                            <Paper className={this.props.classes.paper}>
                                <Typography variant="overline">Initial cost: <b>{this.props.data.amount}</b></Typography>
                                <Typography variant="overline">Lower bound discount rate: <b>{this.props.data.lowerBoundDiscount}%</b></Typography>
                                <Typography variant="overline">Upper bound discount rate: <b>{this.props.data.upperBoundDiscount}%</b></Typography>
                                <Typography variant="overline">Discount rate increment: <b>{this.props.data.discountIncrement}%</b></Typography>
                                <Typography variant="button">Cashflows</Typography>
                                {this.props.data.cashFlowInputs.map((item, index) => 
                                    <Typography key={index} variant="overline">Year: <b>{item.period}</b>, Amount: <b>{item.amount}</b></Typography>
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            {this.props.data.result.map((item, index) =>
                                <Paper key={index} className={this.props.classes.paper}>
                                    <div className={this.props.classes.textCenter}>
                                        <Typography variant="button">Discount Rate: {item.discountRate}%</Typography>
                                        <Typography variant="button">Net Present Value: {item.netPresentValue}</Typography>
                                    </div>
                                    <CanvasJSChart options={this.generateChartData(item)} />
                                </Paper>
                            )}
                        </Grid>
                    </Grid>

                </div>
                <SimpleBottomNavigation value={0} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { data: { ...state.byIdNetPresentValueReducer } };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails: (id) => { dispatch(byId(id)); }
    };
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Details));