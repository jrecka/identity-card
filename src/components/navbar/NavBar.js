import React from 'react';
import { NavLink,  } from 'react-router-dom';


class NavBar extends React.Component{
    render(){
        const activeColor = {color: '#43659c'};
        return(
            <div >
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className=" navbar-style separation-line">
                        <span  className='navbar-element'>
                            <NavLink className="nav-text" to="/" >Home</NavLink>
</span>
                        <span className='navbar-element'>
                            <NavLink className="nav-text" to="/idApplicationForm" activeStyle={activeColor}>Fill request</NavLink>
                        </span>
                        <span className='navbar-element'>
                            <NavLink className="nav-text" to="/applicationsList" activeStyle={activeColor}>All applications</NavLink>
                        </span>


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
// <div>
//     <div className='navbar-style'>
//
// <span  className='navbar-element'>
//                             <NavLink className="nav-text" to="/" >Home</NavLink>
// </span>
//         <span className='navbar-element'>
//                             <NavLink className="nav-text" to="/idApplicationForm" activeStyle={activeColor}>Fill request</NavLink>
//                         </span>
//         <span className='navbar-element'>
//                             <NavLink className="nav-text" to="/applicationsList" activeStyle={activeColor}>All applications</NavLink>
//                         </span>
//
//     </div>
// </div>