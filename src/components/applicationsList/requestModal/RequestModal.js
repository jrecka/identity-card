import React from 'react';
import './modal.css';

const RequestModal = props => (
    <React.Fragment>
        <div className='modal-brand-container'>
            <div className="form-group modal-content">
                <div className="text-right">
                    <button className="modal-close-btn"
                            onClick={props.closeModal}>
                        <span className="fa fa-times"></span>
                    </button>
                </div>
                <div>
                    {props.userData.name}
                    {props.userData.birthplace}
                    {props.userData.dateOfApplication}
                    {props.userData.dateOfBirth}
                    {props.userData.electronicAddress}
                    {props.userData.email}
                    {props.userData.familyName}
                    {props.userData.flatNumber}
                    {props.userData.fathersName}
                    {props.userData.nationality}
                    {props.userData.street}
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default RequestModal;