import React from 'react';
import './modal.css';
import UserData from './userData/UserData';

const RequestModal = props => (
    <React.Fragment>
        <div className='modal-brand-container'>
            <div className="form-group modal-content">
                <div className="text-right">
                    <button className="btn btn-secondary"
                            onClick={props.closeModal}>
                        <span className="fa fa-times"></span>
                    </button>
                </div>
                <div>
                    <UserData userData={props.userData}/>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default RequestModal;