import React from 'react';
import IdApplicationForm from './../applicationForm/IdApplicationForm';
import {Link} from 'react-router-dom';
class HomePage extends React.Component{
    render(){
        return(
            <div>    <div className='blurred-bg'> </div> 
   <div className='links'>
    <Link to="/idApplicationForm">Fill your request</Link>
    </div>
    
        </div>
       
        )}
}
export default HomePage;