import React from 'react';

const UserData = props => (
    <React.Fragment>
        <table className='user-list'>
            <thead>
                <th></th>
                <th></th>
           </thead>
        <tbody>
        <tr><td>Social security number:</td><td>{props.userData.socialSecurityNumber}</td></tr>
        <tr><td>Name:</td><td>{props.userData.name}</td></tr>
        <tr><td>Surname:</td><td>{props.userData.surname}</td></tr>
        <tr><td>Family name:</td><td>{props.userData.familyName}</td></tr>
        <tr><td>Date of birth:</td><td>{props.userData.dateOfBirth}</td></tr>
        <tr><td>Birthplace:</td><td>{props.userData.birthplace}</td></tr>
        <tr><td>Gender:</td><td>{props.userData.gender}</td></tr>
        <tr><td>Mother's name:</td><td>{props.userData.mothersName}</td></tr>
        <tr><td>Father's name:</td><td>{props.userData.fathersName}</td></tr>
        <tr><td>Mother's maiden name:</td><td>{props.userData.maidenName}</td></tr>
        <tr><td>Street:</td><td>{props.userData.street}</td></tr>
        <tr><td>House number:</td><td>{props.userData.houseNumber}</td></tr>
        <tr><td>Flat:</td><td>{props.userData.flatNumber}</td></tr>
        <tr><td>Postal code:</td><td>{props.userData.postalCode}</td></tr>
        <tr><td>City:</td><td>{props.userData.placeOfApplication}</td></tr>
        <tr><td>Phone number:</td><td>{props.userData.phoneNumber}</td></tr>
        <tr><td>Electronic adderss:</td><td>{props.userData.electronicAddress}</td></tr>
        <tr><td>Email:</td><td>{props.userData.email}</td></tr>
        <tr><td>Reason of application:</td><td>{props.userData.reasonOfApplication}</td></tr>
        </tbody>
        </table>
    </React.Fragment>
);
export default UserData;