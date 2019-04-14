import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { TextField, InputAdornment, IconButton, Typography, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { save } from "../../actions/netpresentvalue";
import SimpleBottomNavigation from "../common/bottom-nav";
import { validate } from "./add-validation";

const styles = (theme) => ({
    textField: {
        width: '100%'
    },
    form: {
        padding: 10,
        maxWidth: 500,
        margin: '0 auto',
        paddingBottom: 65
    },
    cashFlowLabel: {
        marginTop: 20
    },
    buttonContainer: {
        textAlign: 'right'
    },
    button: {
        margin: 10
    }
});

class Add extends Component {
    state = {
        lowerBoundDiscount: '',
        upperBoundDiscount: '',
        discountIncrement: '',
        amount: '',
        cashFlows: [
            { period: 0, amount: '' },
            { period: 0, amount: '' },
        ],
        errors: {
            hasError: false,
            lowerBoundDiscount: false,
            upperBoundDiscount: false,
            discountIncrement: false,
            amount: false,
            cashFlows: false
        }
    }

    handleChange = (property, e) => {
        this.setState({ [property]: e.target.value });
    }

    handleChangeCashFlow = (index, e) => {
        let cashFlows = this.state.cashFlows;
        cashFlows[index].amount = e.target.value;
        this.setState({ cashFlows });
    }

    addCashFlow = () => {
        let cashFlows = this.state.cashFlows;
        cashFlows.push({ period: 0, amount: '' });
        this.setState({ cashFlows });
    }

    removeCashFlow = (index) => {
        let cashFlows = this.state.cashFlows;
        cashFlows.splice(index, 1);
        this.setState({ cashFlows });
    }

    compute = async () => {
        let errors = validate(this.state);
        this.setState({ errors });
        console.log(this.props.result.isSuccess);
        if (!errors.hasError) {
            await this.props.save({
                lowerBoundDiscount: this.state.lowerBoundDiscount,
                upperBoundDiscount: this.state.upperBoundDiscount,
                discountIncrement: this.state.discountIncrement,
                amount: this.state.amount,
                cashFlows: this.state.cashFlows.map((c, index) => {return { period: index + 1, amount: c.amount}})
            });
        }
    }

    render() {
        return (
            <>
                <form className={this.props.classes.form}>
                    <Typography color="primary" variant="h6">Compute</Typography>
                    <TextField
                        error={this.state.errors.amount}
                        label="Initial Cost"
                        value={this.state.amount}
                        className={this.props.classes.textField}
                        onChange={this.handleChange.bind(this, 'amount')}
                        margin="normal"
                        type="number"
                    />
                    <TextField
                        error={this.state.errors.lowerBoundDiscount}
                        label="Lower bound discount rate"
                        value={this.state.lowerBoundDiscount}
                        className={this.props.classes.textField}
                        onChange={this.handleChange.bind(this, 'lowerBoundDiscount')}
                        margin="normal"
                        type="number"
                    />
                    <TextField
                        error={this.state.errors.upperBoundDiscount}
                        label="Upper bound discount rate"
                        value={this.state.upperBoundDiscount}
                        className={this.props.classes.textField}
                        onChange={this.handleChange.bind(this, 'upperBoundDiscount')}
                        margin="normal"
                        type="number"
                    />
                    <TextField
                        error={this.state.errors.discountIncrement}
                        label="Discount rate increment"
                        value={this.state.discountIncrement}
                        className={this.props.classes.textField}
                        onChange={this.handleChange.bind(this, 'discountIncrement')}
                        margin="normal"
                        type="number"
                    />
                    <Typography className={this.props.classes.cashFlowLabel} color="primary" variant="h6">Cash flows</Typography>
                    {this.state.cashFlows.map((item, index) =>
                        <TextField
                            key={index}
                            className={this.props.classes.textField}
                            label={`Year ${index + 1}`}
                            value={item.amount}
                            onChange={this.handleChangeCashFlow.bind(this, index)}
                            margin="normal"
                            type="number"
                            InputProps={
                                this.state.cashFlows.length > 1 ? 
                                {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={this.removeCashFlow.bind(this, index)}>
                                                <ClearIcon color="secondary" />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                } : null
                            }
                        />
                    )}
                    <div className={this.props.classes.buttonContainer}>
                        <Button onClick={this.addCashFlow} color="primary" className={this.props.classes.button}>Add year</Button>
                        <Button onClick={this.compute} variant="contained" color="primary" className={this.props.classes.button}>Compute</Button>
                    </div>
                </form>
                <SimpleBottomNavigation value={0} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state.addNetPresentValueReducer };
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (data) => { dispatch(save(data)) }
    };
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Add));