import React from 'react';
import IdApplicationForm from './IdApplicationForm';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
    render(){
        return(
            <div>    <div className='blurred-bg'> </div>
   <div className='home'>
   <div className='home-layout'>
   <div className='links'>
    <Link to="/idApplicationForm">Fill your request</Link>
    </div>
    
        </div>
        </div>
        </div>
        )}
}
export default HomePage;