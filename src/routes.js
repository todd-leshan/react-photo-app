import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";
import Cutup from "./views/Cutup";
import Home from "./views/Home";

const AllRoutes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/cutup" component={Cutup} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default AllRoutes;
