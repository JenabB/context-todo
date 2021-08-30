import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/todo/:id" component={TodoDetail} />
        </Switch>
      </div>
    </Router>
  );
}
