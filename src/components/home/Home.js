import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
    render(){
        return(
            <div>    <div className='blurred-bg'> </div> 
   <div className='links'>
    <Link to="/idApplicationForm"
        className='link'>Fill your request</Link>
    <Link to='/applicationsList'
        className='link'>See all applications</Link>
    </div>
    
        </div>
       
        )}
}
export default HomePage;