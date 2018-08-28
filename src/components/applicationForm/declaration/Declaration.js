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
        <input
            type='checkbox'
            checked={this.state.checked} 
            onChange={this.handleChange}
        />
        <label>I confirm.</label>
        <button className='btn btn-secondary closing-button'
                style={{display: this.state.showModal}}
                disabled={this.state.disabled}
                onClick={this.handleClick}>
            {/* <i class="fas fa-pen-fancy"></i> */}
            <i class="fas fa-file-signature"></i>
            &nbsp;
            Fill out the form
        </button>
        </div>
        </div>
        )}
}
export default Declaration;