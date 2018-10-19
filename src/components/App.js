import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../style/main.css';
import IdApplicationForm from './applicationForm/IdApplicationForm';
import Home from './home/Home';
import ApplicationsList from './applicationsList/ApplicationsList';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/idApplicationForm' component={IdApplicationForm}/>
                <Route path='/applicationsList' component={ApplicationsList}/>
            </Switch>
        )
    }
}

export default App;
