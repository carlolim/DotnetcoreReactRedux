import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AddNpv from "./netpresentvalue/add";
import HistoryNpv from "./netpresentvalue/history";
import DetailsNpv from "./netpresentvalue/details";

class Main extends Component {
    render() {
      return (
        <main>
            <Switch>
                <Route exact path='/' component={AddNpv}/>
                <Route exact path='/history' component={HistoryNpv}/>
                <Route exact path='/details/:id' component={DetailsNpv}/>
            </Switch>
        </main>
      );
    }
}
  

export default Main
