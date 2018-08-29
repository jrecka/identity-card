import React from 'react';
import DeclarationText from './DeclarationText';
import { set } from 'mongoose';

class Declaration extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showModal: 'block',
            disabled: true,
        }
        this.confirmBtn = document.querySelector('input'); 
    }
    handleChange = event =>{
        event.target.checked ? this.setState({
            disabled: false
        }) : this.setState({disabled: true})
    }

    handleClick = () =>{
        this.setState({
            showModal: 'none'
        })
    }

    
    
    render(){
     
        return(
        <div className='declaration-background'
            style={{display: this.state.showModal}}>
        <div className='declaration container'>
        <DeclarationText/>
        {/* <form className='container'>
            <div className='form-check'>
        <input
            className='form-check-input' 
            type='checkbox'
            checked={this.state.checked} 
            onChange={this.handleChange}
        />
        <label className='form-check-label'>Confirm</label> */}
        <div className="btn-group-toggle container" data-toggle="buttons">
  <label className="btn btn-secondary">
    <input type="checkbox" 
    autoComplete="off" 
    onChange={this.handleChange}/>{!this.state.disabled? <span><i className="far fa-check-circle"></i></span> : <span>Confirm</span>}
    </label>

        <button className='btn btn-secondary closing-button'
                style={{display: this.state.showModal}}
                disabled={this.state.disabled}
                onClick={this.handleClick}
                >
            {/* <i class="fas fa-pen-fancy"></i> */}
            <i className="fas fa-file-signature"></i>
            &nbsp;
            Fill out the form
        </button>
        </div>
        {/* </form>*/}
        </div> 
        </div>

        )}
}
export default Declaration;