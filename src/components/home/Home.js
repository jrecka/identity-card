import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../navbar/NavBar';
class HomePage extends React.Component{
    render(){
        return(
            <div>    <div className='blurred-bg'> </div>
<NavBar/>

   <div className='links container' >
    <Link to="/idApplicationForm"
        className='link row'>Fill your request</Link>
    <Link to='/applicationsList'
        className='link row'>See all applications</Link>
    </div>
    
        </div>
       
        )}
}
export default HomePage;