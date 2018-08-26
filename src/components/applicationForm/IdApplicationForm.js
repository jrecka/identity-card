import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class IdApplicationForm extends React.Component{
    constructor(props){
        super(props);
        this.option=[' ', 'First Id', 'Change of data contained in the Id', 'Id is out of date', 'Id is lost', 'Face image changed', 'Damage of Id', 'Another reason'];
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
            reasonOfApplication: '',
            message: '',
            dateOfApplication:  new Date().toISOString().substring(0, 10),
            placeOfApplication: '',

            disabled: false,
            errorMessage: '',
            displayError: 'none'

         }
    }
    showTextarea = () => {

        let textarea = document.querySelector('textarea'),
            selectVal = document.getElementById('reason').value;
        if( selectVal === "Another reason") {
            textarea.classList.remove('display-toggle');
        }else{
            textarea.classList.add('display-toggle');
        }
    }
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        });
        this.showTextarea();
    }
    showList = () => {
        setTimeout(()=>window.location.href='http://localhost:3000/#/applicationsList', 3000)
    }
    formValueChecker = () => {
        if(this.state.socialSecurityNumber.length !== 11){
            this.setState({
                displayError: 'block',
                // disabled: false,
                errorMessage: 'Social security number is too short'
            })
        } else {
            this.setState({
                displayError: 'none',
                disabled: true
            })
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        const completedApplication = {
            socialSecurityNumber: this.state.socialSecurityNumber,
            name: this.state.name,
            surname: this.state.surname,
            familyName: this.state.familyName,
            dateOfBirth: this.state.dateOfBirth,
            birthplace: this.state.birthplace,
            nationality: this.state.nationality,
            gender: this.state.gender,
            mothersName: this.state.mothersName,
            fathersName: this.state.fathersName,
            maidenName: this.state.maidenName,
            street: this.state.street,
            houseNumber: this.state.houseNumber,
            flatNumber: this.state.flatNumber,
            postalCode: this.state.postalCode,
            electronicAddress: this.state.electronicAddress,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            reasonOfApplication: this.state.reasonOfApplication,
            message: this.state.message,
            dateOfApplication: this.state.dateOfApplication,
            placeOfApplication: this.state.placeOfApplication
        }
        console.log("completedApplication", completedApplication);
        axios.post('http://localhost:4000/tasks', JSON.stringify(completedApplication), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
}


    render(){
        return(
            <div className='container application-form'>
            <div className='row'>
                <Link to='/'>
                <button className='btn btn-secondary'><i class="fas fa-arrow-left"></i></button>
                </Link>
                </div>

                <form onSubmit={this.handleSubmit}  className='container form-background'>
            
                <div className='row' >
            
                        <div className=' form-group col-md-4'>
                        {/* <div className='caption'>Personal data</div> */}
                            <label>
                                Social security number
                            </label>
                            <input 
                                className='form-control'
                                type='text'
                                onChange={this.handleChange}
                                name='socialSecurityNumber'
                                value={this.state.socialSecurityNumber}
                                onBlur={this.formValueChecker}>
                            </input>       
                            <output style={{display: this.state.displayError}}
                                    className='errorMessage'>{this.state.errorMessage
                            }</output>
                        </div>
            
                        <div className='form-group col-md-4'>
                            <label>
                                Name
                            </label>
                            <input 
                                className='form-control'
                                name='name'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.name}/>
                        </div>
                        
                        <div className='form-group col-md-4'>
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
                        
                        <div className='form-group  col-md-4'>
                            <label>
                                Family name
                            </label>
                          <input
                             name='familyName'
                             className='form-control'
                             type='text'
                             onChange={this.handleChange}
                             value={this.state.familyName}>
                            </input>
                       </div>
                        
                        <div className='form-group  col-md-4'>
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
                        
                            <div className='form-group  col-md-4'>
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
        
                        <div className='form-group  col-md-4'>
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
                        
                        <div className='form-group  col-md-4'>
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
                        
                        <div className='form-group  col-md-4'>
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
                        
                        <div className='form-group  col-md-4'>
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
                        
                        <div className='form-group  col-md-4'>
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
                        
                        <div className="form-group  col-md-4">
                            <label>
                                Phone number
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='phoneNumber'
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}/>
                        </div>
                    {/* <div className='caption'>
                            Contact
                        </div> */}
                        <div className='form-group  col-md-4'>
                            <label>
                                Street
                            </label>
                            <input
                                name='street'
                                type='text'
                                value={this.state.street}
                                className='form-control'
                                onChange={this.handleChange}/>
                        </div>
                        <div className='form-group  col-md-4'>
                            <label>
                                House number
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='houseNumber'
                                value={this.state.houseNumber}
                                onChange={this.handleChange}/>
                        </div>
                        <div className='form-group  col-md-4'>
                            <label>
                                Flat
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='flatNumber'
                                value={this.state.flatNumber}
                                onChange={this.handleChange}/>
                        </div>
                        <div className='form-group  col-md-4'>
                            <label>
                                Postal code
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='postalCode'
                                value={this.state.postalCode}
                                onChange={this.handleChange}
                            />
                        </div>
                        
                        <div className="form-group  col-md-4">
                            <label>
                                Electronic address
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='electronicAddress'
                                value={this.state.electronicAddress}
                                onChange={this.handleChange}/>
                        </div>
                        
                        <div className="form-group  col-md-4">
                            <label>
                                Email
                            </label>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        
                        <div className='form-group  col-md-4'>
                            <label>
                                City
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='placeOfApplication'
                                value={this.state.placeOfApplication}
                                onChange={this.handleChange}/>
                        </div>
                        
                        <div className='form-group  col-md-4'>
                            <label>
                                Reason
                            </label>
                            <select 
                                name='reasonOfApplication'
                                className='form-control'
                                id='reason'

                                value={this.state.reasonOfApplication}
                                onChange={this.handleChange}>
                                {this.option.map((option, i)=> <option key={i} value={option}>{option}</option>)}
                        </select>
                     </div>
            
                       <div className='form-group  col-md-4'>
                            <textarea
                                placeholder='Add reason'
                                name='message'
                                value={this.state.message}
                                onChange={this.handleChange}
                                className='display-toggle reason-comment'
                                rows='2'
                                cols='50'>
                            </textarea>
                       </div>

                           <button
                                disabled={this.state.disabled}
                                onClick={this.showList}
                                type='submit'
                                className='btn btn-secondary submit-position'>
                            SUBMIT &nbsp; <i class="fas fa-file-export"></i>
                            
                            </button>
                            </div>
                </form>
            </div>
        )
    }
}

export default IdApplicationForm;
