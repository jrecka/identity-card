import React from "react";
import RestApiService from '../../service/restApiService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class IdApplicationForm extends React.Component {
    constructor(props) {
        super(props);
        this.option = [' ', 'First Id', 'Change of data contained in the Id', 'Id is out of date', 'Id is lost', 'Face image changed', 'Damage of Id', 'Another reason'];
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
            dateOfApplication: new Date().toISOString().substring(0, 10),
            placeOfApplication: '',
            disabled: true,
            errorMessage: 'rtyhyr',
            displayError: 'none'

        }
    }

    showTextarea = () => {
        let textarea = document.querySelector('textarea'),
            selectVal = document.getElementById('reason').value;
        if (selectVal === "Another reason") {
            textarea.classList.remove('display-toggle');
        } else {
            textarea.classList.add('display-toggle');
        }
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.showTextarea();
    };

    showList = () => {
        setTimeout(() => window.location.href = '#/applicationsList', 3000)
    };

    isFormChecked = state => {
        return state.socialSecurityNumber.length !== 11 || !state.name || !state.surname || !state.familyName || !state.birthplace || !state.mothersName || !state.fathersName || !state.maidenName || !state.street || !state.houseNumber || !state.postalCode || !state.placeOfApplication || !state.email || !state.reasonOfApplication;
    };

    errorSocialSecurityNumber = state => {
        return state.socialSecurityNumber !== '' && state.socialSecurityNumber.length !== 11 ? {display: 'block'} : {display: 'none'};
    };

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
        };

        RestApiService.createApplication(JSON.stringify(completedApplication));
    };

    handleChangeDatePicker = (date) => {
        let dateValue = date._d.toISOString().substr(0, 10);
        this.setState({
            dateOfBirth: dateValue
        });
    };

    render() {
        const formChecker = this.isFormChecked(this.state);
        const displayError = this.errorSocialSecurityNumber(this.state);
        return (
            <React.Fragment>
                <div className='container'>
                    <form onSubmit={this.handleSubmit} className='d-flex  justify-content-center'>
                        <div className="col-lg-8 col-md-10 form-background ">
                            <p className='form-headers'>Personal data</p>
                            <div className='line'></div>
                            <div className='form-group'>
                                <label>
                                    Social security number
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    onChange={this.handleChange}
                                    name='socialSecurityNumber'
                                    value={this.state.socialSecurityNumber}
                                >
                                </input>
                                <output style={displayError}
                                        className='errorMessage'>
                                    <i className="fas fa-exclamation-circle"></i>
                                    <span>The length of personal identity number is 11</span></output>
                            </div>
                            <div className='form-group'>
                                <label>
                                    Name
                                </label>
                                <input
                                    className='form-control'
                                    name='name'
                                    type='text'
                                    onChange={this.handleChange}
                                    value={this.state.name}/>
                                <p className='info-message'>
                                    <i class="fas fa-info-circle"></i>
                                    All names
                                </p>
                                <p>
                                </p>
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

                            <div className='form-group nationality-style'>
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
                                <p className='info-message'>
                                    <i className="fas fa-info-circle"></i>
                                    <span>
                                Applies to women and men
                            </span>
                                </p>
                            </div>
                            <div className='form-group'>
                                <label>
                                    Date of birth
                                </label>
                                <input
                                    type='date'
                                    className='form-control'
                                    value={this.state.dateOfBirth}
                                    onChange={this.handleChangeDatePicker}
                                ></input>
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
                                <select name='nationality'
                                        className='form-control'
                                        type='text'
                                        onChange={this.handleChange}
                                        value={this.state.nationality}>
                                    <option>
                                        Polish
                                    </option>
                                    <option>
                                        Other nationality
                                    </option>
                                </select>
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
                            <p className='form-headers'>Parents data</p>
                            <div className='line'></div>
                            <div className='form-group'>
                                <label>
                                    Mother's name (first)
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
                                    Father's name (first)
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
                            <p className='form-headers'>Contact address</p>
                            <div className='line'></div>
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
                                    Electronic address
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='electronicAddress'
                                    value={this.state.electronicAddress}
                                    onChange={this.handleChange}/>

                                <p className='info-message'>
                                    <i className="fas fa-info-circle"></i>
                                    <span>EPUAP mailbox address. Fill out to receive an electronic document.</span>
                                </p>
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
                            <p className='form-headers'>Reason of request</p>
                            <div className='line'></div>
                            <div className='form-group'>
                                <label>Choose reason</label>
                                <select
                                    name='reasonOfApplication'
                                    className='form-control'
                                    id='reason'
                                    value={this.state.reasonOfApplication}
                                    onChange={this.handleChange}>
                                    {this.option.map((option, i) => <option key={i} value={option}>{option}</option>)}
                                </select>
                            </div>

                            <div className='form-group'>
                            <textarea
                                placeholder='Add reason'
                                name='message'
                                value={this.state.message}
                                onChange={this.handleChange}
                                className='display-toggle reason'
                                rows='2'
                                cols='50'>
                            </textarea>
                            </div>
                            <div className='text-center'>
                                <button
                                    disabled={formChecker}
                                    onClick={this.showList}
                                    type='submit'
                                    className='btn btn-secondary submit-btn'>
                                    SUBMIT &nbsp; <i class="fas fa-file-export"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default IdApplicationForm;
