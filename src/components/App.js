import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import '../style/main.css';
import IdApplicationForm from './IdApplicationForm';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/idApplicationForm' component={IdApplicationForm}/>
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
