import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
    render(){
        return(
            <div>    <div className='blurred-bg'> </div> 
   <div className='links'>
    <Link to="/idApplicationForm">Fill your request</Link>
    <Link to='/applicationsList'>See all applications</Link>
    </div>
    
        </div>
       
        )}
}
export default HomePage;