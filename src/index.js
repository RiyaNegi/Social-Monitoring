import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';


ReactDOM.render(
  <BrowserRouter>
    <Route>
      <Switch>
        <Routes />
      </Switch>
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);
