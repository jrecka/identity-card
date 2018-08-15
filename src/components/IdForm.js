import React from 'react';
import styles from './style/main.css'

class IdForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            socialSecurityNumber: '',
            name: '',
            surname: '',
            familyName: '',
            dateOfBirth: '',
            birthplace: '',
            nationality: '',
            gender: '',
            mothersName: '',
            fathersName: '',
            maidenName: '',
            street: '',
            houseNumber: '',
            flatNumber: '',
            postalCode: '',
            city: '',
            electronicAddress: '',
            phoneNumber: '',
            email: '',
            reason: '',
            dateOfApplication:  '',
            placeOfApplication: '',
         }
    }
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <div className='container'>
                <div className='row'>
                <form className='col-12'>
                        <div className='form-group'>
                        <div className="caption">Personal data</div>
                            <label>
                                Social security number
                            </label>
                            <input 
                                className='form-control'
                                type='text'
                                onChange={this.handleChange}
                                name='socialSecurityNumber'>
                            </input>       
                        </div>
                        </form>
                    
                </div>
            </div>
        )
    }
}

export default IdForm;