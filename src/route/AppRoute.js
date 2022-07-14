import React, { Component, Fragment } from "react";
import HomePage from "../pages/HomePage";
import { Router, Route, Switch } from "react-router-dom";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact to="/" component={HomePage} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
