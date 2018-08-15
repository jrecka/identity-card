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
                        <div className='caption'>Personal data</div>
                            <label>
                                Social security number
                            </label>
                            <input 
                                className='form-control'
                                type='text'
                                onChange={this.handleChange}
                                name='socialSecurityNumber'
                                value={this.state.socialSecurityNumber}>
                            </input>       
                        </div>
                        <div className='form-group'>
                            <label>
                                Name
                            </label>
                            <input 
                                className='form-control'
                                name='name'
                                type='text'
                                onChange={this.state.handleChange}
                                value={this.state.handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label>
                                Surname
                            </label>
                            <input
                                name='surname'
                                className='form-control'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.surname}>
                            </input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Family name
                            </label>
                          <input
                             name="familyName"
                             className='form-control'
                             type='text'
                             onChange={this.handleChange}
                             value={this.state.familyName}>
                            </input>
                       </div>
                        <div className='form-group'>
                            <label>
                             Date of birth
                            </label>
                            <input
                                name='dateOfBirth'
                                className='form-control'
                                type='date'
                                onChange={this.handleChange}
                                value={this.state.dateOfBirth}>
                            </input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Birthplace
                            </label>
                            <input
                                name='birthplace'
                                className='form-control'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.birthplace}>
                            </input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Nationality
                            </label>
                            <input
                                name='nationality'
                                className='form-control'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.nationality}>
                            </input>
                        </div>    
                        <div className='form-group'>
                            <label>
                                Gender
                            </label>
                            <select name='gender'
                                className='form-control'
                                value={this.state.gender}
                                onChange={this.handleChange}>
                                    <option value='male'>
                                        Male
                                    </option>
                                    <option value='female'>
                                        Female
                                    </option>
                            </select>
                        </div>
                        <div className='caption'>
                            Parents data
                        </div>
                        <div className='form-group'>
                            <label>
                                Mother's name
                            </label>
                            <input
                                name='mothersName'
                                className='form-control'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.mothersName}>
                            </input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Father's name
                            </label>
                            <input
                                name='fathersName'
                                className='form-control'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.fathersName}>
                            </input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Mother's maiden name
                            </label>
                            <input
                                name='maidenName'
                                className='form-control' 
                                type='text' 
                                onChange={this.handleChange}
                                value={this.state.maidenName}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default IdForm;