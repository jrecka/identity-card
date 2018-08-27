import React from 'react';
import DeclarationText from './DeclarationText';

class Declaration extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showModal: 'block',
            declaration: false,
            disabled: true,
            declarationError: '',
            displayError: 'none'
        }
    }
    handleChange = event =>{
        this.setState({
            declaration: event.target.value
        })
    
    }

    checkDeclarationValue = () =>{
        if(this.state.declaration === true){
            this.setState({
                disabled: false,
                showModal: 'none',
                displayError: 'none'

            })
        } else {
            this.setState({
                declarationError: 'lololl',
                displayError: 'block',
                disabled: true,
                showModal: true
                

            })
        }
    }
    
    render(){
        return(
        <div className='declarationModal'
            style={{display: this.state.showModal}}>
        <div className='declaration container'>
        <DeclarationText/>
        <input type='checkbox'
               value={this.state.declaration} 
               onClick={this.handleChange}

        />
        <label>I confirm.</label>
        <span style={{display: this.state.displayError}}>{this.state.declarationError}</span>
        <button className='btn btn-secondary'
                style={{display: this.state.showModal}}
                disabled={this.state.disabled}
                onClick={this.checkDeclarationValue}>
                go
        </button>
        </div>
        </div>
        )}
}
export default Declaration;