import React from 'react';
import axios from 'axios';


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
        })
        this.showTextarea();
    }
    formSubmit = e => {
        e.preventDefault();
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
            placeOfApplication: this.state.placeOfApplication,
        }
        axios.post('http://localhost:4000/tasks', JSON.stringify(completedApplication)).then(res=>{console.log(res);
    });
}


    render(){
        return(
            <div>
            <div className='container  application-form'>
            <div>
                <form onSubmit={this.formSubmit} className='fill-area container' >
                <div className='row '>
                <div></div>
                <div className='col-md-10'>
                <div className='row'>
                <div className='container'></div>                 
                   <div className='col-md-5'>
                        <div className='form-group'>
                        {/* <div className='caption'>Personal data</div> */}
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
                        {/* <div className='caption'>
                            Parents data
                        </div> */}
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
                        <div ></div>
                        </div>
                        <div className='col-md-5'>
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
                        {/* <div className='caption'>
                            Contact
                        </div> */}
                        <div className='form-group'>
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
                        <div className='form-group'>
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
                        <div className='form-group'>
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
                        <div className='form-group'>
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
                        <div className="form-group">
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
                        <div className="form-group">
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
                        <div className="form-group">
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
                        <div className='form-group'>
                            <label>
                                Reason for submitting the application 
                            </label>
                            <select 
                                name='reasonOfApplication'
                                className='form-control'
                                id='reason'
                                value={this.state.reasonOfApplication}
                                onChange={this.handleChange}>
                                {this.option.map((option, i)=> <option key={i} value={option}>{option}</option>)}
                            </select>
                            <textarea
                                name='message'
                                value={this.state.message}
                                onChange={this.handleChange}
                                className='display-toggle reason-comment'
                                rows='4'
                                cols='50'>
                            </textarea>
                        </div>
                        <div className='form-group'>
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
                        {/* <div className='form-group'>
                            <label>
                                Date 
                            </label>
                            <input
                                className='form-control'
                                type='date'
                                name='dateOfApplication'
                                value={this.state.dateOfApplication}
                                onChange={this.handleChange}/>
                        </div> */}
                        </div>
                        </div>
                        </div>
                        </div>
    
                            <button
                                onClick={this.showData}
                                type='submit'
                                className='btn btn-secondary submit-possition'>
                                Send
                            </button>
                    </form>
                    </div>
            </div>
            </div>
        )
    }
}

export default IdApplicationForm;


{/* <IdApplicationForm option={[' ', 'First Id', 'Change of data contained in the Id', 'Id is out of date', 'Id is lost', 'Face image changed', 'Damage of Id', 'Another reason']}/> */}