import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import '../style/main.css';
import IdApplicationForm from './applicationForm/IdApplicationForm';
import Home from './home/Home';
import ApplicationsList from './applicationsList/ApplicationsList';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/idApplicationForm' component={IdApplicationForm}/>
              <Route path='/applicationsList' component={ApplicationsList}/>
            </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App;
