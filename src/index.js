import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

// admin
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/home" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={SignIn} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// <Redirect from="/admin" to="/admin/dashboard" />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
