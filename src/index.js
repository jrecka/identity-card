import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Navbar from './components/navbar/NavBar';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <React.Fragment>
            <Navbar/>
            <App/>
        </React.Fragment>
    </HashRouter>
    , document.getElementById('root')
);
