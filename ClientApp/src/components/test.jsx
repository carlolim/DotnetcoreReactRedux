import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from "../actions/netpresentvalue";

class Test extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    return (
      <>Hello world!</>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.allNetPresentValueReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => { dispatch(getAll()) }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);