import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import App from "../pages/App";

function test() {
  return <h3>test</h3>;
}

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/test" component={test} />
      </Switch>
    </HashRouter>
  );
};
