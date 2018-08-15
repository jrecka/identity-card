import React from 'react';

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

    
    render(){
        return(
            <div>hejka</div>
        )
    }
}

export default IdForm;