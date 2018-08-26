import React from 'react';

class Declaration extends React.Component{
    state={
        declaration: false
    }
    render(){
        return(
            <div className='container'>
                <header>Declaration</header>
                <cite> someone gives you untruths or conceals the truth in the application, he will be punished
imprisonment from 6 months to 8 years.
I declare that I understand criminal liability for suppressing the truth or
providing untruth in this application. I confirm with my own signature,
that the above data is true.
Legal basis: art. 233 § 1 in connection with § 6 of the Act of June 6, 1997.
The Penal Code.</cite>
            </div>
        )
    }
}
export default Declaration;