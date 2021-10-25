import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CollegeDetails from './pages/CollegeDetails';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Result} />
          <Route path="/CollegeDetails" component={CollegeDetails} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;