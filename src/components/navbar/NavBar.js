import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component{
    render(){
        return(
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="row navbar-style separation-line">
                        <div className="col-md-3">
                            <Link className="nav-text" to="/">Home</Link>
                        </div>
                        <div className="col-md-3">
                            <Link className="nav-text" to="/idApplicationForm">Fill your request</Link>
                        </div>
                        <div className="col-md-3">
                            <Link className="nav-text" to="/applicationsList">See all applications</Link>

                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-dark navbar-style">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        )
    }

}
export default NavBar;