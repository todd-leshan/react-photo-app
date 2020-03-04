import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Cutup from "./views/Cutup";
import Home from "./views/Home";

const AllRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cutup" component={Cutup} />
      <Route path="/home" component={Home} />
    </Switch>
  </Router>
);

export default AllRoutes;
