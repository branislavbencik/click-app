import React from "react";
import Leaderboard from "./Leaderboard";
import Klik from "./Klik";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Leaderboard} />
          <Route path="/:name" component={Klik} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
