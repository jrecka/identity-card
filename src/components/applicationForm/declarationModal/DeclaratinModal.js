import React from 'react';
import Declaration from './Declaration';

class DeclarationModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showModal: 'block',
            declaration: false,
            disabled: true,
            declarationError: ''
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
                showModal: 'none'
            })
        } else {
            this.setState({
                declarationError: 'lololl'
            })
        }
    }
    render(){
        <div className='container'>
        <Declaration/>
        <input type='checkbox'
               value={this.state.declaration} 
        />
        <button disabled={this.state.disabled}
                onClick={this.checkDeclarationValue}>
        </button>
        </div>
    }
}
export default DeclarationModal;